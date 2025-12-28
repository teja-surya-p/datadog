import { apiRequest } from './apiClient.js';

export const fetchChats = () => apiRequest('/chats');

export const createChat = (title) =>
  apiRequest('/chats', {
    method: 'POST',
    body: title ? { title } : {},
  });

export const fetchChatMessages = (chatId) => apiRequest(`/chats/${chatId}/messages`);

export const sendChatMessage = (chatId, payload) =>
  apiRequest(`/chats/${chatId}/messages`, {
    method: 'POST',
    body: payload,
  });

export const sendMessageFeedback = (messageId, rating) =>
  apiRequest(`/messages/${messageId}/feedback`, {
    method: 'POST',
    body: { rating },
  });
