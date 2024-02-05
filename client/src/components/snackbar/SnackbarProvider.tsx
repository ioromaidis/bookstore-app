import React, { useState } from 'react';
import { Snackbar } from './Snackbar';
import { SnackbarContext } from './SnackbarContext';

export interface SnackbarOptions {
  severity?: 'success' | 'info' | 'warning' | 'error';
  message?: string;
  autoHideDuration?: number;
}

interface Props {
  children: React.ReactNode;
}

export const SnackbarProvider: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<SnackbarOptions | null>(null);

  const openSnackbar = (
    message: string,
    options: Omit<SnackbarOptions, 'message'>
  ) => {
    setOpen(true);
    setOptions({ message, ...options });
  };

  const closeSnackbar = () => {
    setOpen(false);
    setOptions(null);
  };

  const value = {
    openSnackbar,
    closeSnackbar,
  };

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      {open && <Snackbar open={open} onClose={closeSnackbar} {...options} />}
    </SnackbarContext.Provider>
  );
};
