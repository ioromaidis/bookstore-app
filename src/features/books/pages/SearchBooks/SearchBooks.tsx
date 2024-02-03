import React, { useState } from 'react';
import { Box, Grid, Stack, TextField } from '@mui/material';
import BookItem from '../../components/BookItem';
import { GetBookOptions, useGetBooks } from '../../api';
import Filters from './components/filters';

const SearchBooks: React.FC = () => {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Omit<GetBookOptions, 'query'>>({});
  const books = useGetBooks({
    query,
    ...filters,
  });

  // In a real scenario that would involve http request we should
  // throttle this.
  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setQuery(e.target.value);

  const handleFiltersChange = (newFilters: Omit<GetBookOptions, 'query'>) => {
    setFilters(newFilters);
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" spacing={3}>
        <Filters onFiltersChange={handleFiltersChange} />
        <TextField
          placeholder="Search"
          value={query}
          onChange={handleSearchChange}
        />
      </Stack>

      <Box>
        <Grid container spacing={3} justifyContent="center">
          {books.map((book) => (
            <Grid item xs={8} sm={4} md={3} key={book.isbn}>
              <BookItem book={book} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default SearchBooks;
