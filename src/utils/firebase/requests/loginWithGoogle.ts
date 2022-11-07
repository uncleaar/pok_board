import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { GoogleProvider, auth } from '../firebase';

export const loginWithGoogle = async () => {
  const response = await signInWithPopup(auth, GoogleProvider);

  return response;
};
