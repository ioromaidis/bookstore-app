import React from 'react';
import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';

export const Header: React.FC = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Link href="/books">
            <Typography
              variant="h6"
              color="white"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Bookstore
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
