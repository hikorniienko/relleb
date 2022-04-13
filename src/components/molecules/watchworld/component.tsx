import React, { FC } from 'react';
import styled from './style.module.scss';
import { Link } from 'react-router-dom';
import Picture from '../../atoms/picture/component';

const Watchworld: FC<IWatchworld> = ({
  to, jpg, png, webp, avif, alt, children, logoPng,
}) => (
  <div className={styled.item}>
    <Link to={`${to}`}>
      <header className={styled.pictureWrap}>
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
      </header>
      <div className={styled.content}>
        <div className={styled.info}>
          <div className={styled.date}>4 January 2021</div>
          <Picture className={styled.logo} jpg={`${jpg}`} png={`${logoPng}`} />
        </div>
        <h3><span>{ children }</span></h3>
      </div>
    </Link>
  </div>
);

interface IWatchworld {
    to?: string
    jpg?: string
    png?: string
    webp?: string
    avif?: string
    alt?: string
    children: React.ReactNode
    logoPng?: string
}

Watchworld.defaultProps = {
    to: '/',
    jpg: '',
    png: '',
    webp: '',
    avif: '',
    alt: '',
    logoPng: '',
};

export default Watchworld;
