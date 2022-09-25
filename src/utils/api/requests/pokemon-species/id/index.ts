import { AxiosRequestConfig } from 'axios';

import { api } from '../../../api';

interface RequestPokemonSpeciesParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}

export const requestPokemonSpecies = ({ params, config }: RequestPokemonSpeciesParams) =>
  api.get<PokemonSpecies>(`pokemon-species/${params.id}`, { ...config });
