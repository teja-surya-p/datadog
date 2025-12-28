import { env } from '../config/env.js';

const buildPrompt = ({ history = [], message }) => {
  const lines = [];
  if (env.systemPrompt) {
    lines.push(`System: ${env.systemPrompt}`);
  }
  history.forEach((entry) => {
    if (!entry?.content) {
      return;
    }
    const roleLabel = entry.role === 'assistant' ? 'Assistant' : 'User';
    lines.push(`${roleLabel}: ${entry.content}`);
  });
  if (message) {
    lines.push(`User: ${message}`);
  }
  lines.push('Assistant:');
  return lines.join('\n');
};

export const generateOllamaResponse = async ({ history, message }) => {
  if (!env.ollamaModel) {
    const error = new Error('OLLAMA_MODEL is not configured');
    error.status = 500;
    throw error;
  }

  const payload = {
    model: env.ollamaModel,
    prompt: buildPrompt({ history, message }),
    stream: false,
    options: {
      temperature: env.ollamaTemperature,
      num_predict: env.ollamaNumPredict,
    },
  };

  const response = await fetch(`${env.ollamaBaseUrl}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || 'Ollama request failed');
  }

  const data = await response.json();
  const content = data?.response;

  if (!content) {
    throw new Error('Ollama returned an empty response');
  }

  return content.trim();
};
