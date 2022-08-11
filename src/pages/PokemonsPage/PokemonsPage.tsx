import { useState } from 'react';
import { QueryClient, useQueries, useQuery, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import { getPokemonId } from '../../utils/helpers/getPokemonId';

import { useRequestPokemonsInfinityQueries } from '../../utils/api/hooks/pokemon';

import { Pokemon } from './Pokemon/Pokemon';

import styles from './PokemonsPage.module.scss';

export const PokemonsPage: React.FC = () => {
  const { data, isLoading, fetchNextPage } = useRequestPokemonsInfinityQueries({});

  if (isLoading || !data) return null;

  const pokemons = data.pages.reduce(
    (pokemons: NamedAPIResource[], { data }: any) => [...pokemons, ...data.results],
    []
  );

  return (
    <div className='container'>
      <button onClick={() => fetchNextPage()}>load more</button>
      <div className={styles.pokemons_container}>
        {pokemons?.map((pokemon, index) => (
          <div key={index} className={styles.pokemon}>
            <div className={styles.pokemon_number}>{getPokemonId(index + 1)}</div>
            <div className={styles.pokemon_name}>{pokemon.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
