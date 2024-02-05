import { Book } from '../../types';
import { createBook } from '../queries';
import { useMutation } from 'react-query';

export const useCreateBook = () => {
  return useMutation({ mutationFn: (newBook: Book) => createBook(newBook) });
};
