import { useEffect, useState } from 'react';

import { BookOptionsWithoutQuery } from '../../../../../api';
import { useConfig } from './useConfig';

export const useFilters = () => {
  const [filters, setFilters] = useState<BookOptionsWithoutQuery>();
  const { config, enhanceConfig } = useConfig();

  // Populate filter initial values
  useEffect(() => {
    setFilters(
      Object.entries(config).reduce(
        (acc, [key, { value, type }]) => ({
          ...acc,
          [key]: { value, type },
        }),
        {}
      )
    );
  }, [config]);

  return { config: enhanceConfig(config, setFilters), filters };
};
