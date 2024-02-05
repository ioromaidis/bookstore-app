import React from 'react';
import { Stack, Typography } from '@mui/material';
import Slider from '@/components/slider';

import BookItem from '../../../../components/bookItem';
import { BookCollection } from '../../../../types';
import BookGrid from '@/features/books/components/bookGrid';
import EmptyResults from '@/components/emptyResults';

interface Props {
  related: BookCollection;
}

const Related: React.FC<Props> = ({ related }) => (
  <Stack spacing={2}>
    <Typography variant="h4">Other books you might like</Typography>
    {related.length > 3 ? (
      <Slider>
        {related?.map((item) => <BookItem key={item.id} book={item} />)}
      </Slider>
    ) : related.length ? (
      <BookGrid books={related} />
    ) : (
      <EmptyResults />
    )}
  </Stack>
);

export default Related;
