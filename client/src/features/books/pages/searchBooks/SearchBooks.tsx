import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import EmptyResults from '@/components/emptyResults';
import { useDebounce } from '@/hooks';

import { GetBookOptions, useGetBooks } from '../../api';
import Search from './components/search';
import Filters from './components/filters';
import Chips from './components/chips';
import BookGrid from '../../components/bookGrid';
import CreateBookButton from './components/createBookButton';
import Breadcrumbs from '../../components/breadcrumbs';

const SearchBooks: React.FC = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 200);
  const [filters, setFilters] = useState<Omit<GetBookOptions, 'query'>>({});
  const debouncedFilters = useDebounce(filters, 200);
  const { data } = useGetBooks({
    query: debouncedQuery,
    ...debouncedFilters,
  });

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setQuery(e.target.value);

  const handleFiltersChange = (newFilters: Omit<GetBookOptions, 'query'>) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Breadcrumbs />
      <Stack spacing={3}>
        <Box>
          <Typography variant="h3">Search to find your new book</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </Typography>
        </Box>

        <Stack direction="row" alignItems="center" spacing={3}>
          <Search value={query} onChange={handleSearchChange} />
          <Filters onFiltersChange={handleFiltersChange} />
        </Stack>
        <Chips filters={filters} />

        <Box pb={4}>
          {data?.length ? <BookGrid books={data} /> : <EmptyResults />}
        </Box>

        <CreateBookButton />
      </Stack>
    </>
  );
};

export default SearchBooks;
