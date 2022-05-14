import React, { FC } from 'react';
import styled from './style.module.scss';

const Tag: FC<IT> = ({ children }) => (
  <div className={styled.tag}>{children}</div>
);

interface IT {
  children: React.ReactNode;
}

export default Tag;
