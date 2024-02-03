import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '@/routes';
import { ErrorBoundary } from 'react-error-boundary';
import { FallbackError } from '@/misc/FallbackError';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/theme.ts';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary fallback={<FallbackError />}>
        <Router>
          <AppRoutes />
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
