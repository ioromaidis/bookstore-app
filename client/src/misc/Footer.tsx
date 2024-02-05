import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Box>
      <AppBar component="footer" position="static">
        <Toolbar>
          <Typography component="div" sx={{ mx: 'auto' }}>
            © Copyright {new Date().getFullYear()}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
