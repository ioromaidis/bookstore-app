import React, { useMemo } from 'react';

import { useGetCategories, BookOptionsWithoutQuery } from '../../../../../api';
import {
  FilterConfig,
  filtersConfig,
  InitialFilterConfig,
} from './filtersConfig';

export const useConfig = () => {
  const { data: categories = [] } = useGetCategories();

  const enhanceConfig = (
    config: InitialFilterConfig,
    setFilters: React.Dispatch<
      React.SetStateAction<BookOptionsWithoutQuery | undefined>
    >
  ): FilterConfig =>
    Object.entries(config).reduce(
      (acc, [key, entry]) => ({
        ...acc,
        [key]: {
          ...entry,
          onChange: (filters: BookOptionsWithoutQuery, ...args: any[]) => {
            setFilters({
              ...filters,
              [key]: {
                // @ts-ignore
                ...filters[key],
                // @ts-ignore
                value: entry.transformValue(...args),
              },
            });
          },
        },
      }),
      {}
    );

  const config = useMemo(() => filtersConfig(categories), [categories]);

  return { config, enhanceConfig };
};
