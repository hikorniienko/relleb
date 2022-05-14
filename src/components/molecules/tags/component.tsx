import React, { FC } from 'react';
import styled from './style.module.scss';

const Tags: FC<IA> = ({ className, children }) => (
  <div className={`${styled.tags} ${className}`}>{children}</div>
);

interface IA {
  className?: string;
  children: React.ReactNode;
}

Tags.defaultProps = {
  className: '',
};

export default Tags;
