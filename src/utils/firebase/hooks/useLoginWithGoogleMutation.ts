import { useMutation } from 'react-query';

import { loginWithGoogle } from '../requests';

export const useLogInWithGoogleMutation = (
  settings?: RequestMutationSettings<typeof loginWithGoogle>
) => useMutation(['loginWithGoogle'], loginWithGoogle, settings?.options && settings.options);

