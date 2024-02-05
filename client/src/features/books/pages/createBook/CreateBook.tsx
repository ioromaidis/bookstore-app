import { useEffect } from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { Form, FormField } from '@/components/form';
import { getSchema } from './schema';
import {
  AUTHOR_HELPER_MESSAGE,
  CATEGORIES_HELPER_MESSAGE,
  ISBN10_HELPER_MESSAGE,
  ISBN13_HELPER_MESSAGE,
} from '@/features/books/pages/createBook/constants';
import BookPhoto from './components/bookPhoto';
import { Book, useCreateBook } from '@/features/books';
import { UseFormReturn } from 'react-hook-form';
import { useSnackbarContext } from '@/components/snackbar';

import Breadcrumbs from '../../components/breadcrumbs';

const CreateBook = () => {
  const { openSnackbar } = useSnackbarContext();
  const { mutate, error, isSuccess } = useCreateBook();

  const handleSubmit = async (
    data: Record<string, string>,
    { reset }: UseFormReturn
  ) => {
    mutate({
      title: data.title,
      description: data.description,
      rating: data.rating,
      categories: data.categories.split(',').map((cat) => cat.trim()),
      publisher: data.publisher,
      pages: data.pages,
      thumb: data.file,
      isbn: data.isbn10,
      author: data.author,
    } as unknown as Book);

    reset();
  };

  useEffect(() => {
    if (!isSuccess) {
      return;
    }

    openSnackbar('Book was added successfully!', { severity: 'success' });
  }, [isSuccess]);

  useEffect(() => {
    if (!error) {
      return;
    }

    openSnackbar('Something went wrong. Please try again.', {
      severity: 'error',
    });
  }, [error]);

  return (
    <Stack spacing={3} pb={5}>
      <Breadcrumbs />
      <Typography variant="h3">Add new Book</Typography>
      <Form schema={getSchema()} onSubmit={handleSubmit}>
        {() => (
          <Stack spacing={7}>
            <Box>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={3}>
                    <FormField name="title" label="Title" />
                    <FormField
                      name="description"
                      label="Description"
                      multiline
                    />
                    <FormField
                      name="categories"
                      label="Categories"
                      helperText={CATEGORIES_HELPER_MESSAGE}
                    />
                    <FormField
                      name="author"
                      label="Author Name"
                      helperText={AUTHOR_HELPER_MESSAGE}
                    />
                    <FormField name="publisher" label="Publisher" />
                    <FormField name="year" label="Year" />
                    <FormField name="pages" label="Page number" />
                  </Stack>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Stack spacing={3}>
                    <BookPhoto />
                    <FormField name="rating" label="Rating" />
                    <FormField
                      name="isbn10"
                      label="ISBN-10"
                      helperText={ISBN10_HELPER_MESSAGE}
                    />
                    <FormField
                      name="isbn13"
                      label="ISBN-13"
                      helperText={ISBN13_HELPER_MESSAGE}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Button type="submit" color="primary" variant="contained">
                Save
              </Button>
            </Box>
          </Stack>
        )}
      </Form>
    </Stack>
  );
};

export default CreateBook;
