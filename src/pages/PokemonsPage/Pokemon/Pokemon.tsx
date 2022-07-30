import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { useRequestPokemonQuery } from '../../../utils/api/hooks';

interface PokemonProps {
  pokemon: any;
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
  return (
    <div className='flex justify-center flex-col shadow rounded-lg p-10 w-80 '>
      <img className='w-full h-40' src={pokemon.sprites.front_default} alt='pokemon_sprite' />
      <h2 className='text-center w-full capitalize font-bold text-sm text-2xl'>
        {pokemon.name}
      </h2>
    </div>
  );
};
