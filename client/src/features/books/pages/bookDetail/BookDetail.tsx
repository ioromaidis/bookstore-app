import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Divider, Stack, Typography } from '@mui/material';
import DataWrapper from '@/components/dataWrapper';
import { CommentList, Entity } from '@/features/comments';

import { Book, BookCollection } from '../../types';
import { useGetBook, useGetBooks } from '../../api/hooks';
import Breadcrumbs from '../../components/breadcrumbs';
import Details from './components/details';
import Related from './components/related';
import { BookFilterType } from '../../api';

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
          <Stack spacing={3}>
            <Box>
              <Typography variant="h3">Comments</Typography>
              <Divider />
            </Box>
            <CommentList entityId={bookId} entityType={Entity.book} />
          </Stack>
        </DataWrapper>

        <DataWrapper isLoading={isRelatedLoading} dataCheck={!isRelatedLoading}>
          <Related related={relatedWithoutCurrentBook as BookCollection} />
        </DataWrapper>
      </Stack>
    </Box>
  );
};

export default BookDetail;
