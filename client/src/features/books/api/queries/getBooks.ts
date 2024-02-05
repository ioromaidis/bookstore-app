import http from '@/helpers/http';

import { BASE_URL } from './constants';
import { BookCollection } from '../../types';

export const getBooks = async (): Promise<BookCollection> => {
  return await http.get(`${BASE_URL}/books`);
};
