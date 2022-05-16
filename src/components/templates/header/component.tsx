import React, { FC } from 'react';
import styled from './style.module.scss';
import Nav from '../../organisms/nav/component';
import ModalAlert from '../../organisms/modal-alert/component';

const Header: FC = () => (
  <header className={`${styled.header}`}>
    <ModalAlert
      img="img/modal-alert/1.png"
      button="Lets go"
      text="Watch authentication calculator"
    />

    <ModalAlert
      img="img/modal-alert/2.png"
      button="Lets go"
      text="Watch authentication calculator"
      light
    />

    <ModalAlert button="Lets go" text="Watch authentication calculator" />

    <ModalAlert
      img="img/modal-alert/3.png"
      button="Lets go"
      text="Watch authentication calculator"
      light
    />
    <div className="container">
      <Nav />
    </div>
  </header>
);

export default Header;
