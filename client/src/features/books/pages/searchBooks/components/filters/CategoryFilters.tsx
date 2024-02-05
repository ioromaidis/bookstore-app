import React from 'react';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { Category } from '../../../..';

export type CategoryFilter = Record<Category, boolean>;

interface Props {
  filters: CategoryFilter;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CategoryFilters: React.FC<Props> = ({ filters, onChange }) => {
  return (
    <Box p={3}>
      <Typography variant="subtitle2">Categories</Typography>
      {Object.keys(filters).map((category) => (
        <Box key={category}>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters[category]}
                value={category}
                onChange={onChange}
              />
            }
            label={category}
          />
        </Box>
      ))}
    </Box>
  );
};
