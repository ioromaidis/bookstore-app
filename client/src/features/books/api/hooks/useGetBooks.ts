import { useQuery } from 'react-query';
import { getBooks } from '../queries/getBooks';
import { BookCollection, Category } from '@/features/books';
import { filterBooks } from './utils';

export interface GetBookOptions {
  query?: string;
  category?: Category[];
  rating?: [number, number];
}

export const useGetBooks = (options: GetBookOptions) => {
  return useQuery(['books'], () => getBooks(), {
    retry: 0,
    select: (data: BookCollection) => {
      const { query = '', ...filters } = options;

      return data.filter(filterBooks(query)(filters));
    },
  });
};
