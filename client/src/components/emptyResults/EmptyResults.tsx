import React from 'react';
import { Typography } from '@mui/material';

interface Props {
  noResultsText?: string;
}

const EmptyResults: React.FC<Props> = ({ noResultsText }) => (
  <Typography textAlign="center" variant="h6">
    {noResultsText || 'No items found...'}
  </Typography>
);

export default EmptyResults;
