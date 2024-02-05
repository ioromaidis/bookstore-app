import React from 'react';
import {
  Box,
  Button,
  Grid,
  Link,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import { slugify } from '@/helpers/utils.ts';

import { Book } from '../../../../types';

interface Props {
  data: Book;
}

const Details: React.FC<Props> = ({ data }) => (
  <Box>
    <Grid container spacing={4}>
      <Grid item md={6}>
        <Box height="100%" width="100%">
          <img
            src={data?.thumb}
            alt={data?.title}
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </Box>
      </Grid>
      <Grid item md={6}>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h3">{data?.title}</Typography>
            <Typography variant="subtitle2">{data?.author}</Typography>
          </Box>
          <Rating value={data?.rating} readOnly />
          <Typography>{data?.description}</Typography>
          <Stack direction="row" spacing={2}>
            <Button size="small" variant="outlined">
              Favorite
            </Button>
            <Button size="small" variant="outlined">
              Share
            </Button>
          </Stack>
          <Box>
            <Typography>
              Category:{' '}
              {data?.categories.map((cat) => (
                <Box key={cat} component="span">
                  <Link key={cat} href={`/books/${slugify(cat)}`}>
                    {cat}
                  </Link>
                  &nbsp;
                </Box>
              ))}
            </Typography>
            <Typography>Year: {data?.year}</Typography>
            <Typography>Number of pages: {data?.pages}</Typography>
          </Box>
          <Box>
            <Typography>Publisher: {data?.publisher}</Typography>
          </Box>
          <Box>
            <Typography>ISBN-10: {data?.isbn}</Typography>
          </Box>
          <Box>
            <Button size="large" variant="contained">
              Buy
            </Button>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  </Box>
);

export default Details;
