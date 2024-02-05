import React, { ReactNode } from 'react';
import { Box, BoxProps } from '@mui/material';

interface Props extends BoxProps {
  children: ReactNode;
}

const Container: React.FC<Props> = ({ children, ...props }) => (
  <Box width="100%" maxWidth={1024} px={3} mx="auto" {...props}>
    {children}
  </Box>
);

export default Container;
