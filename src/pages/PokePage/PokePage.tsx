import cn from 'classnames';
import React, { useState } from 'react';

import { PokemonCard } from '@common';
import { useRequestPokemonFormQuery, useRequestPokemonsQueries } from '@utils/api';

import styles from './PokePage.module.scss';

export const PokePage: React.FC = () => {
  const [offset, setOffset] = useState(8);

  const [selectedPokemonID, setSelectedPokemonID] = useState(1);

  const results = useRequestPokemonsQueries({ offset });
  const isLoading = results.some((results: any) => results.isLoading);

  if (isLoading) return null;

  const pokemons = results.map((result: any) => result.data.data);

  const selectedPokemon = pokemons.find((pokemon: any) => selectedPokemonID === pokemon.id)!;

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <PokemonCard pokemon={selectedPokemon} />
        <ul className={styles.list}>
          {pokemons.map((pokemon: any) => {
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
