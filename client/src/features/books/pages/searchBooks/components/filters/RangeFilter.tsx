import { Slider } from '@mui/material';

export const RangeFilter = ({ value, onChange, ...props }) => {
  return (
    <Slider
      value={value}
      onChange={(e, value) => onChange(value)}
      valueLabelDisplay="auto"
      {...props}
    />
  );
};
