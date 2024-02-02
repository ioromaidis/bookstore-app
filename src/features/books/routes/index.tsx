import { Route, Routes } from 'react-router-dom';
import BookDetail from '../pages/BookDetail';
import CreateBook from '../pages/CreateBook';
import SearchBooks from '../pages/SearchBooks';

const BooksRoutes = () => (
  <Routes>
    <Route path="" element={<SearchBooks />} />
    <Route path=":bookId" element={<BookDetail />} />
    <Route path="create" element={<CreateBook />} />
  </Routes>
);

export default BooksRoutes;
