import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from './style.module.scss';
import Picture from '../../atoms/picture/component';

const Knowledge: FC<IKnowledge> = ({
  to, jpg, png, webp, avif, alt, children, logo,
}) => {
  const logoP = logo !== '' ? <Picture png={`${logo}`} alt={`${alt}`} className={styled.logo} /> : '';
  return (
    <div className={styled.knowledge}>
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
          {logoP}
        </div>
      </Link>
      <div className={styled.content}>
        <div className={styled.info}>
          <span>13 May 2021</span>
          <span>11 minute read</span>
        </div>
        <Link to={`${to}`} className={styled.h3}>
          <h3>{children}</h3>
        </Link>
      </div>
    </div>
  );
};

interface IKnowledge {
    to?: string
    children: React.ReactNode
    jpg?: string
    png?: string
    webp?: string
    avif?: string
    alt?: string
    logo?: string
}

Knowledge.defaultProps = {
    to: '/',
    jpg: '',
    png: '',
    webp: '',
    avif: '',
    alt: '',
    logo: '',
};

export default Knowledge;
