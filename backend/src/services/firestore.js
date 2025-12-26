import { admin } from './firebase.js';

const db = admin.firestore();

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
  const snap = await db
    .collection('chats')
    .where('userId', '==', userId)
    .orderBy('updatedAt', 'desc')
    .get();
  return snap.docs.map(mapChat);
};

export const createChat = async (userId, title) => {
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
  const payload = {
    ...updates,
    updatedAt: admin.firestore.Timestamp.now(),
  };
  await db.collection('chats').doc(chatId).set(payload, { merge: true });
};

export const recordFeedback = async (messageId, userId, rating) => {
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
