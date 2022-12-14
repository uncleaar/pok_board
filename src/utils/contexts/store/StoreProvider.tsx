import { User } from 'firebase/auth';
import React, { useEffect, useMemo, useState } from 'react';

import { useAuthState } from '@utils/firebase';

import { StoreContext, StoreContextProps } from './StoreContext';

export interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const { user } = useAuthState();
  const [store, setStore] = useState<StoreContextProps['store']>({
    session: {
      isLoginIn: false
    },
    user: {} as User
  });

  useEffect(() => {
    if (user) {
      setStore({
        ...store,
        session: {
          isLoginIn: true
        },
        user
      });
    }
  }, [user]);

  const value = useMemo(
    () => ({
      store,
      setStore
    }),
    [store]
  );
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
