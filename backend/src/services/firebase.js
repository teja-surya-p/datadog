import admin from 'firebase-admin';
import { env } from '../config/env.js';

const normalizePrivateKey = (value) => {
  if (!value) {
    return value;
  }
  const trimmed = String(value).trim();
  const unquoted =
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
      ? trimmed.slice(1, -1)
      : trimmed;
  return unquoted.replace(/\\n/g, '\n').replace(/\r/g, '').trim();
};

const initFirebase = () => {
  if (env.disableFirebase) {
    console.log('[firebase] DISABLE_FIREBASE enabled. Skipping Firebase Admin initialization.');
    return;
  }
  if (admin.apps.length) {
    return;
  }

  if (env.firebaseProjectId && env.firebaseClientEmail && env.firebasePrivateKey) {
    console.log('[firebase] Initializing admin SDK with service account:', {
      projectId: env.firebaseProjectId,
      clientEmail: env.firebaseClientEmail,
      privateKeyPresent: Boolean(env.firebasePrivateKey),
      privateKeyLength: env.firebasePrivateKey?.length || 0,
    });

    const privateKey = normalizePrivateKey(env.firebasePrivateKey);
    if (!privateKey?.includes('BEGIN PRIVATE KEY') || !privateKey?.includes('END PRIVATE KEY')) {
      console.error(
        '[firebase] FIREBASE_PRIVATE_KEY does not look like a valid PEM. Falling back to default initialization. '
      );
      console.error(
        '[firebase] If you want to run without Firebase (LLM-only mode), set DISABLE_FIREBASE=true in backend .env'
      );
      admin.initializeApp();
      return;
    }

    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: env.firebaseProjectId,
        clientEmail: env.firebaseClientEmail,
        privateKey,
      }),
    });
    return;
  }

  console.log('[firebase] Initializing admin SDK with application default credentials');
  admin.initializeApp();
};

initFirebase();

if (!env.disableFirebase) {
  admin
    .firestore()
    .listCollections()
    .then(() => {
      console.log('[firebase] Firestore auth check: OK');
    })
    .catch((error) => {
      console.error('[firebase] Firestore auth check failed:', {
        message: error?.message,
        code: error?.code,
        details: error?.details,
      });
    });

  admin
    .auth()
    .listUsers(1)
    .then(() => {
      console.log('[firebase] Auth admin check: OK');
    })
    .catch((error) => {
      console.error('[firebase] Auth admin check failed:', {
        message: error?.message,
        code: error?.code,
        details: error?.details,
      });
    });
}

export { admin };
