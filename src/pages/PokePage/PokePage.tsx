import React, { useState } from 'react';

import cn from 'classnames';

import { useRequestPokemonsQueries } from '../../utils/api/hooks/pokemon';

import styles from './PokePage.module.scss';

export const PokePage = () => {
  const [offset, setOffset] = useState(3);

  const [selectedPokemonID, setSelectedPokemonID] = useState(1);

  const results = useRequestPokemonsQueries({ offset });
  const isLoading = results.some((results) => results.isLoading);

  if (isLoading) return null;

  const pokemons = results.map((result: any) => result.data.data);

  const selectedPokemon = pokemons.find((pokemon) => selectedPokemonID === pokemon.id)!;

  console.log(selectedPokemon);

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.card_title}>
            <div className={styles.card_title_name}>{selectedPokemon.name}</div>
            <div className={styles.card_title_id}>#000{selectedPokemon.id}</div>
          </div>
          <div>image</div>
          <div>statistic</div>
        </div>
        <ul className={styles.list}>
          {pokemons.map((pokemon) => {
            const isActive = selectedPokemonID === pokemon.id;
            return (
              <li
                key={pokemon.id}
                role='option'
                aria-selected={isActive}
                className={cn(styles.pokemon_item, {
                  [styles.pokemon_item_active]: isActive
                })}
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') setSelectedPokemonID(pokemon.id);
                }}
                onClick={() => setSelectedPokemonID(pokemon.id)}
              >
                <img
                  className={styles.pokemon_item_image}
                  src={pokemon.sprites.front_default}
                  alt='pokemon_sprite_item'
                />
                {pokemon.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
