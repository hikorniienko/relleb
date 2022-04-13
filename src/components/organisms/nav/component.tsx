import React, { FC } from 'react';
import styled from './style.module.scss';
import Logo from '../../atoms/logo/component';
import Menu from '../../molecules/menu/component';
import MenuUser from '../../molecules/menu-user/component';

const Nav: FC = () => (
  <nav className={styled.nav}>
    <div className={styled.menu}>
      <Menu />
    </div>
    <div className={styled.logo}>
      <Logo />
    </div>
    <div>
      <MenuUser />
    </div>
  </nav>
);

export default Nav;
