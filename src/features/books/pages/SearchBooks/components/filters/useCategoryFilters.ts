import { useState } from 'react';
import { useGetCategories } from '../../../../api/hooks/useGetCategories';

export const useCategoryFilters = () => {
  const categories = useGetCategories();
  const [filters, setFilters] = useState<Record<string, boolean>>(
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
