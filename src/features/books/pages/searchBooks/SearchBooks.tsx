import React, { useState } from 'react';
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { GetBookOptions, useGetBooks } from '../../api';
import Filters from './components/filters';
import EmptyResults from '@/components/emptyResults';
import BookGrid from '../../components/bookGrid';

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
      <Box>
        <Typography variant="h3">Search to find your new book</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Typography>
      </Box>
      <Stack direction="row" alignItems="center" spacing={3}>
        <TextField
          fullWidth
          placeholder="Search"
          value={query}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Filters onFiltersChange={handleFiltersChange} />
      </Stack>

      <Box pb={4}>
        {books.length ? <BookGrid books={books} /> : <EmptyResults />}
      </Box>
    </Stack>
  );
};

export default SearchBooks;
