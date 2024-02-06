import { TextField } from '@mui/material';

import { FilterComponent } from './hooks/filtersConfig';

export const MatchFilter: FilterComponent<string> = ({ value, onChange }) => (
  <TextField value={value} onChange={(e) => onChange(e.target.value)} />
);
