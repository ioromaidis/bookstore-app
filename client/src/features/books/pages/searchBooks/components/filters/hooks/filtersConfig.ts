import React from 'react';

import {
  BookFilter,
  BookFilterType,
  InFilter,
  MatchFilter,
  RangeFilter,
} from '../../../../../api/hooks/types';
import { CategoryFilter } from '../CategoryFilter';
import { RatingFilter } from '../RatingFilter';
import { MatchFilter as MatchFilterComponent } from '../MatchFilter';

export interface FilterComponentProps<T> {
  value: T;
  onChange: (...args: any[]) => void;

  // Additional props
  [key: string]: any;
}

export type FilterComponent<T> = React.FC<FilterComponentProps<T>>;

interface FilterInitial<T> extends BookFilter<T> {
  label: string;
  transformValue: (value: any) => T;
  Component: FilterComponent<T>;
  componentProps?: any;
}

export interface Filter<T> extends FilterInitial<T> {
  onChange: (args: any[]) => void;
}

export type InitialFilterConfig = Record<string, FilterInitial<any>>;
export type FilterConfig = Record<string, Filter<BookFilter<any>['value']>>;

export const filtersConfig = (categories: string[]): InitialFilterConfig => ({
  categories: {
    label: 'Category',
    type: BookFilterType.in,
    value: [],
    Component: CategoryFilter,
    componentProps: {
      initialValue: categories,
    },
    transformValue: (...args) => {
      const [category, categories] = args as unknown as [
        string,
        InFilter['value'],
      ];
      return categories.includes(category)
        ? categories.filter((cat) => cat !== category)
        : [...categories, category];
    },
  },
  rating: {
    label: 'Rating',
    type: BookFilterType.range,
    value: [0, 5],
    Component: RatingFilter,
    transformValue: (...args) => {
      const [_, range] = args as unknown as [
        React.EventHandler<any>,
        RangeFilter['value'],
      ];
      return range;
    },
  },
  author: {
    label: 'Author',
    type: BookFilterType.match,
    value: '',
    Component: MatchFilterComponent,
    transformValue: (...args) => {
      const [value] = args as unknown as [MatchFilter['value']];
      return value;
    },
  },
  publisher: {
    label: 'Publisher',
    type: BookFilterType.match,
    value: '',
    Component: MatchFilterComponent,
    transformValue: (...args) => {
      const [value] = args as unknown as [MatchFilter['value']];
      return value;
    },
  },
});
