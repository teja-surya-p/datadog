import { GoogleGenerativeAI } from '@google/generative-ai';
import { env } from '../config/env.js';

export const generateChatResponse = async ({ history = [], message }) => {
  console.log('=== Gemini API Request Start ===');
  console.log('Environment check:');
  console.log('- API Key exists:', !!env.geminiApiKey);
  console.log('- API Key length:', env.geminiApiKey?.length);
  console.log('- API Key format:', env.geminiApiKey?.startsWith('AIza') ? 'Valid format' : 'Invalid format');
  console.log('- Model:', env.geminiModel);
  console.log('- Temperature:', env.geminiTemperature);
  console.log('- Max tokens:', env.geminiMaxOutputTokens);
  console.log('- Message:', message);
  console.log('- History length:', history.length);

  if (!env.geminiApiKey) {
    const error = new Error('GEMINI_API_KEY is not configured');
    error.status = 500;
    throw error;
  }

  try {
    console.log('Initializing GoogleGenerativeAI client...');
    const client = new GoogleGenerativeAI(env.geminiApiKey);
    
    console.log('Getting generative model...');
    const model = client.getGenerativeModel({
      model: env.geminiModel,
      systemInstruction: env.systemPrompt,
    });

    console.log('Processing chat history...');
    const geminiHistory = history.map((entry) => ({
      role: entry.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: entry.content }],
    }));

    console.log('Starting chat session...');
    const chat = model.startChat({
      history: geminiHistory,
      generationConfig: {
        temperature: env.geminiTemperature,
        maxOutputTokens: env.geminiMaxOutputTokens,
      },
    });

    console.log('Sending message to Gemini API...');
    const result = await chat.sendMessage(message);
    
    console.log('Getting response text...');
    const response = result.response.text();
    
    console.log('=== Gemini API Request Success ===');
    console.log('Response length:', response.length);
    
    return response;
  } catch (error) {
    console.log('=== Gemini API Error ===');
    console.log('Error type:', error.constructor.name);
    console.log('Error message:', error.message);
    console.log('Error status:', error.status);
    console.log('Full error:', error);
    
    // Re-throw with more detailed information
    const enhancedError = new Error(`Gemini API Error: ${error.message}`);
    enhancedError.status = error.status || 500;
    enhancedError.originalError = error;
    throw enhancedError;
  }
};
