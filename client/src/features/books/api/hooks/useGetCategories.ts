import { useQuery } from 'react-query';

import { getCategories } from '../queries';

export const useGetCategories = () => useQuery(['categories'], getCategories);
