import { boot } from 'quasar/wrappers';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export { auth };

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
});
