import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '@/routes';
import { ErrorBoundary } from 'react-error-boundary';
import { FallbackError } from '@/misc/FallbackError';

function App() {
  return (
    <>
      <ErrorBoundary fallback={<FallbackError />}>
        <Router>
          <AppRoutes />
        </Router>
      </ErrorBoundary>
    </>
  );
}

export default App;
