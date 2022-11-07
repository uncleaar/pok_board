import React, { useEffect, useMemo, useState } from 'react';

import { AUTH_COOKIE } from '@utils/constants';
import { useAuthState } from '@utils/firebase';
import { getCookie } from '@utils/helpers';

import { StoreContext, StoreContextProps } from './StoreContext';

export interface StoreProviderProps extends StoreContextProps {
  children: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const { user } = useAuthState();
  const [store, setStore] = useState<StoreContextProps['store']>({
    session: {
      isLoginIn: false
    },
    user: {}
  });

  console.log(user, 'user');

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
