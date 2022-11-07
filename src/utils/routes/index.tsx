import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Auth, PokemonPage, PokemonsPage, PokePage, ProfilePage } from '@pages';
import { ROUTES } from '@utils/constants';
import { StoreProvider } from '@utils/context';
import { useStore } from '@utils/hooks';

import { Layout } from '../../layout';

export const AuthApp = () => (
  <Routes>
    <Route path={ROUTES.AUTH} element={<Auth />} />
    <Route path='*' element={<Navigate to={ROUTES.AUTH} />} />
  </Routes>
);

export const AppRoutes = () => {
  const {
    session: { isLoginIn }
  } = useStore();

  console.log(isLoginIn, 'isLoginIn');

  return (
    <BrowserRouter>
      {!isLoginIn && <AuthApp />}
      {isLoginIn && (
        <Layout>
          <Routes>
            <Route path={ROUTES.POKEMON} element={<PokemonPage />} />
            <Route path={ROUTES.POKE} element={<PokePage />} />
            <Route path={ROUTES.POKEMONS} element={<PokemonsPage />} />
            <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
          </Routes>
        </Layout>
      )}
    </BrowserRouter>
  );
};
