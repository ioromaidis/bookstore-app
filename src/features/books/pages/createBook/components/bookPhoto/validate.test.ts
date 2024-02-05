import { expect, test } from 'vitest';
import { validate } from './validate';

test('validate: validates correctly file extensions', () => {
  const input = new File([''], 'test', { type: 'image/jpeg' });

  const actual = validate(input);

  expect(actual).toBeTruthy();
});

test('validate: throws error on invalid extension', () => {
  const input = new File([''], 'test', { type: 'image/webp' });

  expect(() => validate(input)).toThrowError('Invalid file extension');
});
