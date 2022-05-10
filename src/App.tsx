import React, { FC } from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/home-page';
import BlogArticlePage from './components/pages/blog-article-page';

const App: FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog/:id" element={<BlogArticlePage />} />
    </Routes>
  </HashRouter>
);

export default App;
