import { useState } from 'react';
import { useQueries, useQuery } from 'react-query';
import { useRequestPokemonsQueries } from '../../utils/api/hooks/pokemon';

import { Pokemon } from './Pokemon/Pokemon';

export const PokemonsPage = () => {
  const [offset, setOffset] = useState(20);

  const results = useRequestPokemonsQueries({ offset });

  const isLoading = results.some((results) => results.isLoading);

  if (isLoading) return null;

  const pokemons = results.map((result: any) => result.data.data);

  return (
    <div className='container'>
      <button onClick={() => setOffset(offset + 20)}>load more</button>
      <div className='grid grid-cols-4 gap-3'>
        {pokemons.map((pokemon, index) => (
          <Pokemon pokemon={pokemon} key={index} />
        ))}
      </div>
    </div>
  );
};
