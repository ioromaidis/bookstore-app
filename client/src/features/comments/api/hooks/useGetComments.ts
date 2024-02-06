import { useQuery } from 'react-query';

import { Entity } from '../../types';
import { getComments } from '../queries';

interface Params {
  entityId: string;
  entityType: Entity;
}

export const useGetComments = ({ entityId, entityType }: Params) =>
  useQuery(
    ['comments', entityType, entityId],
    () => getComments({ entityId, entityType }),
    {}
  );
