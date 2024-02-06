import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import DataWrapper from '@/components/dataWrapper';

import { Book, BookCollection } from '../../types';
import { useGetBook, useGetBooks } from '../../api/hooks';
import Breadcrumbs from '../../components/breadcrumbs';
import Details from './components/details';
import Related from './components/related';
import { BookFilterType } from '../../api/hooks/types';

const BookDetail = () => {
  const { bookId = '', cat = '' } = useParams();
  const { data, isLoading } = useGetBook(bookId);
  const { data: related = [], isLoading: isRelatedLoading } = useGetBooks({
    categories: { value: [cat], type: BookFilterType.in },
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
