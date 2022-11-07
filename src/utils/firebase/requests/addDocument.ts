import { addDoc, collection as col, DocumentData,WithFieldValue } from 'firebase/firestore';

import { Collection, db } from '../firebase';

export const addDocument = <T extends WithFieldValue<DocumentData>>(
  collection: Collection,
  data: T
) => addDoc(col(db, collection), data);
