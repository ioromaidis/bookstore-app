import { useContext } from 'react';
import { SnackbarContext } from './SnackbarContext';

export const useSnackbarContext = () => useContext(SnackbarContext);
