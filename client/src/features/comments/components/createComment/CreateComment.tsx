import React, { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Form, FormField } from '@/components/form';
import { Box, Button, Stack } from '@mui/material';
import { useCreateComment } from '@/features/comments';
import { useSnackbarContext } from '@/components/snackbar';

import { Entity } from '../../types';

interface Props {
  entityId: string;
  entityType: Entity;
}

const CreateComment: React.FC<Props> = ({ entityId, entityType }) => {
  const { mutate, error } = useCreateComment();
  const { openSnackbar } = useSnackbarContext();

  const handleSubmit = (
    data: Record<string, string>,
    { reset }: UseFormReturn
  ) => {
    if (!data.content) {
      return;
    }

    mutate({
      entityId,
      entityType,
      content: data.content,
      author: 'Unknown',
    });

    reset();
  };

  useEffect(() => {
    if (!error) {
      return;
    }

    openSnackbar("We couldn't send your comment.", { severity: 'error' });
  }, [error]);

  return (
    <Form onSubmit={handleSubmit}>
      {() => (
        <Stack spacing={3}>
          <FormField name="content" multiline minRows={3} />
          <Box>
            <Button color="primary" type="submit">
              Add Comment
            </Button>
          </Box>
        </Stack>
      )}
    </Form>
  );
};

export default CreateComment;
