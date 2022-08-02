import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Pokemon.module.scss';

interface PokemonProps {
  pokemon: any;
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
  console.log(pokemon);

  return (
    <Link to={`pokemon/${pokemon.id}`}>
      <div className={styles.pokemon_container}>
        <img
          className='w-full h-40'
          src={pokemon.sprites.front_default}
          alt='pokemon_sprite'
        />
        <h2 className='text-center w-full capitalize font-bold text-sm'>{pokemon.name}</h2>
      </div>
    </Link>
  );
};
