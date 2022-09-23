import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useRequestPokemonByIdQuery, useRequestPokemonFormQuery } from '@utils/api/hooks';
import { getPokemonId } from '@utils/helpers/getPokemonId';

import styles from './PokemonPage.module.scss';
import PokemonStats from '@common/PokemonStats/PokemonStats';

export const PokemonPage: React.FC = () => {
  const { id } = useParams();

  const { data: pokemonQueryData, isLoading: pokemonQueryLoading } =
    useRequestPokemonByIdQuery({
      id: +(id as string)
    });

  const { data: pokemonQueryFormData, isLoading: pokemonQueryFormLoading } =
    useRequestPokemonFormQuery(
      {
        id: +(id as string)
      },
      {
        options: {
          enabled: !pokemonQueryLoading
        }
      }
    );

  const isPokemonData = !pokemonQueryLoading && pokemonQueryData;
  const isPokemonFormData = !pokemonQueryFormLoading && pokemonQueryFormData;

  const pokemon = pokemonQueryData.data;

  return (
    <div className={styles.page}>
      <div className={styles.name_container}>
        <div className={styles.number}>{getPokemonId(id)}</div>
        <h1>{pokemon.name}</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.image_container}>
          <img src={pokemon.sprites.front_default ?? ''} alt='' />
        </div>

        <PokemonStats
          title='stats'
          stats={pokemon.stats.map((item) => `${item.stat.name}: ${item.base_stat}`)}
        />

        <PokemonStats
          title='Abilities'
          stats={pokemon.abilities.map(({ ability }) => ability.name)}
        />
      </div>
    </div>
  );
};
