import http from '@/helpers/http';
import { BASE_URL } from './constants';

export const getBooks = async () => {
  return await http.get(`${BASE_URL}/books`);
};
