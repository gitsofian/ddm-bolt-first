import { getAnalytics, isSupported } from 'firebase/analytics';
import { app } from './config';

export const initializeAnalytics = async () => {
  try {
    if (await isSupported()) {
      return getAnalytics(app);
    }
  } catch (error) {
    console.warn('Firebase Analytics is not supported in this environment');
    return null;
  }
};