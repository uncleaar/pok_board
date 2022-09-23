import { PokemonType } from '@common/PokemonType/PokemonType';

import styles from './PokemonTypes.module.scss';

interface PokemonTypesProps {
  types: PokemonType[];
}

export const PokemonTypes: React.FC<PokemonTypesProps> = ({ types }) => (
  <div className={styles.types}>
    {types.map(({ type }) => (
      <PokemonType type={type} />
    ))}
  </div>
);
