import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Roboto Condensed',
    htmlFontSize: 16,
    h1: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Montserrat',
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
