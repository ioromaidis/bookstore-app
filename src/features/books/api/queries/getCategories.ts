import { CATEGORIES } from '..';
import { Category } from '../../types';

export const getCategories = (): Category[] => Object.values(CATEGORIES);
