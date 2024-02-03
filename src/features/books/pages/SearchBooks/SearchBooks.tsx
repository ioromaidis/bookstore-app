import React from 'react';
import { Grid } from '@mui/material';
import BookItem from '@/features/books/components/BookItem';
import { useGetBooks } from '../../api';

const SearchBooks: React.FC = () => {
  const books = useGetBooks();

  return (
    <Grid container spacing={3} justifyContent="center">
      {books.map((book) => (
        <Grid item xs={8} sm={4} md={3} key={book.isbn}>
          <BookItem book={book} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchBooks;
