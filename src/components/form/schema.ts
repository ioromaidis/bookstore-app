import * as yup from 'yup';
import { AnyObject, Lazy, ObjectSchema } from 'yup';

export type YupSchema =
  | ObjectSchema<any, AnyObject, any, ''>
  | Lazy<any, AnyObject, any>;

yup.addMethod(
  yup.string,
  'multiple',
  function (allowedNumber: number, errorMessage: string) {
    return this.test('test-multiple', errorMessage, function (value) {
      const { path, createError } = this;

      return (
        (value as string)?.split(',').length <= allowedNumber ||
        createError({ path, message: errorMessage })
      );
    });
  }
);

yup.setLocale({
  string: {
    min: 'Field must have at least ${min} characters',
    max: 'Field should have maximum ${max} characters.',
    matches: 'Invalid format.',
  },
  number: {
    integer: 'Field must be an integer.',
    min: 'Field must be more than or equal to ${min}.',
    max: 'Field must be less than or equal to ${max}.',
  },
});

export const createSchema = <T extends typeof yup>(
  schemaFn: (yup: T) => YupSchema
) => schemaFn(yup as T);
