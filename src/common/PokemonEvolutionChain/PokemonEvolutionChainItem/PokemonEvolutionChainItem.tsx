import classNames from 'classnames';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRequestPokemonByNameQuery } from '@utils/api';

import styles from './PokemonEvolutionChainItem.module.scss';

interface PokemonEvolutionChainItemProps {
  name: Pokemon['name'];
  isActive?: boolean;
}

export const PokemonEvolutionChainItem: React.FC<PokemonEvolutionChainItemProps> = ({
  name,
  isActive
}) => {
  const navigate = useNavigate();

  const { data: pokemonNameData, isLoading: pokemonNameLoading } = useRequestPokemonByNameQuery({
    name
  });

  const isPokemonNameData = !!pokemonNameData && !pokemonNameLoading;
  if (!isPokemonNameData) return null;

  const pokemon = pokemonNameData.data;

  return (
    <div
      className={classNames(styles.evolve, { [styles.active_evolution]: isActive })}
      role='button'
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter') return navigate(`/pokemon/${pokemon.id}`);
      }}
      onClick={() => navigate(`/pokemon/${pokemon.id}`)}
    >
      <div className={styles.image}>
        <img src={pokemonNameData?.data?.sprites?.front_default ?? ''} alt='' />
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};
