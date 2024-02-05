import { useQuery } from 'react-query';
import { getBook } from '../queries';

export const useGetBook = (id: string) =>
  useQuery(['book', id], () => getBook(id));
