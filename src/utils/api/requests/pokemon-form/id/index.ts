import { AxiosRequestConfig } from 'axios';

import { api } from '../../../api';

interface RequestPokemonFormParams {
  params: { id: number };
  config?: AxiosRequestConfig<{ limit: number }>;
}

export const requestPokemonForm = ({ params, config }: RequestPokemonFormParams) => api.get<Pokemon>(`evolution-chain/${params.id}`, { ...config });
