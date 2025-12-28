import express from 'express';
import { addMessage, createChat, listChats, listMessages, updateChatMeta } from '../services/firestore.js';
import { generateChatResponse } from '../services/llm.js';

const router = express.Router();

const buildHistory = (messages) =>
  messages
    .filter((message) => message.content)
    .map((message) => ({
      role: message.role === 'ai' ? 'assistant' : 'user',
      content: message.content,
    }));

router.get('/', async (req, res, next) => {
  try {
    const chats = await listChats(req.user.uid);
    res.json({ chats });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const title = typeof req.body.title === 'string' ? req.body.title.trim() : '';
    const chat = await createChat(req.user.uid, title);
    res.status(201).json({ chat });
  } catch (error) {
    next(error);
  }
});

router.get('/:chatId/messages', async (req, res, next) => {
  try {
    const { chatId } = req.params;
    const limit = req.query.limit ? Number(req.query.limit) : undefined;
    const messages = await listMessages(chatId, req.user.uid, { limit });
    res.json({ messages });
  } catch (error) {
    next(error);
  }
});

router.post('/:chatId/messages', async (req, res, next) => {
  try {
    const { chatId } = req.params;
    const content = typeof req.body.content === 'string' ? req.body.content.trim() : '';
    const attachments = Array.isArray(req.body.attachments) ? req.body.attachments : [];

    if (!content && attachments.length === 0) {
      return res.status(400).json({ error: 'Message content or attachments required' });
    }

    const priorMessages = await listMessages(chatId, req.user.uid, { limit: 12, order: 'desc' });
    const history = buildHistory(priorMessages.reverse());

    const userMessage = await addMessage({
      chatId,
      userId: req.user.uid,
      role: 'user',
      content: content || 'Shared files for review.',
      attachments,
    });

    const aiResponse = await generateChatResponse({
      history,
      message: content || 'Summarize the attached files.',
    });

    const aiMessage = await addMessage({
      chatId,
      userId: req.user.uid,
      role: 'ai',
      content: aiResponse,
      attachments: [],
    });

    await updateChatMeta(chatId, {
      lastMessage: content || 'Shared files',
    });

    res.status(201).json({
      chatId,
      userMessage,
      aiMessage,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
