import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@utils/constants';

import Logo from '../../assets/images/logo.png';

import styles from './Header.module.scss';

export const Header: React.FC = () => (
  <div className={styles.c}>
    <div className={styles.header}>
      <img className={styles.logo} src={Logo} alt='' />
      <div className={styles.items}>
        <Link className={styles.item} to={ROUTES.POKEMONS}>
          Pokemons
        </Link>
        <Link className={styles.item} to={ROUTES.POKE}>
          Pokedex
        </Link>

        <Link className={styles.item} to={ROUTES.PROFILE}>
          Profile
        </Link>
      </div>
    </div>
  </div>
);
