import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { auth } from '../firebase';

export const useAuthState = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const listener = onAuthStateChanged(auth, async (user) => {
      setUser(user);
    });

    return () => {
      listener();
    };
  }, [auth]);

  return { user };
};
