import { useState } from 'react';
import { RatingFilter } from './RatingFilters';

export const useRatingFilters = () => {
  const [filters, setFilters] = useState<RatingFilter>([0, 5]);

  const handleFilterChange = (newValue: RatingFilter) => setFilters(newValue);

  return { filters, handleFilterChange };
};
