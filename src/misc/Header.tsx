import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export const Header: React.FC = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bookstore
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
