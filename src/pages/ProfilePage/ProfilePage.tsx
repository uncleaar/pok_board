import React from 'react';

import { useStore } from '@utils/hooks';

import styles from './ProfilePage.module.scss';

export const ProfilePage = () => {
  const { user } = useStore();

  console.log(user, 'profile');

  return (
    <div className={styles.page}>
      <div>uid: {user.name}</div>

      <div>uid: {user.uid}</div>
      <div>email: {user.email}</div>
      <img src={user.photoURL} alt='photoURL' />
    </div>
  );
};
