import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { app } from './config';
import { initializeAnalytics } from './analytics';

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize analytics if supported
if (typeof window !== 'undefined') {
  initializeAnalytics();
}

export * from './config';