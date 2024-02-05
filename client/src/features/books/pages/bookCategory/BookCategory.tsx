import { useParams } from 'react-router-dom';
import { useGetBooks } from '@/features/books';
import Breadcrumbs from '@/features/books/components/breadcrumbs';
import { Box, Stack } from '@mui/material';
import BookGrid from '@/features/books/components/bookGrid';
import EmptyResults from '@/components/emptyResults';

const BookCategory = () => {
  const { cat = '' } = useParams();
  const { data } = useGetBooks({ category: [cat] });

  return (
    <>
      <Stack spacing={3} pb={5}>
        <Breadcrumbs />
        <Box pb={4}>
          {data?.length ? <BookGrid books={data} /> : <EmptyResults />}
        </Box>
      </Stack>
    </>
  );
};

export default BookCategory;
