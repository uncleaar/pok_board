import { AxiosRequestConfig } from 'axios';

import { api } from '../../../api';

interface RequestPokemonParams {
  params: { id: number };
  config?: AxiosRequestConfig<{ limit: number }>;
}

export const requestPokemonById = ({ params, config }: RequestPokemonParams) =>
  api.get<Pokemon>(`pokemon/${params.id}`, { ...config });
