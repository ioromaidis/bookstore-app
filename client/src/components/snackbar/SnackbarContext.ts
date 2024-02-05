import { createContext } from 'react';
import { SnackbarOptions } from './SnackbarProvider';

interface SnackbarContextValue {
  openSnackbar: (
    message: string,
    options: Omit<SnackbarOptions, 'message'>
  ) => void;
  closeSnackbar: () => void;
}

export const SnackbarContext = createContext<SnackbarContextValue>({
  openSnackbar: () => {},
  closeSnackbar: () => {},
});
