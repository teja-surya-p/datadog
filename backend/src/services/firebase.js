import admin from 'firebase-admin';
import { env } from '../config/env.js';

const initFirebase = () => {
  if (admin.apps.length) {
    return;
  }

  if (env.firebaseProjectId && env.firebaseClientEmail && env.firebasePrivateKey) {
    const privateKey = env.firebasePrivateKey.replace(/\\n/g, '\n');
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: env.firebaseProjectId,
        clientEmail: env.firebaseClientEmail,
        privateKey,
      }),
    });
    return;
  }

  admin.initializeApp();
};

initFirebase();

export { admin };
