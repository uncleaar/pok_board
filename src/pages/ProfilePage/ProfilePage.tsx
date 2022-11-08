import { collection, query, where } from 'firebase/firestore';

import { Button } from '@ui';
import { INITIAL_STORE } from '@utils/contexts';
import { db, useCollection, useLogoutMutation } from '@utils/firebase';
import { useStore } from '@utils/hooks';

import styles from './ProfilePage.module.scss';

export const ProfilePage = () => {
  const { user, setStore } = useStore();
  const logoutMuation = useLogoutMutation();
  const q = query(collection(db, 'pokemons'), where('uid', '==', user.uid));
  const { data } = useCollection(q);

  console.log(data, 'data');

  return (
    <div className={styles.page}>
      <div>name: {user.displayName}</div>

      <div>uid: {user.uid}</div>
      <div>email: {user.email}</div>
      {user.photoURL && <img src={user.photoURL} alt='photoURL' />}

      <Button
        onClick={() => {
          logoutMuation.mutate();
          setStore(INITIAL_STORE);
        }}
      >
        Logout
      </Button>
    </div>
  );
};
