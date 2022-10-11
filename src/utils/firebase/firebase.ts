import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB5RtxSqycDVOtBfJNXbflFkKP6yW0Uo_U',
  authDomain: 'pokedex-37d8f.firebaseapp.com',
  projectId: 'pokedex-37d8f',
  storageBucket: 'pokedex-37d8f.appspot.com',
  messagingSenderId: '1050880363678',
  appId: '1:1050880363678:web:456e724091fcaab15eff8f',
  measurementId: 'G-9DG47KVVBH'
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
