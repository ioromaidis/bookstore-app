import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Roboto Condensed',
    htmlFontSize: 16,
    h1: {
      fontFamily: 'Montserrat',
      fontSize: 52,
      lineHeight: 1.8,
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Montserrat',
      fontSize: 32,
      lineHeight: 1.8,
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Montserrat',
      fontSize: 28,
      lineHeight: 1.8,
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Montserrat',
      fontSize: 24,
      lineHeight: 1.8,
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Montserrat',
      fontSize: 18,
      lineHeight: 1.8,
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Montserrat',
      fontSize: 18,
      lineHeight: 1.8,
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: '#2D3250',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F6B17A',
    },
  },
});
