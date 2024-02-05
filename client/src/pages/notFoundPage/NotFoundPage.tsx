import React from 'react';
import { Button, Stack } from '@mui/material';

import FullPageWrapper from '../components/fullPageWrapper';
import BigTitle from '../components/bigTitle';

const NotFoundPage: React.FC = () => (
  <FullPageWrapper>
    <Stack alignItems="center" spacing={4}>
      <BigTitle>You made a huge mistake.</BigTitle>

      <Button variant="contained" size="large" color="primary" href="/books">
        Go to books
      </Button>
    </Stack>
  </FullPageWrapper>
);
export default NotFoundPage;
