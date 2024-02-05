import React from 'react';
import { Box, Breadcrumbs as MuiBreadcrumbs, Link } from '@mui/material';
import useBreadcrumbs from '@/components/breadcrumbs/useBreadcrumbs.ts';

export type BreadcrumbMapping = Record<string, string>;

interface Props {
  mapping?: BreadcrumbMapping;
}

const Breadcrumbs: React.FC<Props> = ({ mapping }) => {
  const breadcrumbs = useBreadcrumbs(mapping);

  return (
    <Box py={3}>
      <MuiBreadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        {breadcrumbs.map(({ label, url, isCurrent }, index) => (
          <Link
            key={index}
            color="inherit"
            underline="none"
            {...(!isCurrent && {
              underline: 'hover',
              href: url,
            })}
          >
            {label}
          </Link>
        ))}
      </MuiBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;
