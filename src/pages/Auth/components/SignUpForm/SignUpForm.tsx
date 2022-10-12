import { useForm } from 'react-hook-form';

import { Button, Input } from '@ui';
import { useRegisterWithEmailAndPasswordMutation } from '@utils/firebase';

import styles from '../../Auth.module.scss';
import { emailSchema, passwordSchema } from '@utils/validation';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@utils/constants';

interface SignUpFormValues extends User {
  password: string;
}

export const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState, setError } = useForm<SignUpFormValues>();

  const { mutate: registerWithEmailAndPassword, isLoading: registerWithEmailAndPasswordLoading } =
    useRegisterWithEmailAndPasswordMutation({
      options: {
        onSuccess: (data: any) => {
          console.log('@', data);
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
        {...register('firstname', {
          required: { value: true, message: 'Field is required' }
        })}
        disabled={isLoading}
        placeholder='First name'
        error={errors.firstname?.message}
      />
      <Input
        {...register('lastname', {
          required: { value: true, message: 'Field is required' }
        })}
        disabled={isLoading}
        placeholder='Last name'
        error={errors.lastname?.message}
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
