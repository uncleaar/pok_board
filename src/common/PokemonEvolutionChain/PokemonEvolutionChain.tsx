import React from 'react';

import { useRequestEvolutionChainQuery } from '@utils/api/hooks';

import styles from './PokemonEvolutionChain.module.scss';

interface PokemonEvolutionChainProps {
  chainId: number;
  pokemonId: Pokemon['id'];
}

const generateEvolutionChain = (
  chainLink: ChainLink,
  chain: { name: Pokemon['name'] }[] = []
) => {
  if (!chainLink.evolves_to.length) {
    chain = [...chain, { name: chainLink.species.name }];
    return chain;
  }
  const ch = generateEvolutionChain(chainLink.evolves_to[0], chain);
  chain = [...chain, ...ch];
  return chain;
};

export const PokemonEvolutionChain: React.FC<PokemonEvolutionChainProps> = ({
  chainId,
  pokemonId
}) => {
  const { data: evolutionChainData, isLoading: evolutionChainLoading } =
    useRequestEvolutionChainQuery({
      id: chainId
    });

  const isEvolutionChainData = !!evolutionChainData || !evolutionChainLoading;
  if (!isEvolutionChainData) return null;

  console.log('asd', generateEvolutionChain(evolutionChainData?.data.chain));

  return <div>PokemonEvolutionChain</div>;
};
