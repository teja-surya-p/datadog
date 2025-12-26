import { apiRequest } from './apiClient.js';

export const fetchChats = () => apiRequest('/chats');

export const fetchChatMessages = (chatId) => apiRequest(`/chats/${chatId}/messages`);

export const sendChatMessage = (chatId, payload) =>
  apiRequest(`/chats/${chatId}/messages`, {
    method: 'POST',
    body: payload,
  });
