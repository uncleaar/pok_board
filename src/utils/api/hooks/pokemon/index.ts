import { useInfiniteQuery } from 'react-query';

import { requestPokemon } from '../../requests';

export const useRequestPokemonInfinityQuery = () =>
  useInfiniteQuery<any>(
    'pokemons',
    ({ pageParam }) => requestPokemon({ params: { limit: 20, offset: pageParam } }),
    {
      getNextPageParam: (lastPage, pages) => {
        return (pages.length - 1) * 20 + 20;
      }
    }
  );
