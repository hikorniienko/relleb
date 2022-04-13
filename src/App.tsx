import React, { FC } from 'react';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/home-page';

const App: FC = () => (
  <Routes>
    <Switch>
      <Route path="/" component={HomePage} exact />
    </Switch>
  </Routes>
  );

export default App;
