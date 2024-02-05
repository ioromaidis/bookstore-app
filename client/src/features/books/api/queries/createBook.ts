import { Book } from '../../types';
import { BASE_URL } from '@/features/books/api/queries/constants.ts';
import http from '@/helpers/http';

export const createBook = async (book: Book) => {
  return await http.post(`${BASE_URL}/books`, book);
};
