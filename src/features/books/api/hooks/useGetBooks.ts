import { GetBookOptions, getBooks } from '../queries/getBooks';

export const useGetBooks = (options: GetBookOptions) => getBooks(options);
