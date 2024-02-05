import React from 'react';
import { Alert, Snackbar as MuiSnackbar, SnackbarProps } from '@mui/material';
import { SnackbarOptions } from './SnackbarProvider';

type Props = SnackbarProps & SnackbarOptions;

export const Snackbar: React.FC<Props> = ({ message, severity, ...props }) => (
  <MuiSnackbar
    autoHideDuration={6000}
    anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
    {...props}
  >
    <Alert severity={severity} variant="filled">
      {message}
    </Alert>
  </MuiSnackbar>
);
