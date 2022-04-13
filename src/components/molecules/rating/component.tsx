import React, { FC } from 'react';
import styled from './style.module.scss';

const Rating: FC<IRating> = ({
  className,
}) => (
  <div className={`${styled.rating} ${className}`}>
    <svg width="14" height="15" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.712036" y="0.919006" width="13.2766" height="13.2766" />
      <path d="M7.52663 2.48114L9.07032 5.60901L12.5221 6.11058L10.0244 8.54529L10.614 11.9831L7.52663 10.36L4.43924 11.9831L5.02888 8.54529L2.53113 6.11058L5.98293 5.60901L7.52663 2.48114Z" />
    </svg>

    <svg width="14" height="15" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.712036" y="0.919006" width="13.2766" height="13.2766" />
      <path d="M7.52663 2.48114L9.07032 5.60901L12.5221 6.11058L10.0244 8.54529L10.614 11.9831L7.52663 10.36L4.43924 11.9831L5.02888 8.54529L2.53113 6.11058L5.98293 5.60901L7.52663 2.48114Z" />
    </svg>

    <svg width="14" height="15" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.712036" y="0.919006" width="13.2766" height="13.2766" />
      <path d="M7.52663 2.48114L9.07032 5.60901L12.5221 6.11058L10.0244 8.54529L10.614 11.9831L7.52663 10.36L4.43924 11.9831L5.02888 8.54529L2.53113 6.11058L5.98293 5.60901L7.52663 2.48114Z" />
    </svg>

    <svg width="14" height="15" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.712036" y="0.919006" width="13.2766" height="13.2766" />
      <path d="M7.52663 2.48114L9.07032 5.60901L12.5221 6.11058L10.0244 8.54529L10.614 11.9831L7.52663 10.36L4.43924 11.9831L5.02888 8.54529L2.53113 6.11058L5.98293 5.60901L7.52663 2.48114Z" />
    </svg>

    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.659424" y="0.411133" width="13.2633" height="13.2633" />
      <path d="M7.46703 1.97156L9.00918 5.09628L12.4575 5.59736L9.96227 8.02962L10.5513 11.464L7.46703 9.84252L4.38274 11.464L4.97179 8.02962L2.47655 5.59736L5.92489 5.09628L7.46703 1.97156Z" />
      <path d="M7.29102 13.6744V0.411133L13.9226 0.411143V13.6744H7.29102Z" fillOpacity="0.75" />
    </svg>
  </div>
);

interface IRating {
    className?: string
}

Rating.defaultProps = {
    className: '',
};

export default Rating;
