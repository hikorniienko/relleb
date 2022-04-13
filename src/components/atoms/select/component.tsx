import React, { FC } from 'react';
import styled from './style.module.scss';

const Select: FC<ISelect> = ({ children, className }) => (
  <div className={`${styled.select} ${className}`}>
    <select defaultValue="" name="select">
      {children}
    </select>
    <svg width="11" height="8" viewBox="0 0 11 8" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.58338 0L5.46924 4.28764L1.35509 0L0 1.41223L5.46924 7.11211L10.9385 1.41223L9.58338 0Z" />
    </svg>
  </div>
);

interface ISelect {
    children: React.ReactNode
    className?: string
}

Select.defaultProps = {
    className: '',
};

export default Select;
