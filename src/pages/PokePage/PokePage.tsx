import React, { useState } from 'react';

import cn from 'classnames';

import { useRequestPokemonsQueries } from '../../utils/api/hooks/pokemon';
import { useRequestPokemonFormQuery } from '../../utils/api/hooks';

import styles from './PokePage.module.scss';

export const PokePage = () => {
  const [offset, setOffset] = useState(8);

  const [selectedPokemonID, setSelectedPokemonID] = useState(1);

  const results = useRequestPokemonsQueries({ offset });
  const isLoading = results.some((results) => results.isLoading);

  const { data } = useRequestPokemonFormQuery({
    id: 1,
    config: { enabled: !isLoading }
  });

  console.log(data);

  if (isLoading) return null;

  const pokemons = results.map((result: any) => result.data.data);

  const selectedPokemon = pokemons.find((pokemon) => selectedPokemonID === pokemon.id)!;

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.card_title}>
            <div className={styles.card_title_name}>{selectedPokemon.name}</div>
            <div className={styles.card_title_id}>#000{selectedPokemon.id}</div>
          </div>

          <div className={styles.card_types}>
            {selectedPokemon.types.map(({ type }) => (
              <div key={type.slot} className={styles.card_type}>
                {type.name}
              </div>
            ))}
          </div>
          <div>
            <img src={selectedPokemon.sprites.front_default} alt='' />
          </div>
          <div className={styles.info}>
            <div>
              <div className={styles.info_title}>stats</div>
              <ul>
                {selectedPokemon?.stats?.map((stat) => (
                  <li key={stat.id} className={styles.info_item}>
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className={styles.info_title}>abilities</div>
              <ul>
                {selectedPokemon?.abilities?.map(({ ability, id }: any) => (
                  <li key={id} className={styles.info_item}>
                    {ability.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
