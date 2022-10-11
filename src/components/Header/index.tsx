import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';

import styles from './Header.module.scss';

export const Header: React.FC = () => (
  <div className={styles.c}>
    <div className={styles.header}>
      <img className={styles.logo} src={Logo} alt='' />
      <div className={styles.items}>
        <Link className={styles.item} to='/'>
          Pokemons
        </Link>
        <Link className={styles.item} to='/poke'>
          Pokedex
        </Link>
      </div>
    </div>
  </div>
);
