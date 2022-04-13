import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from './style.module.scss';
import logo from './logo.png';

const Logo: FC<ILogo> = ({ invert }) => (
  <Link to="/" className={`${styled.logo} ${invert && styled.logoInvert}`}>
    <img src={logo} title="Relleb" alt="Relleb logo" />
  </Link>
);

interface ILogo {
    invert?: boolean
}

Logo.defaultProps = {
    invert: false,
};

export default Logo;
