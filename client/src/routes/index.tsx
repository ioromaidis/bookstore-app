import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '@/pages/landing';
import Books from '@/features/books';
import NotFoundPage from '@/pages/notFoundPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/books/*" element={<Books />} />
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
