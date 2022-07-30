import { Route, Routes } from 'react-router-dom';

import { PokemonsPage } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<PokemonsPage />} />
    </Routes>
  );
};

export default App;
