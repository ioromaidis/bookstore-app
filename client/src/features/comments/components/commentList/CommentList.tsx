import React from 'react';
import { Stack } from '@mui/material';
import { CreateComment, useGetComments } from '@/features/comments';
import DataWrapper from '@/components/dataWrapper';

import Comment from '../comment';
import { Entity } from '../../types';

interface Props {
  entityId: string;
  entityType: Entity;
}

const CommentList: React.FC<Props> = ({ entityId, entityType }) => {
  const { data, isLoading } = useGetComments({ entityId, entityType });

  return (
    <Stack spacing={3}>
      <DataWrapper
        isLoading={isLoading}
        dataCheck={!!data?.length}
        noResultsText="Be the first to comment!"
      >
        <Stack component="ul" spacing={3}>
          {data?.map((comment) => (
            <Stack component="li" key={comment.id}>
              <Comment comment={comment} />
            </Stack>
          ))}
        </Stack>
      </DataWrapper>

      <CreateComment entityId={entityId} entityType={entityType} />
    </Stack>
  );
};

export default CommentList;
