import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { registerWithEmailAndPassword } from '@utils/firebase';

import styles from './Auth.module.scss';
import { Button } from '../../ui';

export const Auth: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  return (
    <div className={styles.auth}>
      {isSignUp && (
        <form
          className={styles.sign_up_form}
          onSubmit={handleSubmit((data) => console.log(JSON.stringify(data)))}
        >
          <input {...register('firstname')} placeholder='First name' />
          <input {...register('lastname')} placeholder='Last name' />
          <input {...register('email')} placeholder='email' type='email' />
          <input {...register('password')} placeholder='password' type='password' />
          <Button type='submit'>Sign Up</Button>
        </form>
      )}
    </div>
  );
};
