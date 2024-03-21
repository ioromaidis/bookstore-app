import React, { Children, useEffect, useState } from 'react';

export const FiltersWrapper = ({ initial, onFiltersChange, children }) => {
  const [filters, setFilters] = useState(initial);

  const onChange = (key, type, value) => {
    setFilters({ ...filters, [key]: { type, value } });
  };

  useEffect(() => {
    onFiltersChange(filters);
  }, [filters]);

  return children({ filters, onChange });
};
