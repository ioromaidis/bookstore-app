import React, { useEffect, useRef, useState } from 'react';
import { Box, Divider, IconButton, Popover, Typography } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import { GetBookOptions } from '../../../../api';
import { CategoryFilters } from './CategoryFilters';
import { RatingFilters } from './RatingFilters';
import { useCategoryFilters } from './useCategoryFilters';
import { useRatingFilters } from './useRatingFilters';

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
  const {
    filters: ratingFilters,
    handleFilterChange: handleRatingFilterChange,
  } = useRatingFilters();

  const handleFiltersToggle = (open: boolean) => () => {
    setFiltersOpen(open);
  };

  const handleFilterChange =
    (type: 'category' | 'rating') =>
    (e: React.ChangeEvent<HTMLInputElement>, ...args: any[]) => {
      switch (type) {
        case 'category':
          handleCategoryFilterChange(e.target.value);
          break;
        case 'rating':
          handleRatingFilterChange(args[0]);
          break;
      }
    };

  useEffect(() => {
    onFiltersChange({
      category: Object.entries(categoryFilters)
        .filter(([_, isChecked]) => isChecked)
        .map(([key]) => key),
      rating: ratingFilters,
    });
  }, [categoryFilters, ratingFilters]);

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
        <Divider />
        <RatingFilters
          filters={ratingFilters}
          onChange={
            handleFilterChange('rating') as unknown as React.ComponentProps<
              typeof RatingFilters
            >['onChange']
          }
        />
      </Popover>
    </>
  );
};

export default Filters;
