import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, `users/${userAuth.uid}`);

  const snapShot = await getDoc(userRef);
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.error(`error creating user ${err.message}`);
    }
  }

  return userRef;
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
