// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-bcaf1.firebaseapp.com',
  projectId: 'mern-estate-bcaf1',
  storageBucket: 'mern-estate-bcaf1.appspot.com',
  messagingSenderId: '880796955158',
  appId: '1:880796955158:web:64c0c42766e5516fe33b37',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
