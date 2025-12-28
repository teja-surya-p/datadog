import { admin } from './firebase.js';
import { env } from '../config/env.js';

const db = env.disableFirebase ? null : admin.firestore();

const memory = {
  chats: new Map(),
  messages: new Map(),
};

const ensureChat = (chatId) => {
  if (!memory.chats.has(chatId)) {
    const error = new Error('Chat not found');
    error.status = 404;
    throw error;
  }
  return memory.chats.get(chatId);
};

const toIso = (value) => {
  if (!value) {
    return null;
  }
  if (typeof value === 'string') {
    return value;
  }
  if (value.toDate) {
    return value.toDate().toISOString();
  }
  return new Date(value).toISOString();
};

const mapChat = (doc) => {
  const data = doc.data();
  return {
    id: doc.id,
    ...data,
    createdAt: toIso(data.createdAt),
    updatedAt: toIso(data.updatedAt),
  };
};

const mapMessage = (doc) => {
  const data = doc.data();
  return {
    id: doc.id,
    ...data,
    createdAt: toIso(data.createdAt),
  };
};

export const ensureChatAccess = async (chatId, userId) => {
  if (env.disableFirebase) {
    const chat = ensureChat(chatId);
    if (chat.userId !== userId) {
      const error = new Error('Not authorized');
      error.status = 403;
      throw error;
    }
    return chat;
  }
  const chatSnap = await db.collection('chats').doc(chatId).get();
  if (!chatSnap.exists) {
    const error = new Error('Chat not found');
    error.status = 404;
    throw error;
  }
  const chat = chatSnap.data();
  if (chat.userId !== userId) {
    const error = new Error('Not authorized');
    error.status = 403;
    throw error;
  }
  return { id: chatSnap.id, ...chat };
};

export const listChats = async (userId) => {
  if (env.disableFirebase) {
    const chats = Array.from(memory.chats.values())
      .filter((chat) => chat.userId === userId)
      .sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1));
    return chats;
  }
  const snap = await db
    .collection('chats')
    .where('userId', '==', userId)
    .orderBy('updatedAt', 'desc')
    .get();
  return snap.docs.map(mapChat);
};

export const createChat = async (userId, title) => {
  if (env.disableFirebase) {
    const now = new Date().toISOString();
    const id = `chat_${Math.random().toString(36).slice(2, 10)}`;
    const payload = {
      id,
      userId,
      title: title || 'New chat',
      lastMessage: '',
      createdAt: now,
      updatedAt: now,
    };
    memory.chats.set(id, payload);
    memory.messages.set(id, []);
    return payload;
  }
  const now = admin.firestore.Timestamp.now();
  const chatRef = db.collection('chats').doc();
  const payload = {
    userId,
    title: title || 'New chat',
    lastMessage: '',
    createdAt: now,
    updatedAt: now,
  };
  await chatRef.set(payload);
  return {
    id: chatRef.id,
    ...payload,
    createdAt: now.toDate().toISOString(),
    updatedAt: now.toDate().toISOString(),
  };
};

export const listMessages = async (chatId, userId, options = {}) => {
  if (env.disableFirebase) {
    await ensureChatAccess(chatId, userId);
    const all = memory.messages.get(chatId) || [];
    const ordered = options.order === 'desc' ? [...all].reverse() : [...all];
    if (options.limit) {
      return ordered.slice(0, options.limit);
    }
    return ordered;
  }
  await ensureChatAccess(chatId, userId);
  let query = db
    .collection('messages')
    .where('chatId', '==', chatId)
    .orderBy('createdAt', options.order === 'desc' ? 'desc' : 'asc');
  if (options.limit) {
    query = query.limit(options.limit);
  }
  const snap = await query.get();
  return snap.docs.map(mapMessage);
};

export const addMessage = async ({ chatId, userId, role, content, attachments }) => {
  if (env.disableFirebase) {
    await ensureChatAccess(chatId, userId);
    const now = new Date().toISOString();
    const payload = {
      id: `msg_${Math.random().toString(36).slice(2, 10)}`,
      chatId,
      userId,
      role,
      content,
      attachments: attachments || [],
      createdAt: now,
    };
    const arr = memory.messages.get(chatId) || [];
    arr.push(payload);
    memory.messages.set(chatId, arr);
    return payload;
  }
  const now = admin.firestore.Timestamp.now();
  const messageRef = db.collection('messages').doc();
  const payload = {
    chatId,
    userId,
    role,
    content,
    attachments: attachments || [],
    createdAt: now,
  };
  await messageRef.set(payload);
  return {
    id: messageRef.id,
    ...payload,
    createdAt: now.toDate().toISOString(),
  };
};

export const updateChatMeta = async (chatId, updates) => {
  if (env.disableFirebase) {
    const chat = ensureChat(chatId);
    const updatedAt = new Date().toISOString();
    memory.chats.set(chatId, { ...chat, ...updates, updatedAt });
    return;
  }
  const payload = {
    ...updates,
    updatedAt: admin.firestore.Timestamp.now(),
  };
  await db.collection('chats').doc(chatId).set(payload, { merge: true });
};

export const recordFeedback = async (messageId, userId, rating) => {
  if (env.disableFirebase) {
    for (const [chatId, messages] of memory.messages.entries()) {
      const idx = messages.findIndex((message) => message.id === messageId);
      if (idx === -1) {
        continue;
      }
      const message = messages[idx];
      if (message.userId !== userId) {
        const error = new Error('Not authorized');
        error.status = 403;
        throw error;
      }
      const feedback = { rating, createdAt: new Date().toISOString() };
      const next = { ...message, feedback };
      const clone = [...messages];
      clone[idx] = next;
      memory.messages.set(chatId, clone);
      return next;
    }
    const error = new Error('Message not found');
    error.status = 404;
    throw error;
  }
  const messageRef = db.collection('messages').doc(messageId);
  const messageSnap = await messageRef.get();
  if (!messageSnap.exists) {
    const error = new Error('Message not found');
    error.status = 404;
    throw error;
  }
  const message = messageSnap.data();
  if (message.userId !== userId) {
    const error = new Error('Not authorized');
    error.status = 403;
    throw error;
  }
  const feedback = {
    rating,
    createdAt: admin.firestore.Timestamp.now(),
  };
  await messageRef.set({ feedback }, { merge: true });
  return {
    ...mapMessage(messageSnap),
    feedback: {
      rating,
      createdAt: feedback.createdAt.toDate().toISOString(),
    },
  };
};
