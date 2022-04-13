import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from './style.module.scss';

const MenuUser: FC = () => (
  <ul className={styled.menuUser}>
    <li>
      <Link to="/">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4395 17.0393C16.0597 15.9761 15.2227 15.0367 14.0584 14.3666C12.8941 13.6966 11.4676 13.3334 10 13.3334C8.53245 13.3334 7.1059 13.6966 5.9416 14.3666C4.77731 15.0367 3.94034 15.9761 3.56051 17.0393" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="9.99999" cy="6.66671" rx="3.33333" ry="3.33333" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </Link>
    </li>
    <li>
      <Link to="/">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.7089 11.5902L9.50275 17.0329C9.6479 17.1693 9.72047 17.2374 9.79939 17.272C9.92727 17.328 10.0727 17.328 10.2006 17.272C10.2795 17.2374 10.3521 17.1693 10.4973 17.0329L16.2911 11.5902C17.9213 10.0589 18.1192 7.53887 16.7482 5.77176L16.4904 5.43949C14.8502 3.32552 11.558 3.68005 10.4056 6.09475C10.2428 6.43584 9.75725 6.43584 9.59445 6.09475C8.44198 3.68005 5.14978 3.32553 3.50963 5.43949L3.25183 5.77177C1.8808 7.53888 2.07876 10.0589 3.7089 11.5902Z" stroke="black" strokeWidth="2" />
        </svg>
        <span>2</span>
      </Link>
    </li>
  </ul>
);

export default MenuUser;
