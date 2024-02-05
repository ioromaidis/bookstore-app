import React from 'react';
import { Chip, Stack } from '@mui/material';

import { GetBookOptions } from '../../../../api';

interface Props {
  filters: Omit<GetBookOptions, 'query'>;
}

const Chips: React.FC<Props> = ({ filters }) => (
  <Stack direction="row" spacing={1} overflow="auto">
    {filters.category?.map((item: string) => <Chip id={item} label={item} />)}
    {filters.rating && (
      <Chip label={`Rating: ${filters.rating[0]} - ${filters.rating[1]}`} />
    )}
  </Stack>
);

export default Chips;
