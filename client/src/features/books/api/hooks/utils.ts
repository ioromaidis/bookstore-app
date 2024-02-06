import { slugify } from '@/helpers/utils';

import { Book } from '../../types';
import {
  InFilter,
  RangeFilter,
  instanceOfInFilter,
  instanceOfMatchFilter,
  instanceOfRangeFilter,
  MatchFilter,
  BookOptionsWithoutQuery,
} from './types';

type ApplyFilterFn<T> = (
  filter: T,
  book: Book,
  property: keyof Book
) => boolean;

const applyQuery = (book: Book, query: string) =>
  book.title.toLowerCase().includes(query.toLowerCase());

export const filterBooks =
  (query: string) => (filters: BookOptionsWithoutQuery) => (book: Book) =>
    applyQuery(book, query) && applyFilters(book, filters);

const applyInFilter: ApplyFilterFn<InFilter> = (filter, book, property) => {
  if (!filter.value?.length) {
    return true;
  }

  return filter.value?.some((val) =>
    (book[property] as InFilter['value'])
      .map((item) => slugify(item))
      .includes(slugify(val))
  );
};

const applyRangeFilter: ApplyFilterFn<RangeFilter> = (
  filter,
  book,
  property
) => {
  const [min, max] = filter.value;
  return (book[property] as number) >= min && (book[property] as number) <= max;
};

const applyMatchFilter: ApplyFilterFn<MatchFilter> = (filter, book, property) =>
  String(book[property])
    .toLowerCase()
    .includes(String(filter.value).toLowerCase());

const applyFilters = (book: Book, rest: BookOptionsWithoutQuery) => {
  return Object.entries(rest).every(([key, filter]) => {
    if (instanceOfInFilter(filter)) {
      return applyInFilter(filter, book, key as keyof Book);
    }

    if (instanceOfRangeFilter(filter)) {
      return applyRangeFilter(filter, book, key as keyof Book);
    }

    if (instanceOfMatchFilter(filter)) {
      return applyMatchFilter(filter, book, key as keyof Book);
    }

    return false;
  });
};
