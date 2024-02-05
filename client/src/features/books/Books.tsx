import BooksRoutes from './routes';
import { Header } from '@/misc/Header';
import { Footer } from '@/misc/Footer';
import { FullHeightBox } from '@/misc/FullHeightBox';
import Breadcrumbs from '@/components/breadcrumbs';
import Container from '@/misc/Container';

const Books = () => {
  return (
    <FullHeightBox>
      <Header />
      <Container flexGrow={1}>
        <Breadcrumbs />
        <BooksRoutes />
      </Container>
      <Footer />
    </FullHeightBox>
  );
};

export default Books;
