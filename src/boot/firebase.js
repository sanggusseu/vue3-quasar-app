import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAuthStore } from 'src/stores/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBmADvAfBBezrxYr7-ex44v6D2aA3uy3zI',
  authDomain: 'vue3-firebase-app-b91e4.firebaseapp.com',
  projectId: 'vue3-firebase-app-b91e4',
  storageBucket: 'vue3-firebase-app-b91e4.appspot.com',
  messagingSenderId: '912190782853',
  appId: '1:912190782853:web:cbd090aecf0fac0b5f18ec',
  measurementId: 'G-NGGFRVXSKH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

export default boot(async (/* { app, router, ... } */) => {
  const authStore = useAuthStore();
  onAuthStateChanged(auth, user => {
    console.log('user: ', user);
    authStore.setUser(user);
  });
});
