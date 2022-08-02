import { AxiosRequestConfig } from 'axios';

import { api } from '../../../api';

interface RequestPokemonStatParams {
  params: { id: number };
  config?: AxiosRequestConfig<{ limit: number }>;
}

export const requestStat = ({ params, config }: RequestPokemonStatParams) => {
  return api.get<PokemonStat>(`stat/${params.id}`, { ...config });
};
