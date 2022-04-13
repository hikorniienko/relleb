import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from './style.module.scss';
import Picture from '../../atoms/picture/component';

const Collection: FC<ICollection> = ({
  to, jpg, png, webp, avif, alt,
}) => (
  <div className={styled.collection}>
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
      </div>
    </Link>
  </div>
);

interface ICollection {
    to?: string
    jpg?: string
    png?: string
    webp?: string
    avif?: string
    alt?: string
}

Collection.defaultProps = {
    to: '/',
    jpg: '',
    png: '',
    webp: '',
    avif: '',
    alt: '',
};

export default Collection;
