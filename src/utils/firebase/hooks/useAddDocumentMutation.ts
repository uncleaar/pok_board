import { User } from 'firebase/auth';
import { useMutation } from 'react-query';

import { Collection } from '../firebase';
import { addDocument } from '../requests';

interface UseAddDocumentPokemonMutationParams {
  collection: Extract<Collection, 'pokemons'>;
  data: { uid: User['uid']; pokemonId: Pokemon['id'] };
}

type UseAddDocumentMutationParams = UseAddDocumentPokemonMutationParams;

export const useAddDocumentMutation = (settings?: RequestMutationSettings<typeof addDocument>) =>
  useMutation(
    ['addDocumentMutation'],
    (params: RequestParams<UseAddDocumentMutationParams>) =>
      addDocument(params.collection, params.data),
    settings?.options && settings.options
  );
