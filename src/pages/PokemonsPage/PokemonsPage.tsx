import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import useDebounce from '../../hooks/useDebounce';
import { useRequestPokemonQuery, useRequestPokemonsInfinityQueries } from '@utils/api/hooks';

import { Pokemon } from './Pokemon/Pokemon';

import styles from './PokemonsPage.module.scss';
import { getPokemonId } from '@utils/helpers/getPokemonId';

interface PokemonInfoProps {
  id: Pokemon['id'];
}

export const PokemonInfo: React.FC<PokemonInfoProps> = ({ id }) => {
  const { data, isLoading } = useRequestPokemonQuery({ params: { id } });
  if (isLoading || !data) return null;

  console.log(data, 'pokemon');

  const { data: pokemon } = data;

  return (
    <div className={styles.pokemon_info_container}>
      <div className={styles.pokemon_info_types}>
        {pokemon.types.map(({ type }) => (
          <div className={styles.pokemon_info_type}>{type.name}</div>
        ))}
      </div>
      <div className={styles.pokemon_info_image}>
        <img src={pokemon.sprites.front_default ?? ''} alt='' />
      </div>
      <div className={styles.info}>
        <div>
          <div className={styles.info_title}>Stats</div>
          <ul>
            {pokemon.stats.map((stat) => (
              <li className={styles.info_item}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className={styles.info_title}>Abilities</div>
          <ul>
            {pokemon.abilities.map(({ ability }) => (
              <li className={styles.info_item}>{ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const PokemonsPage: React.FC = () => {
  const [pokemonId, setPokemonId] = useState<Pokemon['id'] | null>(null);
  const { ref, inView } = useInView();
  const { data, isLoading, fetchNextPage } = useRequestPokemonsInfinityQueries();
  const debouncedValueId = useDebounce(pokemonId, 3000);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

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
            <div
              onMouseLeave={() => setPokemonId(null)}
              onMouseEnter={() => setPokemonId(id)}
              className={styles.pokemon_container}
            >
              <div key={index} className={styles.pokemon}>
                <div className={styles.pokemon_name}>{pokemon.name}</div>
                <div className={styles.pokemon_number}>{getPokemonId(id)}</div>
              </div>
              {debouncedValueId === id && (
                <div className={styles.pokemon_info}>
                  <PokemonInfo id={id} />
                </div>
              )}
            </div>
          );
        })}
        <div ref={ref} />
      </div>
    </div>
  );
};
