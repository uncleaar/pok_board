import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useRequestPokemonQuery } from '../../utils/api/hooks';

import styles from './PokemonPage.module.scss';

export const PokemonPage: React.FC = () => {
  const params = useParams();

  const { data, isLoading } = useRequestPokemonQuery({
    params: { id: +(params.id as string) }
  });

  if (isLoading) return null;

  console.log(data);

  return (
    <div className={styles.page}>
      <h1>{data.data.name}</h1>
    </div>
  );
};
