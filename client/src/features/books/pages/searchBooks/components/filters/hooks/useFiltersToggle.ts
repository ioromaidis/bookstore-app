import { useRef, useState } from 'react';

export const useFiltersToggle = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const anchor = useRef<HTMLButtonElement>(null);

  const handleFiltersToggle = (open: boolean) => () => {
    setFiltersOpen(open);
  };

  return { filtersOpen, setFiltersOpen, handleFiltersToggle, anchor };
};
