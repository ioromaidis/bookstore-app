import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Link,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import { slugify } from '@/helpers/utils';

import { Book } from '../../types';

interface Props {
  book: Book;
}

const BookItem: React.FC<Props> = ({ book }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={book.thumb} />
      <CardContent>
        <Stack spacing={2} alignItems="center">
          <Typography
            gutterBottom
            variant="body2"
            fontWeight="bold"
            component="h5"
            noWrap
            width="100%"
            textAlign="center"
          >
            <Link href={`/books/${slugify(book.categories[0])}/${book.id}`}>
              {book.title}
            </Link>
          </Typography>
          <Rating name="read-only" value={book.rating} readOnly />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default BookItem;
