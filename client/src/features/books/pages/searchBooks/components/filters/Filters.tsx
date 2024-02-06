import React, { useEffect } from 'react';
import { Box, Divider, IconButton, Popover, Typography } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

import { GetBookOptions } from '../../../../api/hooks/types';
import { useFilters } from './hooks/useFilters';
import { useFiltersToggle } from './hooks/useFiltersToggle';

interface Props {
  onFiltersChange: (newFilters: Partial<GetBookOptions>) => void;
}

const Filters: React.FC<Props> = ({ onFiltersChange }) => {
  const { config, filters } = useFilters();
  const { anchor, handleFiltersToggle, filtersOpen } = useFiltersToggle();

  useEffect(() => {
    if (!filters) {
      return;
    }

    onFiltersChange(filters);
  }, [filters]);

  return (
    filters && (
      <>
        <IconButton ref={anchor} onClick={handleFiltersToggle(true)}>
          <TuneIcon />
        </IconButton>
        <Popover
          open={filtersOpen}
          onClose={handleFiltersToggle(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          anchorEl={anchor.current}
        >
          <Box p={2}>
            <Typography variant="subtitle2" textAlign="center">
              Filters
            </Typography>
          </Box>
          <Divider />

          <Box py={3}>
            {Object.entries(config).map(
              ([key, { label, Component, onChange, componentProps }]) => (
                <Box py={1} px={3} key={key}>
                  <Typography variant="subtitle2">{label}</Typography>
                  <Component
                    // @ts-ignore
                    value={filters[key].value}
                    // @ts-ignore
                    onChange={(...args) => onChange(filters, ...args)}
                    {...componentProps}
                  />
                </Box>
              )
            )}
          </Box>
        </Popover>
      </>
    )
  );
};

export default Filters;
