import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button, Input } from '@ui';
import { AUTH_COOKIE, ROUTES } from '@utils/constants';
import { useRegisterWithEmailAndPasswordMutation } from '@utils/firebase';
import { emailSchema, passwordSchema } from '@utils/validation';

import styles from '../../Auth.module.scss';
import { useStore } from '@utils/hooks';
import { setCookie } from '@utils/helpers';

interface SignUpFormValues extends User {
  password: string;
}

export const SignUpForm: React.FC = () => {
  const { setStore } = useStore();
  const navigate = useNavigate();
  const { register, handleSubmit, formState, setError } = useForm<SignUpFormValues>();

  const { mutate: registerWithEmailAndPassword, isLoading: registerWithEmailAndPasswordLoading } =
    useRegisterWithEmailAndPasswordMutation({
      options: {
        onSuccess: ({ user }: any) => {
          setCookie(AUTH_COOKIE, user.uid);
          setStore({ session: { isLoginIn: true } });
          navigate(ROUTES.POKEMONS);
        },
        onError: (error: any) => {
          console.log('1@a');

          if (error.code === 'auth/weak-password') {
            setError(
              'password',
              { type: 'minLength', message: error.message },
              { shouldFocus: true }
            );
          }
        }
      }
    });

  const { isSubmitting, errors } = formState;

  const isLoading = isSubmitting || registerWithEmailAndPasswordLoading;

  return (
    <form
      className={styles.sign_up_form}
      onSubmit={handleSubmit(({ password, ...user }) =>
        registerWithEmailAndPassword({ user, password })
      )}
    >
      <Input
        {...register('name', {
          required: { value: true, message: 'Field is required' }
        })}
        disabled={isLoading}
        placeholder=' name'
        error={errors.name?.message}
      />

      <Input
        {...register('email', emailSchema)}
        disabled={isLoading}
        placeholder='email'
        type='text'
        error={errors.email?.message}
      />
      <Input
        {...register('city', {
          required: { value: true, message: 'Field is required' }
        })}
        disabled={isLoading}
        placeholder='city'
        error={errors.city?.message}
      />
      <Input
        {...register('password', passwordSchema)}
        disabled={isLoading}
        placeholder='password'
        type='password'
        error={errors.password?.message}
      />
      <Button type='submit' variant='outlined' loading={isLoading}>
        Sign Up
      </Button>
    </form>
  );
};
