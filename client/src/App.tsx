import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '@/routes';
import { ErrorBoundary } from 'react-error-boundary';
import { FallbackError } from '@/misc/FallbackError';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/theme.ts';
import { QueryClient, QueryClientProvider } from 'react-query';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary fallback={<FallbackError />}>
          <Router>
            <AppRoutes />
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
