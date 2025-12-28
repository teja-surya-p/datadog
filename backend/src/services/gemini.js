import { GoogleGenerativeAI } from '@google/generative-ai';
import { env } from '../config/env.js';

const ensureApiKey = () => {
  if (!env.geminiApiKey) {
    const error = new Error('GEMINI_API_KEY is not configured');
    error.status = 500;
    throw error;
  }
};

export const generateChatResponse = async ({ history = [], message }) => {
  ensureApiKey();
  const client = new GoogleGenerativeAI(env.geminiApiKey);
  const model = client.getGenerativeModel({
    model: env.geminiModel,
    systemInstruction: env.systemPrompt,
  });

  const geminiHistory = history.map((entry) => ({
    role: entry.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: entry.content }],
  }));

  const chat = model.startChat({
    history: geminiHistory,
    generationConfig: {
      temperature: env.geminiTemperature,
      maxOutputTokens: env.geminiMaxOutputTokens,
    },
  });

  const result = await chat.sendMessage(message);
  return result.response.text();
};
