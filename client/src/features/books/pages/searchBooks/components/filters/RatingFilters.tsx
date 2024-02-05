import React from 'react';
import { Box, Slider, Typography } from '@mui/material';

export type RatingFilter = [number, number];

interface Props {
  filters: RatingFilter;
  onChange: React.ComponentProps<typeof Slider>['onChange'];
}

const marks = [
  { value: 0, label: '0' },
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
];

export const RatingFilters: React.FC<Props> = ({ filters, onChange }) => {
  return (
    <Box p={3}>
      <Typography variant="subtitle2">Rating</Typography>
      <Slider
        value={filters}
        min={0}
        max={5}
        step={1}
        marks={marks}
        onChange={onChange}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};
