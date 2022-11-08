import { useMutation } from 'react-query';

import { logout } from '../requests';

interface UseLogoutMutationParams {
  email: User['email'];
  password: string;
}

export const useLogoutMutation = (settings?: RequestMutationSettings<typeof logout>) =>
  useMutation(['logoutMutation'], () => logout(), settings?.options && settings.options);
