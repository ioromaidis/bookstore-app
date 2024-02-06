import React from 'react';
import { Chip, Stack } from '@mui/material';
import { GetBookOptions } from '../../../../api';

interface Props {
  filters: Omit<GetBookOptions, 'query'>;
}

const Chips: React.FC<Props> = ({
  filters: { categories, rating, ...rest },
}) => (
  <Stack direction="row" spacing={1} overflow="auto">
    {categories?.value?.map((item: string) => <Chip key={item} label={item} />)}
    {rating && (
      <Chip label={`Rating: ${rating.value[0]} - ${rating.value[1]}`} />
    )}
    {Object.values(rest)?.map(
      ({ value }) => value && <Chip key={value} label={value} />
    )}
  </Stack>
);

export default Chips;
