import { useQuery } from '@tanstack/react-query';

import { requestPokemonEncounters } from '../../requests';

interface UseRequestPokemonEncountersQueryParams {
  id: Pokemon['id'];
}

export const useRequestPokemonEncountersQuery = (
  params: RequestParams<UseRequestPokemonEncountersQueryParams>,
  settings?: RequestQuerySettings<typeof requestPokemonEncounters>
) =>
  useQuery(
    ['evolution-chain', params.id],
    () =>
      requestPokemonEncounters({
        params,
        ...(settings?.config && { config: settings.config })
      }),
    settings?.options && settings.options
  );
