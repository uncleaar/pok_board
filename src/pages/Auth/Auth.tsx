import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import { Button, Input } from '../../ui';

import { SignInForm } from './components/SignInForm/SignInForm';

import styles from './Auth.module.scss';

// interface SignUpFormValues extends User {
//   password: string;
// }

// export const SignUpForm: React.FC = () => {
//   const { mutateAsync } = useMutation(
//     'signUp',
//     (params: any) => registerWithEmailAndPassword(params.user, params.password),
//     {
//       onSuccess: (data) => {
//         console.log(data, 'data');
//       },
//       onError: (error) => console.log('error', error)
//     }
//   );

//   const { register, handleSubmit, formState } = useForm<SignUpFormValues>();
//   const { isSubmitting } = formState;

//   return (
//     <form
//       className={styles.sign_up_form}
//       onSubmit={handleSubmit(({ password, ...user }) => mutateAsync({ user, password }))}
//     >
//       <Input {...register('firstname')} disabled={isSubmitting} placeholder='First name' />
//       <Input {...register('lastname')} disabled={isSubmitting} placeholder='Last name' />
//       <Input {...register('email')} disabled={isSubmitting} placeholder='email' type='email' />
//       <Input {...register('city')} disabled={isSubmitting} placeholder='city' />
//       <Input {...register('password')} placeholder='password' type='password' />
//       <Button type='submit' variant='outlined'>
//         Sign Up
//       </Button>
//     </form>
//   );
// };

export const Auth: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

  return (
    <div className={styles.auth}>
      <div className={styles.cover} />

      {isSignUp && <SignInForm />}
      {/* {isSignUp && <SignUpForm />} */}
      <Button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have account' : 'Sign Up'}
      </Button>
    </div>
  );
};
