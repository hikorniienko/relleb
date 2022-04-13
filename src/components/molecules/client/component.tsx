import React, { FC } from 'react';
import styled from './style.module.scss';
import Picture from '../../atoms/picture/component';
import Rating from '../../molecules/rating/component';

const Client: FC<IClient> = ({
  jpg, png, webp, avif, alt, children, name,
}) => (
  <div className={styled.client}>
    <header className={styled.header}>
      <div className={styled.avatar}>
        <Picture jpg={`${jpg}`} png={`${png}`} webp={`${webp}`} avif={`${avif}`} alt={`${alt}`} />
      </div>
      <div className={styled.name}>
        {name}
        <span>Сlient</span>
      </div>
      <div className={styled.rating}>
        <Rating className={styled.ratingStyle} />
        <div className={styled.verif}>
          <svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.1405 6.11431L6.28336 7.8286L9.28336 4.40002" />
            <circle cx="6.71204" cy="6.11426" r="5.5" />
          </svg>
          <span>Verified order</span>
        </div>
      </div>
    </header>
    <div className={styled.content}>
      <p>{ children }</p>
    </div>
  </div>
);

interface IClient {
    jpg?: string
    png?: string
    webp?: string
    avif?: string
    alt?: string
    children: React.ReactNode
    name?: string
}

Client.defaultProps = {
    jpg: '',
    png: '',
    webp: '',
    avif: '',
    alt: '',
    name: '',
};

export default Client;
