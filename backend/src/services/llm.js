import { env } from '../config/env.js';
import { generateChatResponse as generateGeminiResponse } from './gemini.js';

export const generateChatResponse = async (payload) => {
  // eslint-disable-next-line no-console
  console.log('[llm] provider:', env.llmProvider);
  // eslint-disable-next-line no-console
  console.log('[llm] payload:', {
    history: Array.isArray(payload?.history) ? payload.history.length : 0,
    hasMessage: Boolean(payload?.message),
  });
  return generateGeminiResponse(payload);
};
