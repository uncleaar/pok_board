import React, { useEffect, useMemo, useState } from 'react';
import { getCookie } from '@utils/helpers';
import { AUTH_COOKIE } from '@utils/constants';

import { StoreContext, StoreContextProps } from './StoreContext';

export interface StoreProviderProps extends StoreContextProps {
  children: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children, ...props }) => {
  const [store, setStore] = useState<StoreContextProps['store']>({
    session: {
      isLoginIn: !!getCookie(AUTH_COOKIE)
    },
    profile: {}
  });

  useEffect(() => {});

  const value = useMemo(
    () => ({
      store,
      setStore
    }),
    [store]
  );
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
