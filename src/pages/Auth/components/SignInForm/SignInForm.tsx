import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input } from '@ui';
import { useLogInWithEmailAndPasswordMutation } from '@utils/firebase';

import styles from '../../Auth.module.scss';

interface SignInFormValues {
  email: User['email'];
  password: string;
}

export const SignInForm: React.FC = () => {
  const { mutate: logInWithEmailAndPasswordMutate, isLoading } =
    useLogInWithEmailAndPasswordMutation({
      options: {
        onSuccess: (data: any) => console.log(data, 'data'),
        onError: (error: any) => console.log(error, 'error')
      }
    });
  const { register, handleSubmit, formState } = useForm<SignInFormValues>();
  const { isSubmitting, errors } = formState;

  console.log(errors, 'errors');

  return (
    <>
      <h1 className={styles.title}>Login</h1>
      <form
        className={styles.sign_up_form}
        onSubmit={handleSubmit(async ({ password, email }) => {
          const logInWithEmailAndPasswordData = await logInWithEmailAndPasswordMutate(
            email,
            password
          );
          console.log(logInWithEmailAndPasswordData, 'user');
        })}
      >
        <Input
          {...register('email', { required: { value: true, message: 'Required' } })}
          disabled={isSubmitting}
          placeholder='email'
          type='email'
        />
        <Input
          {...register('password', { required: { value: true, message: 'Required' } })}
          placeholder='password'
          type='password'
          error={errors.password?.message}
        />
        <Button type='submit' variant='outlined'>
          Sign In
        </Button>
      </form>
    </>
  );
};
