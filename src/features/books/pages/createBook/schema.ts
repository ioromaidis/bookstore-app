import { createSchema } from '@/components/form';
import {
  DESCRIPTION_UPPERCASE_ERROR_MESSAGE,
  INVALID_AUTHORS_ERROR_MESSAGE,
  INVALID_CATEGORIES_ERROR_MESSAGE,
  INVALID_CHARACTERS_ERROR_MESSAGE,
  INVALID_NUMBER,
  INVALID_YEAR_ERROR_MESSAGE,
  REQUIRED_ERROR_MESSAGE,
} from './constants';

export const getSchema = () =>
  createSchema((yup) =>
    yup.object({
      title: yup
        .string()
        .required(REQUIRED_ERROR_MESSAGE)
        .min(10)
        .max(120)
        .matches(/^[a-zA-Z0-9@"#&*! ]+$/, INVALID_CHARACTERS_ERROR_MESSAGE),
      description: yup
        .string()
        .required(REQUIRED_ERROR_MESSAGE)
        .max(512)
        .test(
          'description',
          DESCRIPTION_UPPERCASE_ERROR_MESSAGE,
          (value) => value[0] === value[0].toUpperCase()
        ),
      categories: yup
        .string()
        .required(REQUIRED_ERROR_MESSAGE)
        .multiple(4, INVALID_CATEGORIES_ERROR_MESSAGE),
      author: yup
        .string()
        .required(REQUIRED_ERROR_MESSAGE)
        .multiple(3, INVALID_AUTHORS_ERROR_MESSAGE),
      publisher: yup.string().required(REQUIRED_ERROR_MESSAGE).min(5).max(60),
      year: yup
        .number()
        .required(REQUIRED_ERROR_MESSAGE)
        .typeError(INVALID_NUMBER)
        .min(1900, INVALID_YEAR_ERROR_MESSAGE)
        .max(new Date().getFullYear(), INVALID_YEAR_ERROR_MESSAGE),
      pages: yup.number().typeError(INVALID_NUMBER).max(9999).required(),
      isbn10: yup
        .string()
        .required(REQUIRED_ERROR_MESSAGE)
        .matches(/^(\d{10})$/),
      isbn13: yup
        .string()
        .required(REQUIRED_ERROR_MESSAGE)
        .matches(/^(\d{13})$/),
      rating: yup
        .number()
        .required(REQUIRED_ERROR_MESSAGE)
        .typeError(INVALID_NUMBER)
        .integer()
        .min(0)
        .max(5),
    })
  );
