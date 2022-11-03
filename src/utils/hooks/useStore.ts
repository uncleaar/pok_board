import { Store, StoreContextProps } from './../contexts/store/StoreContext';
import React from 'react';

import { StoreContext } from '../contexts/store';

export const useStore = () => {
  const { setStore, ...storeContext } = React.useContext(StoreContext);
  return {
    setStore: (data: Store) => setStore({ ...storeContext, ...data }),
    ...storeContext.store
  };
};
