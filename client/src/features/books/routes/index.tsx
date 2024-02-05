import { Route, Routes } from 'react-router-dom';
import BookDetail from '../pages/bookDetail';
import CreateBook from '../pages/createBook';
import SearchBooks from '../pages/searchBooks';

const BooksRoutes = () => (
  <Routes>
    <Route path="" element={<SearchBooks />} />
    <Route path=":bookId" element={<BookDetail />} />
    <Route path="create" element={<CreateBook />} />
  </Routes>
);

export default BooksRoutes;
