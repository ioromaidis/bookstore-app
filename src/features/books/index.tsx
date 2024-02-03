import BooksRoutes from './routes';
import { Header } from '@/misc/Header';
import { Footer } from '@/misc/Footer';
import { FullHeightBox } from '@/misc/FullHeightBox';
import { Box } from '@mui/material';

const Books = () => {
  return (
    <FullHeightBox>
      <Header />
      <Box flexGrow={1}>
        <BooksRoutes />
      </Box>
      <Footer />
    </FullHeightBox>
  );
};

export default Books;
