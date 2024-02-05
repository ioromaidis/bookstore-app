import http from '@/helpers/http.ts';

import { BASE_URL } from './constants.ts';
import { Category } from '../../types';

export const getCategories = async (): Promise<Category[]> => {
  return await http.get(`${BASE_URL}/categories`);
};
