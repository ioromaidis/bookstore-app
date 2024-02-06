import { useParams } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import DataWrapper from '@/components/dataWrapper';
import { useGetBooks } from '../../api/hooks';
import Breadcrumbs from '../../components/breadcrumbs';
import BookGrid from '../../components/bookGrid';
import { BookFilterType } from '../../api/hooks/types';

const BookCategory = () => {
  const { cat = '' } = useParams();
  const { data = [], isLoading } = useGetBooks({
    categories: { value: [cat], type: BookFilterType.in },
  });

  return (
    <>
      <Stack spacing={3} pb={5}>
        <Breadcrumbs />
        <Box pb={4}>
          <DataWrapper isLoading={isLoading} dataCheck={!!data?.length}>
            <BookGrid books={data} />
          </DataWrapper>
        </Box>
      </Stack>
    </>
  );
};

export default BookCategory;
