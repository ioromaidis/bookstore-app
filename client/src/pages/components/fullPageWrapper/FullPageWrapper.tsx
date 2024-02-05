import React from 'react';
import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

const FullPageWrapper: React.FC<Props> = ({ children }) => (
  <Box
    height="100%"
    display="flex"
    alignItems="center"
    justifyContent="center"
    sx={(theme) => ({ backgroundColor: theme.palette.secondary.light })}
  >
    {children}
  </Box>
);

export default FullPageWrapper;
