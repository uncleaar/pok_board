import { onSnapshot, Query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const useCollection = <T>(query: Query<T>) => {
  const [documents, setDocuments] = useState<T[] | null>(null);

  useEffect(() => {
    const onsub = onSnapshot(query, (querySnapShot) => {
      const data: T[] = [];

      querySnapShot.forEach((doc) => {
        data.push(doc.data());
      });

      setDocuments(data);
    });

    return () => onsub();
  }, []);

  return { documents };
};
