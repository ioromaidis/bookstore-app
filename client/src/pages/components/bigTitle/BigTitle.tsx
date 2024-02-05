import React from 'react';
import { Typography } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

const BigTitle: React.FC<Props> = ({ children }) => (
  <Typography
    variant="h1"
    component="div"
    textAlign="center"
    color="primary.dark"
  >
    {children}
  </Typography>
);

export default BigTitle;
