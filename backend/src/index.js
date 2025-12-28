import express from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import { authenticateRequest } from './middleware/auth.js';
import chatsRouter from './routes/chats.js';
import feedbackRouter from './routes/feedback.js';

const app = express();

app.use((req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || env.corsOrigins.length === 0) {
        return callback(null, true);
      }
      if (env.corsOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
  })
);

app.use(express.json({ limit: '2mb' }));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api', authenticateRequest);
app.use('/api/chats', chatsRouter);
app.use('/api/messages', feedbackRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Unexpected error';
  // eslint-disable-next-line no-console
  console.error('Request failed', {
    method: req.method,
    path: req.originalUrl,
    status,
    message,
    code: error?.code,
    details: error?.details,
  });
  // eslint-disable-next-line no-console
  console.error(error?.stack || error);
  res.status(status).json({ error: message });
});

app.listen(env.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend listening on :${env.port}`);
});
