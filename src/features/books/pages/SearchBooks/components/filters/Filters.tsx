import React, { useEffect, useRef, useState } from 'react';
import { Box, Divider, IconButton, Popover, Typography } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import { GetBookOptions } from '../../../..';
import { useCategoryFilters } from './useCategoryFilters';
import { CategoryFilters } from './CategoryFilters';

interface Props {
  onFiltersChange: (newFilters: Partial<GetBookOptions>) => void;
}

const Filters: React.FC<Props> = ({ onFiltersChange }) => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const anchor = useRef<HTMLButtonElement>(null);
  const {
    filters: categoryFilters,
    handleFilterChange: handleCategoryFilterChange,
  } = useCategoryFilters();

  const handleFiltersToggle = (open: boolean) => () => {
    setFiltersOpen(open);
  };

  const handleFilterChange =
    (type: 'category') => (e: React.ChangeEvent<HTMLInputElement>) => {
      switch (type) {
        case 'category':
          handleCategoryFilterChange(e.target.value);
          break;
      }
    };

  useEffect(() => {
    onFiltersChange({
      category: Object.entries(categoryFilters)
        .filter(([_, isChecked]) => isChecked)
        .map(([key]) => key),
    });
  }, [categoryFilters]);

  return (
    <>
      <IconButton ref={anchor} onClick={handleFiltersToggle(true)}>
        <TuneIcon />
      </IconButton>
      <Popover
        open={filtersOpen}
        onClose={handleFiltersToggle(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        anchorEl={anchor.current}
      >
        <Box p={2}>
          <Typography variant="subtitle2" textAlign="center">
            Filters
          </Typography>
        </Box>
        <Divider />
        <CategoryFilters
          filters={categoryFilters}
          onChange={handleFilterChange('category')}
        />
      </Popover>
    </>
  );
};

export default Filters;
