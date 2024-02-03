import React from 'react';
import { Book } from '../../types';
import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from '@mui/material';

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
            {book.title}
          </Typography>
          <Rating name="read-only" value={book.rating} readOnly />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default BookItem;
