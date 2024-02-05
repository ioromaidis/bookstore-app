import { Route, Routes } from 'react-router-dom';
import BookDetail from '../pages/bookDetail';
import CreateBook from '../pages/createBook';
import SearchBooks from '../pages/searchBooks';
import BookCategory from '../pages/bookCategory';

const BooksRoutes = () => (
  <Routes>
    <Route path=":cat/:bookId" element={<BookDetail />} />
    <Route path=":cat" element={<BookCategory />} />
    <Route path="create" element={<CreateBook />} />
    <Route path="" element={<SearchBooks />} />
  </Routes>
);

export default BooksRoutes;
