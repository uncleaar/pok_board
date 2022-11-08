import { useMutation } from '@tanstack/react-query';

import { registerWithEmailAndPassword } from '../requests';

interface UseRegisterWithEmailAndPasswordParams {
  user: User;
  password: string;
}

export const useRegisterWithEmailAndPasswordMutation = (
  settings?: RequestMutationSettings<typeof registerWithEmailAndPassword>
) =>
  useMutation(
    ['registerWithEmailAndPassword'],
    (params: RequestParams<UseRegisterWithEmailAndPasswordParams>) =>
      registerWithEmailAndPassword(params.user, params.password),
    settings?.options && settings.options
  );
