import http from '@/helpers/http';

import { BASE_URL } from './constants';
import { Book } from '../../types';

export const getBook = async (id: string): Promise<Book> => {
  return await http.get(`${BASE_URL}/books/${id}`);
};
