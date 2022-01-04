import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBN0R-RDp2YauL6lCLiPWRWl4C6YnKvgqs',
  authDomain: 'crwn-d6d6d.firebaseapp.com',
  projectId: 'crwn-d6d6d',
  storageBucket: 'crwn-d6d6d.appspot.com',
  messagingSenderId: '393670758629',
  appId: '1:393670758629:web:b864573e62051c3ecf840c',
  measurementId: 'G-L1CR96HNEW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
