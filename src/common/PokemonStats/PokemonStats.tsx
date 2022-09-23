import React from 'react';

import styles from './PokemonStats.module.scss';

interface PokemonStatsProps {
  title: string;
  stats: string[];
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ title, stats }) => {
  console.log('@');

  return (
    <div>
      <div className={styles.title}>{title}</div>
      <ul className={styles.stats}>
        {stats.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonStats;
