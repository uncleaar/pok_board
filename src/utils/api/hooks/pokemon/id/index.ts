import { AxiosRequestConfig } from 'axios';
import { useQuery } from 'react-query';

import { requestPokemon } from '../../../requests';

interface RequestPokemonQueryParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}

export const useRequestPokemonQuery = ({ params, config }: RequestPokemonQueryParams) =>
  useQuery<any>(['pokemon', params.id], () => requestPokemon({ params }), config);
