import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

import { auth } from '../firebase';

export const registerWithEmailAndPassword = async (user: User, password: string) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, user.email, password);
    //  await addDoc(collection(db, 'users'), {
    //    uuid: response.user.uid,
    //    ...user,
    //    authProvider: 'local'
    //  });
    return response;
  } catch (error) {
    console.log('error', error);
    return error;
  }
};
