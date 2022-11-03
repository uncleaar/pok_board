import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input } from '@ui';
import { useLogInWithEmailAndPasswordMutation } from '@utils/firebase';
import { emailSchema, passwordSchema } from '@utils/validation';

import styles from '../../Auth.module.scss';
import { useStore } from '@utils/hooks';
import { useNavigate } from 'react-router-dom';
import { AUTH_COOKIE, ROUTES } from '@utils/constants';
import { setCookie } from '@utils/helpers';

interface SignInFormValues {
  email: User['email'];
  password: string;
}

export const SignInForm: React.FC = () => {
  const { setStore } = useStore();
  const navigate = useNavigate();

  const { mutate: logInWithEmailAndPassword, isLoading: logInWithEmailAndPasswordIsLoading } =
    useLogInWithEmailAndPasswordMutation({
      options: {
        onSuccess: ({ user }: any) => {
          setCookie(AUTH_COOKIE, user.uid);

          setStore({ session: { isLoginIn: true } });
          navigate(ROUTES.POKEMONS);
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
