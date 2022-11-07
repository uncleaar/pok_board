import { useStore } from '@utils/hooks';
import React from 'react';

import styles from './ProfilePage.module.scss';

export const ProfilePage = () => {
  const { profile } = useStore();

  console.log(profile, 'profile');

  return (
    <div className={styles.page}>
      <div>uid: {profile.name}</div>

      <div>uid: {profile.uid}</div>
      <div>email: {profile.email}</div>
      <img src={profile.photoURL} alt='photoURL' />
    </div>
  );
};
