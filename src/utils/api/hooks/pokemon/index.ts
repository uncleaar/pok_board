import { useInfiniteQuery, useQueries, useQuery } from 'react-query';

import { requestPokemonById, requestPokemons } from '../../requests';

interface UseRequestPokemonQueriesParams {
  offset: number;
}

const REQUEST_POKEMON_LIMIT = 40;

export const useRequestPokemonsInfinityQueries = () =>
  useInfiniteQuery(
    'pokemon',
    ({ pageParam = 0 }) =>
      requestPokemons({ params: { limit: REQUEST_POKEMON_LIMIT, offset: pageParam } }),
    {
      // ...(config && { ...config }),
      getNextPageParam: (_lastPokemonsData, allPokemonsData) =>
        allPokemonsData.length * REQUEST_POKEMON_LIMIT
    }
  );

// export const useRequestPokemonsQueries = ({ offset }: UseRequestPokemonQueriesParams) =>
//   useQuery(['pokemon', offset], () => requestPokemons({ params: { offset, limit: 10 } }));

// export const useRequestPokemonsQueries = ({ offset }: UseRequestPokemonQueriesParams) =>
//   useInfiniteQuery(
//     ['pokemon'],
//     async ({ pageParam = 0 }) =>
//       requestPokemons({ params: { offset: pageParam, limit: 10 } }),
//     {
//       getNextPageParam: (lastPage, allPages) => {
//         return allPages.length * 10;
//       }
//     }
//   );

export const useRequestPokemonsQueries = ({ offset }: UseRequestPokemonQueriesParams) =>
  useQueries(
    Array.from({ length: offset }).map((_el, index) => {
      const pokemonId = index + 1;
      return {
        queryKey: ['pokemon', pokemonId],
        queryFn: () => requestPokemonById({ params: { id: pokemonId } })
      };
    })
  );
