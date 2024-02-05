import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({ value, onChange }) => (
  <TextField
    fullWidth
    placeholder="Search"
    value={value}
    onChange={onChange}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
  />
);

export default Search;
