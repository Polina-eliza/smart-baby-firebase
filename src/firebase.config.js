
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDMK3uQlo5zQH3ZKs96PFYteEQKdG1bUaI",
  authDomain: "smart-baby-c0f86.firebaseapp.com",
  projectId: "smart-baby-c0f86",
  storageBucket: "smart-baby-c0f86.appspot.com",
  messagingSenderId: "484638892545",
  appId: "1:484638892545:web:a0b5359bcc6fa8f9dd1600"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;