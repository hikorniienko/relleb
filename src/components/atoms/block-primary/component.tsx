import React, { FC } from 'react';
import styled from './style.module.scss';

const BlockPrimary: FC<IBlock> = ({ children, className, beforeLine }) => (
  <div className={`${styled.block} ${beforeLine && styled.beforeLine} ${className}`}>{children}</div>
);

interface IBlock {
  children: React.ReactNode;
  className?: string;
  beforeLine?: boolean;
}

BlockPrimary.defaultProps = {
    beforeLine: false,
    className: '',
};

export default BlockPrimary;
