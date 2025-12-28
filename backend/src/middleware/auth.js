import { admin } from '../services/firebase.js';
import { env } from '../config/env.js';

export const authenticateRequest = async (req, res, next) => {
  if (env.disableFirebase) {
    req.user = { uid: 'local-user' };
    return next();
  }
  try {
    const header = req.headers.authorization || '';
    const [, token] = header.split(' ');
    // eslint-disable-next-line no-console
    console.log('[auth] Authorization header present:', Boolean(header));
    // eslint-disable-next-line no-console
    console.log('[auth] Bearer token present:', Boolean(token), 'length:', token?.length || 0);
    if (!token) {
      return res.status(401).json({ error: 'Missing authorization token' });
    }

    const decoded = await admin.auth().verifyIdToken(token);
    // eslint-disable-next-line no-console
    console.log('[auth] Token verified for uid:', decoded?.uid);
    req.user = decoded;
    return next();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[auth] verifyIdToken failed', {
      message: error?.message,
      code: error?.code,
    });
    return res.status(401).json({ error: 'Invalid authorization token' });
  }
};
