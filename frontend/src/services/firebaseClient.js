import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCG2ow8fZ6rnxUGSJ9S1QPibOMPwMttPgY',
  authDomain: 'datadog-bc01f.firebaseapp.com',
  projectId: 'datadog-bc01f',
  storageBucket: 'datadog-bc01f.firebasestorage.app',
  messagingSenderId: '144185475752',
  appId: '1:144185475752:web:d2a925b652cf577e58789d',
  measurementId: 'G-LS9XF3JGFM',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
const signOutUser = () => signOut(auth);
const subscribeToAuth = (callback) => onAuthStateChanged(auth, callback);

export { app, auth, analytics, signInWithGoogle, signOutUser, subscribeToAuth };
