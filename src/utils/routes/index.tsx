import { Route, Routes } from 'react-router-dom';

import { Auth, PokemonPage, PokemonsPage, PokePage } from '@pages';
import { ROUTES } from '@utils/constants';

export const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.POKEMONS} element={<PokemonsPage />} />
    <Route path={ROUTES.POKEMON} element={<PokemonPage />} />
    <Route path={ROUTES.POKE} element={<PokePage />} />
    <Route path={ROUTES.AUTH} element={<Auth />} />
  </Routes>
);
