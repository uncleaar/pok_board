import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PokemonEvolutionChain, PokemonStats } from '@common';
import { useRequestPokemonByIdQuery, useRequestPokemonSpeciesQuery } from '@utils/api';
import { getPokemonId } from '@utils/helpers';

import { Button } from '../../ui';

import styles from './PokemonPage.module.scss';

export const PokemonPage: React.FC = () => {
  const { id } = useParams<{ id: any }>();
  const navigate = useNavigate();

  const { data: pokemonData, isLoading: pokemonLoading } = useRequestPokemonByIdQuery({
    id: +(id as string)
  });

  const { data: pokemonSpeciesData, isLoading: pokemonSpeciesLoading } =
    useRequestPokemonSpeciesQuery({
      id: +(id as string)
    });

  const isPokemonData = !!pokemonData && !pokemonLoading;
  const isPokemonSpeciesData = !!pokemonSpeciesData && !pokemonSpeciesLoading;

  if (!isPokemonData || !isPokemonSpeciesData) return null;

  const chainId = pokemonSpeciesData!.data.evolution_chain.url
    .replace('https://pokeapi.co/api/v2/evolution-chain/', '')
    .replace('/', '');

  return (
    <div className={styles.page}>
      {isPokemonData && (
        <>
          <div className={styles.name_container}>
            <div className={styles.number}>{getPokemonId(id)} as </div>
            <h1>{pokemonData.data.name}</h1>
          </div>

          <div className={styles.content}>
            <div className={styles.image_container}>
              <img src={pokemonData.data.sprites.front_default ?? ''} alt='' />
            </div>

            <PokemonStats
              title='stats'
              stats={pokemonData.data.stats.map((item) => `${item.stat.name}: ${item.base_stat}`)}
            />

            <PokemonStats
              title='Abilities'
              stats={pokemonData.data.abilities.map(({ ability }) => ability.name)}
            />
          </div>
        </>
      )}
      <PokemonEvolutionChain chainId={+chainId} pokemonName={pokemonData.data.name} />
      <div className={styles.buttons}>
        {id > 1 && <Button onClick={() => navigate(`/pokemon/${id - 1}`)}>Prev</Button>}

        <Button onClick={() => navigate(`/pokemon/${+id + 1}`)}>Next</Button>
      </div>
    </div>
  );
};
