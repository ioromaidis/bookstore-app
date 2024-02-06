import http from '@/helpers/http.ts';

import { Comment, Entity } from '../../types';
import { BASE_URL } from './constants';

interface Params {
  entityId: string;
  entityType: Entity;
}

export const getComments = async ({
  entityId,
  entityType,
}: Params): Promise<Comment[]> => {
  return await http.get(`${BASE_URL}/comments`, {
    entityId,
    entityType,
  });
};
