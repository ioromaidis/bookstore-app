import { Box, Checkbox, FormControlLabel } from '@mui/material';

import { FilterComponent } from './hooks/filtersConfig';

export const CategoryFilter: FilterComponent<string[]> = ({
  value,
  initialValue,
  onChange,
}) => {
  return (
    <>
      {initialValue.map((category: string) => (
        <Box key={category}>
          <FormControlLabel
            control={
              <Checkbox
                checked={value.includes(category)}
                value={category}
                onChange={(e) => onChange(e.target.value, value)}
              />
            }
            label={category}
          />
        </Box>
      ))}
    </>
  );
};
