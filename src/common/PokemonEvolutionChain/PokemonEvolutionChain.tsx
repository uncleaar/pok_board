import React, { useMemo } from 'react';

import { useRequestEvolutionChainQuery } from '@utils/api/hooks';

import { Title } from '../../ui';

import { PokemonEvolutionChainItem } from './PokemonEvolutionChainItem/PokemonEvolutionChainItem';

import styles from './PokemonEvolutionChain.module.scss';

interface PokemonEvolutionChainProps {
  chainId: number;
  pokemonName: Pokemon['name'];
}

const generateEvolutionChain = (
  chainLink: ChainLink,
  chain: { name: Pokemon['name'] }[] = []
): any => {
  chain = [...chain, { name: chainLink.species.name }];

  if (!chainLink.evolves_to.length) return chain;

  return chainLink.evolves_to.flatMap((evol) =>
    generateEvolutionChain(chainLink.evolves_to[0], chain)
  );
};

export const PokemonEvolutionChain: React.FC<PokemonEvolutionChainProps> = ({
  chainId,
  pokemonName
}) => {
  const { data: evolutionChainData, isLoading: evolutionChainLoading } =
    useRequestEvolutionChainQuery({
      id: chainId
    });

  const isEvolutionChainData = !!evolutionChainData || !evolutionChainLoading;
  if (!isEvolutionChainData) return null;

  const evolutionChain = generateEvolutionChain(evolutionChainData.data.chain);

  return (
    <div className={styles.container}>
      <Title>Evolution chain</Title>
      <div className={styles.evolution__container}>
        {evolutionChain?.map((evolve: any) => (
          <PokemonEvolutionChainItem
            name={evolve.name}
            isActive={pokemonName === evolve.name}
          />
        ))}
      </div>
    </div>
  );
};
