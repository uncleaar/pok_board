import { onSnapshot, Query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const useCollection = <T>(query: Query<T>) => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    const onsub = onSnapshot(query, (querySnapShot) => {
      const data: any = [];

      querySnapShot.forEach((doc) => {
        data.push(doc.data());
      });

      setData(data);
    });

    return () => onsub();
  }, []);

  return { data };
};
