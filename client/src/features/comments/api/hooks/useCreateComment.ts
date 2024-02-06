import { useMutation, useQueryClient } from 'react-query';

import { Comment } from '../../types';
import { createComment } from '../queries';

export const useCreateComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newComment: Partial<Comment>) => createComment(newComment),
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
    },
  });
};
