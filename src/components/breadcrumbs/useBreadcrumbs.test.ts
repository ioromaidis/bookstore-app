import { expect, test } from 'vitest';
import { getSegmentUrl } from './useBreadcrumbs';

test('getSegmentUrl: parses correctly one segment', () => {
  const segments = ['home'];
  const expected = '/home';

  const actual = getSegmentUrl(segments, 0);

  expect(expected).toEqual(actual);
});

test('getSegmentUrl: parses correctly multiple segments', () => {
  const segments = ['home', 'books', 'book'];
  const expected = '/home/books/book';

  const actual = getSegmentUrl(segments, 2);

  expect(expected).toEqual(actual);
});
