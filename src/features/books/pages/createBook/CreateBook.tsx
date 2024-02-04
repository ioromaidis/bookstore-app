import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { Form, FormField } from '@/components/form';
import { getSchema } from './schema';
import {
  AUTHOR_HELPER_MESSAGE,
  CATEGORIES_HELPER_MESSAGE,
  ISBN10_HELPER_MESSAGE,
  ISBN13_HELPER_MESSAGE,
} from '@/features/books/pages/createBook/constants';

const CreateBook = () => {
  const handleSubmit = (data) => console.log(data);

  return (
    <Stack spacing={3} pb={5}>
      <Typography variant="h3">Add new Book</Typography>
      <Form schema={getSchema()} onSubmit={handleSubmit}>
        {({ register }) => (
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
                    <input type="file" {...register('image')} />
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
