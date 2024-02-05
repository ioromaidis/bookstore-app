import { useEffect, useMemo, useState } from 'react';
import { useGetCategories } from '../../../../api/hooks/useGetCategories';
import { CategoryFilter } from './CategoryFilters';

export const useCategoryFilters = () => {
  const { data: categories = [] } = useGetCategories();

  const initialFilters = useMemo(
    () => categories.reduce((acc, curr) => ({ ...acc, [curr]: false }), {}),
    [categories]
  );

  const [filters, setFilters] = useState<CategoryFilter>({});

  useEffect(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

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
