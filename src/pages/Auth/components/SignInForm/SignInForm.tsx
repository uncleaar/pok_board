import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input } from '@ui';
import { useLogInWithEmailAndPasswordMutation } from '@utils/firebase';

import styles from '../../Auth.module.scss';
import { emailSchema, passwordSchema } from '@utils/validation';

interface SignInFormValues {
  email: User['email'];
  password: string;
}

export const SignInForm: React.FC = () => {
  const { mutate: logInWithEmailAndPassword, isLoading: logInWithEmailAndPasswordIsLoading } =
    useLogInWithEmailAndPasswordMutation({
      options: {
        onSuccess: (data: any) => {
          console.log('@', data);
        },
        onError: (error: any) => console.log(error, 'error')
      }
    });
  const { register, handleSubmit, formState } = useForm<SignInFormValues>({ mode: 'onSubmit' });
  const { isSubmitting, errors } = formState;
  const isLoading = isSubmitting || logInWithEmailAndPasswordIsLoading;

  return (
    <>
      <h1 className={styles.title}>Login</h1>
      <form
        className={styles.sign_up_form}
        onSubmit={handleSubmit(async ({ password, email }) => {
          const logInWithEmailAndPasswordData = await logInWithEmailAndPassword({
            email,
            password
          });
        })}
      >
        <Input
          {...register('email', emailSchema)}
          disabled={isLoading}
          placeholder='email'
          type='text'
          error={errors.email?.message}
        />
        <Input
          {...register('password', passwordSchema)}
          placeholder='password'
          disabled={isLoading}
          type='password'
          error={errors.password?.message}
        />
        <Button type='submit' variant='outlined' loading={isLoading}>
          Sign In
        </Button>
      </form>
    </>
  );
};
