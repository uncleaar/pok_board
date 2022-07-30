import React, { useState } from 'react';

import { useRequestPokemonsQueries } from '../../utils/api/hooks/pokemon';

import styles from './PokePage.module.scss';

export const PokePage = () => {
  const [offset, setOffset] = useState(10);

  const results = useRequestPokemonsQueries({ offset });
  const isLoading = results.some((results) => results.isLoading);

  if (isLoading) return null;

  const pokemons = results.map((result: any) => result.data.data);
  console.log(pokemons);

  return (
    <div className={styles.page_container}>
      <div className={styles.content_container}>
        <div>card</div>
        <ul className={styles.list_container}>
          {pokemons.map((pokemon) => (
            <li key={pokemon.id} className={styles.pokemon_item}>
              <img
                className={styles.pokemon_item_image}
                src={pokemon.sprites.front_default}
                alt='pokemon_sprite_item'
              />
              {pokemon.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
