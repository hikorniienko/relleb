import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from './style.module.scss';
import Picture from '../../atoms/picture/component';

const Step: FC<IStep> = ({
  to, count, jpg, png, webp, avif, alt, children,
}) => {
  const countEl = count !== '' ? (<div className={styled.count}><span>{count}</span></div>) : '';

  return (
    <div className={styled.step}>
      <Link
        to={`${to}`}
        className={styled.pictureWrap}
      >
        <div className={styled.pictureInner}>
          <Picture
            jpg={`${jpg}`}
            png={`${png}`}
            webp={`${webp}`}
            avif={`${avif}`}
            alt={`${alt}`}
            className={styled.picture}
          />
          {countEl}
        </div>
      </Link>
      <p>
        {children}
      </p>
    </div>
  );
};

interface IStep {
    to?: string
    children: React.ReactNode
    count?: string
    jpg?: string
    png?: string
    webp?: string
    avif?: string
    alt?: string
}

Step.defaultProps = {
    to: '/',
    count: '',
    jpg: '',
    png: '',
    webp: '',
    avif: '',
    alt: '',
};

export default Step;
