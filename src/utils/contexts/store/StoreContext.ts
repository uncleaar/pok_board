import React from 'react';

export type Store = {
  session: {
    isLoginIn: boolean;
  };
};

export interface StoreContextProps {
  store: Store;
  setStore: React.Dispatch<React.SetStateAction<Store>>;
}

export const StoreContext = React.createContext<StoreContextProps>({
  store: {
    session: {
      isLoginIn: false
    }
  },
  setStore: () => {}
});
