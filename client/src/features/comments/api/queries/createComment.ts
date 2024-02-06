import http from '@/helpers/http.ts';

import { Comment } from '../../types';
import { BASE_URL } from './constants';

export const createComment = async (data: Partial<Comment>): Promise<void> => {
  return await http.post(`${BASE_URL}/comments`, data);
};
