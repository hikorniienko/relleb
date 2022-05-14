import React, { FC } from 'react';
import styled from './style.module.scss';

const UlCheckLi: FC<ILi> = ({ children }) => (
  <li>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="7.5" fill="#3760EF" />
      <path d="M6.66634 10L9.16634 12.5L13.333 7.5" stroke="#F8F9FF" />
    </svg>

    <span>{children}</span>
  </li>
);

interface ILi {
  children: React.ReactNode;
}

export default UlCheckLi;
