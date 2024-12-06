import { auth, db } from '@/lib/firebase';
import { User, UserRole } from '@/types';
import { doc, getDoc } from 'firebase/firestore';

export async function getUserRole(uid: string): Promise<UserRole> {
  const userDoc = await getDoc(doc(db, 'users', uid));
  if (!userDoc.exists()) return 'voter';
  return userDoc.data().role as UserRole;
}

export async function getCurrentUser(): Promise<User | null> {
  const currentUser = auth.currentUser;
  if (!currentUser) return null;

  const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
  if (!userDoc.exists()) return null;

  const userData = userDoc.data();
  return {
    id: currentUser.uid,
    email: currentUser.email!,
    role: userData.role as UserRole,
    name: userData.name || currentUser.displayName || '',
    createdAt: userData.createdAt.toDate(),
    updatedAt: userData.updatedAt.toDate(),
  };
}