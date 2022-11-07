import { getAuth, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';

import { auth,GoogleProvider } from '../firebase';

export const loginWithGoogle = async () => {
  const response = await signInWithPopup(auth, GoogleProvider);

  return response;
};
