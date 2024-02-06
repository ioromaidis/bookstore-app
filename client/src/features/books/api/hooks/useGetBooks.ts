import { useQuery } from 'react-query';
import { getBooks } from '../queries';
import { BookCollection } from '../../types';
import { filterBooks } from './utils';
import { GetBookOptions } from './types';

export const useGetBooks = (options: GetBookOptions) =>
  useQuery(['books'], () => getBooks(), {
    select: (data: BookCollection) => {
      const { query = '', ...filters } = options;

      return data.filter(filterBooks(query)(filters));
    },
  });
