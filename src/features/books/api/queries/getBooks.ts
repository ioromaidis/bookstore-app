import { BOOKS } from '@/features/books/api/constants.ts';
import { Book, Category } from '../..';

export interface GetBookOptions {
  query?: string;
  category?: Category[];
}

const filterBooks =
  (query: string) => (filters: Omit<GetBookOptions, 'query'>) => (book: Book) =>
    book.title.toLowerCase().includes(query.toLowerCase()) &&
    applyFilters(book, filters);

const applyFilters = (book: Book, rest: Partial<GetBookOptions>) => {
  return Object.entries(rest).every(([key, value]) => {
    if (key === 'category') {
      if (!value.length) {
        return true;
      }

      return (value as GetBookOptions['category'])?.some((val) =>
        book.categories.includes(val)
      );
    }

    return false;
  });
};

export const getBooks = (options: GetBookOptions) => {
  if (Object.keys(options).length) {
    const { query = '', ...filters } = options;

    return BOOKS.filter(filterBooks(query)(filters));
  }

  return BOOKS;
};