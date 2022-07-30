import { Route, Routes } from 'react-router-dom';

import { PokemonsPage, PokePage } from '../../pages';
import { ROUTES } from '../constants';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.POKEMONS} element={<PokemonsPage />} />
      <Route path={ROUTES.POKE} element={<PokePage />} />
    </Routes>
  );
};
