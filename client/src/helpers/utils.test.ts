import { test, expect } from 'vitest';
import { slugify } from './utils';

test('slugify: converts text to slug', () => {
  const input = 'My Test with spaces';
  const expected = 'my-test-with-spaces';

  const actual = slugify(input);

  expect(actual).toEqual(expected);
});

test('slugify: handles odd spaces', () => {
  const input = '    My Test with spaces  ';
  const expected = 'my-test-with-spaces';

  const actual = slugify(input);

  expect(actual).toEqual(expected);
});
