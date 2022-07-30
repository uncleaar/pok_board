import { AxiosRequestConfig } from 'axios';

import { api } from '../../../api';

interface RequestPokemonParams {
  params: { id: number };
  config?: AxiosRequestConfig<{ limit: number }>;
}

export const requestPokemon = ({ params, config }: RequestPokemonParams) => {
  return api.get(`pokemon/${params.id}`, { ...config });
};
