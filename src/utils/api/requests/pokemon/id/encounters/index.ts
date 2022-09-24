import { AxiosRequestConfig } from 'axios';

import { api } from '../../../../api';

interface RequestPokemonParams {
  params: { id: number };
  config?: AxiosRequestConfig<{ limit: number }>;
}

export const requestPokemonEncounters = ({ params, config }: RequestPokemonParams) =>
  api.get<LocationAreaEncounter>(`pokemon/${params.id}/encounters`, { ...config });
