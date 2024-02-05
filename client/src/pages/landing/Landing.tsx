import React from 'react';
import { Button, Stack } from '@mui/material';

import FullPageWrapper from '../components/fullPageWrapper';
import BigTitle from '../components/bigTitle';

const Landing: React.FC = () => {
  return (
    <FullPageWrapper>
      <Stack alignItems="center" spacing={4}>
        <BigTitle>Bookstore app.</BigTitle>

        <Button variant="contained" size="large" color="primary" href="/books">
          Enter
        </Button>
      </Stack>
    </FullPageWrapper>
  );
};

export default Landing;
