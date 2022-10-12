import React, { useState } from 'react';

import { Button, Input } from '../../ui';

import { SignInForm } from './components/SignInForm/SignInForm';
import { SignUpForm } from './components/SignUpForm/SignUpForm';

import styles from './Auth.module.scss';

export const Auth: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

  return (
    <div className={styles.auth}>
      <div className={styles.card}>
        <div className={styles.cover} />

        <div>
          {!isSignUp && <SignInForm />}
          {isSignUp && <SignUpForm />}
          <Button onClick={() => setIsSignUp(!isSignUp)} variant='text'>
            {isSignUp ? 'already have account' : 'create new account'}
          </Button>
        </div>
      </div>
    </div>
  );
};
