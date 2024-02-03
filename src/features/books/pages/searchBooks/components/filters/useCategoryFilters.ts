import { useState } from 'react';
import { useGetCategories } from '../../../../api/hooks/useGetCategories';
import { CategoryFilter } from './CategoryFilters';

export const useCategoryFilters = () => {
  const categories = useGetCategories();
  const [filters, setFilters] = useState<CategoryFilter>(
    categories.reduce((acc, curr) => ({ ...acc, [curr]: false }), {})
  );

  const handleFilterChange = (category: string) => {
    setFilters({
      ...filters,
      [category]: !filters[category],
    });
  };

  return {
    filters,
    handleFilterChange,
  };
};
