import { AxiosRequestConfig } from 'axios';

import { api } from '../../api';

interface RequestPokemonParams {
  params: { limit: number; offset: number };
  config?: AxiosRequestConfig<{ limit: number }>;
}

export const requestPokemon = ({ params, config }: RequestPokemonParams) => {
  return api.get('pokemon', { ...config, params });
};
