import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { registerWithEmailAndPassword, loginWithEmailAndPassword } from '@utils/firebase';

import { Button, Input } from '../../ui';

import styles from './Auth.module.scss';

interface SignInFormValues {
  email: User['email'];
  password: string;
}

export const SignInForm: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<SignInFormValues>();
  const { isSubmitting } = formState;

  return (
    <form
      className={styles.sign_up_form}
      onSubmit={handleSubmit(async ({ password, email }) => {
        const { user } = await loginWithEmailAndPassword(email, password);
        console.log(user, 'user');
      })}
    >
      <Input {...register('email')} disabled={isSubmitting} placeholder='email' type='email' />
      <Input {...register('password')} placeholder='password' type='password' />
      <Button type='submit' variant='outlined'>
        Sign In
      </Button>
    </form>
  );
};

interface SignUpFormValues extends User {
  password: string;
}

export const SignUpForm: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<SignUpFormValues>();
  const { isSubmitting } = formState;

  return (
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
      <Button type='submit' variant='outlined'>
        Sign Up
      </Button>
    </form>
  );
};

export const Auth: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

  return (
    <div className={styles.auth}>
      {!isSignUp && <SignInForm />}
      {isSignUp && <SignUpForm />}
      <Button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have account' : 'Sign Up'}
      </Button>
    </div>
  );
};
