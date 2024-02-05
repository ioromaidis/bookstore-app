import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import DataWrapper from '@/components/dataWrapper';

import { Book, BookCollection } from '../../types';
import { useGetBook, useGetBooks } from '../../api';
import Breadcrumbs from '../../components/breadcrumbs';
import Details from './components/details';
import Related from './components/related';

const BookDetail = () => {
  const { bookId = '', cat = '' } = useParams();
  const { data, isLoading } = useGetBook(bookId);
  const { data: related = [], isLoading: isRelatedLoading } = useGetBooks({
    category: [cat],
  });

  const relatedWithoutCurrentBook = useMemo(
    () => related.filter(({ id }) => id !== bookId),
    [related, bookId]
  );

  return (
    <Box pb={4}>
      <Breadcrumbs />

      <Stack spacing={6}>
        <DataWrapper isLoading={isLoading} dataCheck={!!data}>
          <Details data={data as Book} />
        </DataWrapper>

        <DataWrapper isLoading={isRelatedLoading} dataCheck={!isRelatedLoading}>
          <Related related={relatedWithoutCurrentBook as BookCollection} />
        </DataWrapper>
      </Stack>
    </Box>
  );
};

export default BookDetail;
