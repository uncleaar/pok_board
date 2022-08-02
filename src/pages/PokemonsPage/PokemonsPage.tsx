import { useState } from 'react';
import { QueryClient, useQueries, useQuery, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

import { useRequestPokemonsQueries } from '../../utils/api/hooks/pokemon';

import { Pokemon } from './Pokemon/Pokemon';

export const PokemonsPage = () => {
  const [offset, setOffset] = useState(20);

  const { data, isLoading } = useRequestPokemonsQueries({ offset });

  if (isLoading && data) return null;

  const pokemons = data?.data.results;

  return (
    <div className='container'>
      <button onClick={() => setOffset(offset + 20)}>load more</button>
      <div className='grid grid-cols-4 gap-3'>
        {pokemons?.map((pokemon, index) => (
          <div>{pokemon.name}</div>

          // <Pokemon pokemon={pokemon} key={index} />
        ))}
      </div>
    </div>
  );
};
