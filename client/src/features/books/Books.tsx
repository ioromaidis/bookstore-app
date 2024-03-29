import BooksRoutes from './routes';
import { Header } from '@/misc/Header';
import { Footer } from '@/misc/Footer';
import { FullHeightBox } from '@/misc/FullHeightBox';
import Container from '@/misc/Container';
import { FallbackError } from '@/misc/FallbackError.tsx';
import { ErrorBoundary } from 'react-error-boundary';

const Books = () => {
  return (
    <FullHeightBox>
      <Header />
      <Container flexGrow={1}>
        <ErrorBoundary fallback={<FallbackError />}>
          <BooksRoutes />
        </ErrorBoundary>
      </Container>
      <Footer />
    </FullHeightBox>
  );
};

export default Books;
