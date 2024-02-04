import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

const Landing: React.FC = () => {
  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={(theme) => ({ backgroundColor: theme.palette.secondary.light })}
    >
      <Stack alignItems="center" spacing={4}>
        <Typography variant="h1" textAlign="center" color="primary.dark">
          Bookstore. A place with books.
        </Typography>

        <Button variant="contained" size="large" color="primary" href="/books">
          Enter
        </Button>
      </Stack>
    </Box>
  );
};

export default Landing;
