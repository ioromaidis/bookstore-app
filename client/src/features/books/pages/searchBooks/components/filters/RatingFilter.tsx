import { Slider } from '@mui/material';

import { FilterComponent } from './hooks/filtersConfig';
import { RangeFilter } from '../../../../api';

const marks = [
  { value: 0, label: '0' },
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
];

export const RatingFilter: FilterComponent<RangeFilter['value']> = ({
  value,
  onChange,
}) => {
  return (
    <Slider
      value={value}
      min={0}
      max={5}
      step={1}
      marks={marks}
      onChange={onChange}
      valueLabelDisplay="auto"
    />
  );
};
