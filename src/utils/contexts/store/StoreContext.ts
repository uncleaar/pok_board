import { UserCredential } from 'firebase/auth';
import React from 'react';

export type Store = {
  session: {
    isLoginIn: boolean;
  };
  profile: any;
};

export interface StoreContextProps {
  store: Store;
  setStore: React.Dispatch<React.SetStateAction<Store>>;
}

export const StoreContext = React.createContext<StoreContextProps>({
  store: {
    session: {
      isLoginIn: false
    },
    profile: {}
  },
  setStore: () => {}
});
