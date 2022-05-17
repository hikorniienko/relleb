import React, { FC } from 'react';
import styled from './style.module.scss';

const BlockPrimary: FC<IBlock> = ({ style, children, className, beforeLine }) => (
  <div className={`${styled.block} ${beforeLine && styled.beforeLine} ${className}`} style={style}>{children}</div>
);

interface IBlock {
  children: React.ReactNode;
  className?: string;
  beforeLine?: boolean;
  style?: any;
}

BlockPrimary.defaultProps = {
    beforeLine: false,
    className: '',
    style: {},
};

export default BlockPrimary;
