import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc,collection, getFirestore } from 'firebase/firestore';

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

export const loginWithEmailAndPassword = async (email: string, password: string) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log('err', error);
  }
};

export const registerWithEmailAndPassword = async (user: User, password: string) => {
  console.log('user,', user);
  try {
    const response = await createUserWithEmailAndPassword(auth, user.email, password);
    await addDoc(collection(db, 'users'), {
      uuid: response.user.uid,
      ...user,
      authProvider: 'local'
    });
    return;
  } catch (error) {
    console.log('error', error);
    return error;
  }
};
