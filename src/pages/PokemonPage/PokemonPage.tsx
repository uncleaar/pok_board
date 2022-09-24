import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PokemonStats from '@common/PokemonStats/PokemonStats';
import {
  useRequestPokemonByIdQuery,
  useRequestPokemonEncountersQuery
} from '@utils/api/hooks';
import { getPokemonId } from '@utils/helpers/getPokemonId';

import styles from './PokemonPage.module.scss';
import { Button } from '../../ui';

export const PokemonPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: pokemonQueryData, isLoading: pokemonQueryLoading } =
    useRequestPokemonByIdQuery({
      id: +(id as string)
    });

  const { data: pokemonEncountersData, isLoading: pokemonEncountersLoading } =
    useRequestPokemonEncountersQuery(
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
  const isPokemonFormData = !pokemonEncountersData && pokemonEncountersLoading;

  console.log(pokemonEncountersData, 'pokemonEncountersData');

  return (
    <div className={styles.page}>
      {isPokemonData && (
        <>
          <div className={styles.name_container}>
            <div className={styles.number}>{getPokemonId(id)}</div>
            <h1>{pokemonQueryData.data.name}</h1>
          </div>

          <div className={styles.content}>
            <div className={styles.image_container}>
              <img src={pokemonQueryData.data.sprites.front_default ?? ''} alt='' />
            </div>

            <PokemonStats
              title='stats'
              stats={pokemonQueryData.data.stats.map(
                (item) => `${item.stat.name}: ${item.base_stat}`
              )}
            />

            <PokemonStats
              title='Abilities'
              stats={pokemonQueryData.data.abilities.map(({ ability }) => ability.name)}
            />
          </div>
        </>
      )}
      <div className={styles.buttons}>
        {id > 1 && <Button onClick={() => navigate(`/pokemon/${id - 1}`)}>Prev</Button>}

        <Button onClick={() => navigate(`/pokemon/${+id + 1}`)}>Next</Button>
      </div>
    </div>
  );
};
