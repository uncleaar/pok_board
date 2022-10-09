import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

import { PokemonStats, PokemonTypes } from '@common';
import {
  useRequestPokemonByIdQuery,
  useRequestPokemonsInfinityQueries
} from '@utils/api/hooks';
import { ROUTES } from '@utils/constants';
import { getPokemonId } from '@utils/helpers/getPokemonId';

import useDebounce from '../../hooks/useDebounce';

import { Pokemon } from './Pokemon/Pokemon';

import styles from './PokemonsPage.module.scss';

interface PokemonInfoProps {
  id: Pokemon['id'];
  onClose: () => void;
}

export const PokemonInfo: React.FC<PokemonInfoProps> = ({ id, onClose }) => {
  const navigate = useNavigate();
  const { data, isLoading } = useRequestPokemonByIdQuery({ id });
  if (isLoading || !data) return null;

  const { data: pokemon } = data;

  return (
    <div className={styles.pokemon_info}>
      <div className={styles.pokemon_info_container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.pokemon_name}>{pokemon.name}</div>
            <div className={styles.pokemon_number}>{getPokemonId(id)}</div>
          </div>

          <div
            className={styles.close}
            tabIndex={0}
            role='button'
            onClick={onClose}
            onKeyPress={(e) => {
              if (e.key === 'Enter') onClose();
            }}
          >
            x
          </div>
        </div>

        <PokemonTypes types={pokemon.types} />
        <div className={styles.pokemon_info_image}>
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

        <button onClick={() => navigate(`/pokemon/${id}`)}>Open</button>
      </div>
    </div>
  );
};

export const PokemonsPage: React.FC = () => {
  const [pokemonId, setPokemonId] = useState<Pokemon['id'] | null>(null);
  const { ref, inView } = useInView();
  const { data, isLoading, fetchNextPage, hasNextPage } = useRequestPokemonsInfinityQueries();
  // const debouncedValueId = useDebounce(pokemonId, 1000);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, data]);

  if (isLoading || !data) return null;
  const pokemons = data.pages.reduce(
    (pokemons: NamedAPIResource[], { data }: any) => [...pokemons, ...data.results],
    []
  );

  return (
    <div className='container'>
      <div className={styles.pokemons_container}>
        {pokemons?.map((pokemon, index) => {
          const id = index + 1;
          return (
            <>
              <div
                key={id}
                role='button'
                tabIndex={0}
                onClick={() => setPokemonId(id)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') setPokemonId(id);
                }}
                // onMouseEnter={() => setPokemonId(id)}
                className={styles.pokemon_container}
              >
                <div key={index} className={styles.pokemon}>
                  <div className={styles.pokemon_name}>{pokemon.name}</div>
                  <div className={styles.pokemon_number}>{getPokemonId(id)}</div>
                </div>
              </div>
              {pokemonId === id && <PokemonInfo id={id} onClose={() => setPokemonId(null)} />}
            </>
          );
        })}
        <div ref={ref} />
      </div>
    </div>
  );
};
