import React, { useEffect } from 'react';
import { Box, Divider, IconButton, Popover, Typography } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

import { GetBookOptions } from '../../../../api/hooks/types';
import { useGetCategories } from '@/features/books';
import { InFilter } from './InFilter';
import { FiltersWrapper } from './FiltersWrapper';
import { MatchFilter } from './MatchFilter';
import { RangeFilter } from './RangeFilter';
import { useFiltersToggle } from './hooks/useFiltersToggle';

interface Props {
  onFiltersChange: (newFilters: Partial<GetBookOptions>) => void;
}

const Filters: React.FC<Props> = ({ initial, onFiltersChange }) => {
  const { anchor, handleFiltersToggle, filtersOpen } = useFiltersToggle();
  const { data: categories = [] } = useGetCategories();

  return (
    initial && (
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

          <Box py={3}>
            <FiltersWrapper initial={initial} onFiltersChange={onFiltersChange}>
              {({ filters, onChange }) => (
                <>
                  <InFilter
                    dataset={categories}
                    value={filters.categories?.value}
                    name="categories"
                    onChange={(value) => onChange('categories', 'in', value)}
                  />
                  <MatchFilter
                    value={filters.author?.value}
                    onChange={(value) => onChange('author', 'match', value)}
                  />
                  <MatchFilter
                    value={filters.publisher?.value}
                    onChange={(value) => onChange('publisher', 'match', value)}
                  />
                  <RangeFilter
                    value={filters?.rating?.value}
                    onChange={(value) => onChange('rating', 'range', value)}
                    marks={[
                      { value: 0, label: '0' },
                      { value: 1, label: '1' },
                      { value: 2, label: '2' },
                      { value: 3, label: '3' },
                      { value: 4, label: '4' },
                      { value: 5, label: '5' },
                    ]}
                    min={0}
                    max={5}
                    step={1}
                  />
                </>
              )}
            </FiltersWrapper>
          </Box>
        </Popover>
      </>
    )
  );
};

export default Filters;
