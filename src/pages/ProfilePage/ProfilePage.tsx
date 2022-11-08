import { PokemonEvolutionChainItem } from '@common';
import { Button } from '@ui';
import { INITIAL_STORE } from '@utils/contexts';
import { useLogoutMutation, useUserPokemonsCollection } from '@utils/firebase';
import { useStore } from '@utils/hooks';

import styles from './ProfilePage.module.scss';

export const ProfilePage = () => {
  const { user, setStore } = useStore();
  const logoutMuation = useLogoutMutation();

  const { documents } = useUserPokemonsCollection({ uid: user.uid });

  console.log(documents, 'documents');

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

      {documents && (
        <div>
          <div>Team</div>
          <div className={styles.document}>
            {documents.map((document) => (
              <div className={styles.document_inner}>
                <PokemonEvolutionChainItem name={document.name} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
