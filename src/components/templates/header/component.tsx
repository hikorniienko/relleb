import React, { FC } from 'react';
import styled from './style.module.scss';
import Nav from '../../organisms/nav/component';

const Header: FC = () => (
  <header className={`${styled.header}`}>
    <div className="container">
      <Nav />
    </div>
  </header>
);

export default Header;
