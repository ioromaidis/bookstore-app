import { useQuery } from 'react-query';
import { getBooks } from '../queries';
import { BookCollection, Category } from '@/features/books';
import { filterBooks } from './utils';

export interface GetBookOptions {
  query?: string;
  category?: Category[];
  rating?: [number, number];
}

export const useGetBooks = (options: GetBookOptions) =>
  useQuery(['books'], () => getBooks(), {
    select: (data: BookCollection) => {
      const { query = '', ...filters } = options;

      return data.filter(filterBooks(query)(filters));
    },
  });
