import { useInfiniteQuery, useQueries, useQuery } from 'react-query';

import { requestPokemons, requestPokemon } from '../../requests';

interface UseRequestPokemonQueriesParams {
  offset: number;
}

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
        queryFn: () => requestPokemon({ params: { id: pokemonId } })
      };
    })
  );
