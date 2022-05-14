import React, { FC } from 'react';
import styled from './style.module.scss';

import Rating from '../../molecules/rating/component';

const Trustpilot: FC<ITranspilot> = ({ invert, className }) => (
  <div className={`${styled.trustpilot} ${invert && styled.trustpilotInvert} ${className}`}>
    <div />
    <Rating />
  </div>
);

interface ITranspilot {
  className?: string;
  invert?: boolean;
}

Trustpilot.defaultProps = {
  className: '',
  invert: false,
};

export default Trustpilot;
