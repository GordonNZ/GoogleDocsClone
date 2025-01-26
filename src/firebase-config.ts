// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDa8bQtTW-g5om0wzM0LYv7B4Lqb3k91sM',
  authDomain: 'docsclone-1cfee.firebaseapp.com',
  projectId: 'docsclone-1cfee',
  storageBucket: 'docsclone-1cfee.firebasestorage.app',
  messagingSenderId: '780909454756',
  appId: '1:780909454756:web:131d9e1e37a8c0118ecd31',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
