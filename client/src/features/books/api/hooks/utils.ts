import { Book, GetBookOptions } from '@/features/books';
import { slugify } from '@/helpers/utils.ts';

export const filterBooks =
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
        book.categories.map((cat) => slugify(cat)).includes(slugify(val))
      );
    }

    if (key === 'rating') {
      const [min, max] = value as GetBookOptions['rating'];
      return book.rating >= min && book.rating <= max;
    }

    return false;
  });
};
