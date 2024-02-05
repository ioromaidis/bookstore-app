import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

type Props = {
  children: ReactNode;
};

export const FullHeightBox: React.FC<Props> = ({ children }) => (
  <Box height="100%" display="flex" flexDirection="column">
    {children}
  </Box>
);
