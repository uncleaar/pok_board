import { AxiosRequestConfig } from 'axios';

import { api } from '../../api';

interface RequestPokemonParams {
  params: { limit: number; offset: number };
  config?: AxiosRequestConfig;
}

export const requestPokemons = ({ params, config }: RequestPokemonParams) => {
  return api.get<NamedAPIResourceList>(`pokemon`, { params, ...config });
};
