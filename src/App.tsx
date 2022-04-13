import React, { FC } from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/home-page';

const App: FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </HashRouter>
);

export default App;
