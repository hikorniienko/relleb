import React, { FC } from 'react';
import styled from './style.module.scss';
import Picture from '../../atoms/picture/component';

const Watchmaker: FC<IWatchmaker> = ({
  jpg, png, webp, avif, alt,
}) => (
  <div className={styled.item}>
    <div className={styled.itemInner}>
      <Picture
        jpg={`${jpg}`}
        png={`${png}`}
        webp={`${webp}`}
        avif={`${avif}`}
        alt={`${alt}`}
        className={styled.picture}
      />
    </div>
  </div>
);

interface IWatchmaker {
    jpg?: string
    png?: string
    webp?: string
    avif?: string
    alt?: string
}

Watchmaker.defaultProps = {
    jpg: '',
    png: '',
    webp: '',
    avif: '',
    alt: '',
};

export default Watchmaker;
