import { useQuery } from 'react-query';

import { requestStat } from '../../../requests';

interface UseRequestPokemonStatQueryParams {
  id: number;
}

export const useRequestStatQuery = ({ id }: UseRequestPokemonStatQueryParams) =>
  useQuery<any>(['stat', id], () => requestStat({ params: { id } }));
