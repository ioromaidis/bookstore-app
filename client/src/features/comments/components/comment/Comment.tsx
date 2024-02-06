import React from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import { formatDate } from '@/helpers/utils.ts';

import { Comment as CommentType } from '../../types';

interface Props {
  comment: CommentType;
}

const Comment: React.FC<Props> = ({
  comment: { author, createdAt, content },
}) => (
  <Stack direction="row" spacing={2}>
    <Avatar />
    <Stack spacing={1}>
      <Typography>
        {author} at {formatDate(createdAt)}
      </Typography>
      <Typography>{content}</Typography>
    </Stack>
  </Stack>
);

export default Comment;
