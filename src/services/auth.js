import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  updatePassword,
} from 'firebase/auth';
import { auth } from 'src/boot/firebase';

const DEFAULT_PHOTO_URL =
  'https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=';

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  console.log('user: ', result.user);
}

export async function logout() {
  await signOut(auth);
}

export function generateDefaultPhotoURL(uid) {
  return `${DEFAULT_PHOTO_URL}${uid}`;
}

export async function signUpWithEmail({ email, password, nickname }) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  updateProfile(user, {
    displayName: nickname,
    photoURL: generateDefaultPhotoURL(user.uid),
  });
  console.log(`user: ${user}`);
}

export async function signInWithEmail({ email, password }) {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
}

export async function sendPasswordReset(email) {
  await sendPasswordResetEmail(auth, email);
}

export async function updateUserPassword(newPassword) {
  await updatePassword(auth.currentUser, newPassword);
}
