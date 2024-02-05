import React from 'react';
import { BookCollection } from '../../types';
import { Grid } from '@mui/material';
import BookItem from '../bookItem';

interface Props {
  books: BookCollection;
}

const BookGrid: React.FC<Props> = ({ books }) => (
  <Grid
    container
    spacing={3}
    justifyContent={{ xs: 'center', md: 'flex-start' }}
  >
    {books.map((book) => (
      <Grid item xs={8} sm={4} md={3} key={book.id}>
        <BookItem book={book} />
      </Grid>
    ))}
  </Grid>
);
export default BookGrid;
