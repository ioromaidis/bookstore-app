import React from 'react';
import { Alert, Box } from '@mui/material';

export const FallbackError: React.FC = () => (
  <Box p={4}>
    <Alert severity="error">Oops, something went wrong.</Alert>
  </Box>
);
