import { useState } from 'react';
import { useQuery } from 'react-query';
import { useRequestPokemonInfinityQuery } from '../../utils/api/hooks';

export const PokemonsPage = () => {
  const [offset, setOffset] = useState(0);
  const { data, isError, isFetching, fetchNextPage } = useRequestPokemonInfinityQuery();

  if (!data || isError) return <div>error</div>;
  if (isFetching) return <p>loading</p>;
  console.log(data);

  const pokemons = data?.pages.reduce((array, page) => [...array, ...page.data.results], []);

  console.log(pokemons);

  return (
    <div>
      {data?.name}
      <button onClick={() => fetchNextPage()}>{offset}</button>
    </div>
  );
};
