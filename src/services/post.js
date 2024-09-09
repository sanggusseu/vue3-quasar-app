import { db } from 'boot/firebase';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
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

export async function getPosts(params) {
  console.log('### params: ', params);

  // 1] 컬렉션에 있는 모든 문서 조회
  // const querySnapshot = await getDocs(collection(db, 'posts'));
  // const posts = [];
  // querySnapshot.forEach(docs => {
  // doc.data() is never undefined for query doc snapshots
  //   console.log(docs.id, ' => ', docs.data());
  //   posts.push(docs.data());
  // });
  // const posts = querySnapshot.docs.map(docs => {
  //   const data = docs.data();
  //   return { ...data, id: docs.id, createAt: data.createAt?.toDate() };
  // });
  // console.log(posts);

  // 2] 컬렉션에 있는 문서를 쿼리해서 조회
  const conditions = [];
  if (params?.category) {
    conditions.push(where('category', '==', params?.category));
  }
  if (params?.tags && params?.tags.length > 0) {
    conditions.push(where('tags', 'array-contains-any', params?.tags));
  }

  const q = query(collection(db, 'posts'), ...conditions);
  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map(docs => {
    const data = docs.data();
    return { ...data, id: docs.id, createAt: data.createAt?.toDate() };
  });
  return posts;
}
