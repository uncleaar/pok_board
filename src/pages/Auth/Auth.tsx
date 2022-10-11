import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { registerWithEmailAndPassword } from '@utils/firebase';

import { Button, Input } from '../../ui';

import styles from './Auth.module.scss';

interface SignUpFormValues extends User {
  password: string;
}

export const Auth: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<SignUpFormValues>();
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  const { isSubmitting } = formState;

  const onSubmit = () => {};

  return (
    <div className={styles.auth}>
      {isSignUp && (
        <form
          className={styles.sign_up_form}
          onSubmit={handleSubmit(({ password, ...user }) =>
            registerWithEmailAndPassword(user, password)
          )}
        >
          <Input {...register('firstname')} disabled={isSubmitting} placeholder='First name' />
          <Input {...register('lastname')} disabled={isSubmitting} placeholder='Last name' />
          <Input {...register('email')} disabled={isSubmitting} placeholder='email' type='email' />
          <Input {...register('city')} disabled={isSubmitting} placeholder='city' />
          <Input {...register('password')} placeholder='password' type='password' />
          <Button type='submit'>Sign Up</Button>
        </form>
      )}
    </div>
  );
};
