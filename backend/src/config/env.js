import dotenv from 'dotenv';

dotenv.config();

const toNumber = (value, fallback) => {
  const parsed = Number(value);
  return Number.isNaN(parsed) ? fallback : parsed;
};

export const env = {
  port: toNumber(process.env.PORT, 5050),
  corsOrigins: (process.env.CORS_ORIGINS || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
  geminiApiKey: process.env.GEMINI_API_KEY,
  geminiModel: process.env.GEMINI_MODEL || 'gemini-1.5-flash',
  geminiTemperature: toNumber(process.env.GEMINI_TEMPERATURE, 0.4),
  geminiMaxOutputTokens: toNumber(process.env.GEMINI_MAX_OUTPUT_TOKENS, 800),
  systemPrompt:
    process.env.SYSTEM_PROMPT ||
    'You are Orbit AI, a concise, helpful assistant that responds in clear steps.',
  firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
  firebaseClientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  firebasePrivateKey: process.env.FIREBASE_PRIVATE_KEY,
};
