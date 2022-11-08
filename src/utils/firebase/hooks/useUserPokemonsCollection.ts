import { User } from 'firebase/auth';
import { collection, orderBy, query, where } from 'firebase/firestore';

import { db, PokemonDocument, useCollection } from '@utils/firebase';

interface UseUserPokemonsCollectionParams {
  uid: User['uid'];
}

export const useUserPokemonsCollection = ({ uid }: UseUserPokemonsCollectionParams) => {
  const q = query<any>(collection(db, 'pokemons'), where('uid', '==', uid), orderBy('name'));
  return useCollection<PokemonDocument>(q);
};
