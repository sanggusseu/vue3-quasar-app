import { db } from 'boot/firebase';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';

export async function createPost(data) {
  // await setDoc(
  //   doc(db, 'posts', 'post-id'),
  //   {
  //     ...data,
  //     readCount: 0,
  //     likeCount: 0,
  //     commentCount: 0,
  //     bookmarkCount: 0,
  //     createAt: serverTimestamp(),
  //   },
  //   { merge: true },
  // );
  const docRef = await addDoc(collection(db, 'posts'), {
    ...data,
    readCount: 0,
    likeCount: 0,
    commentCount: 0,
    bookmarkCount: 0,
    createAt: serverTimestamp(),
  });
  return docRef.id;
}
