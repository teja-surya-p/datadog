import { env } from '../config/env.js';
import { generateChatResponse as generateGeminiResponse } from './gemini.js';
import { generateOllamaResponse } from './ollama.js';

export const generateChatResponse = async (payload) => {
  if (env.llmProvider === 'ollama') {
    return generateOllamaResponse(payload);
  }

  if (env.llmProvider === 'gemini') {
    return generateGeminiResponse(payload);
  }

  const error = new Error(`Unsupported LLM_PROVIDER: ${env.llmProvider}`);
  error.status = 500;
  throw error;
};
