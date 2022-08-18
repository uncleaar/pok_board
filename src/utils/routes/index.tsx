import { Route, Routes } from 'react-router-dom';

import { PokemonPage,PokemonsPage, PokePage } from '../../pages';
import { ROUTES } from '../constants';

export const AppRoutes = () => (
    <Routes>
      <Route path={ROUTES.POKEMONS} element={<PokemonsPage />} />
      <Route path={ROUTES.POKEMON} element={<PokemonPage />} />
      <Route path={ROUTES.POKE} element={<PokePage />} />
    </Routes>
  );
