import React, { FC, useEffect, useState } from 'react';
import styled from './style.module.scss';
import Watchmaker from '../../molecules/watchmaker/component';

const HomeWatchmakers: FC = () => {
  const watchmakersEl = (
    <div className={styled.watchmakers}>
      <Watchmaker
        png="img/watchmakers/1.png"
        webp="img/watchmakers/1.webp"
        avif="img/watchmakers/1.avif"
        alt="img"
      />
      <Watchmaker
        png="img/watchmakers/2.png"
        webp="img/watchmakers/2.webp"
        avif="img/watchmakers/2.avif"
        alt="img"
      />
      <Watchmaker
        png="img/watchmakers/3.png"
        webp="img/watchmakers/3.webp"
        avif="img/watchmakers/3.avif"
        alt="img"
      />
      <Watchmaker
        png="img/watchmakers/4.png"
        webp="img/watchmakers/4.webp"
        avif="img/watchmakers/4.avif"
        alt="img"
      />
      <Watchmaker
        png="img/watchmakers/5.png"
        webp="img/watchmakers/5.webp"
        avif="img/watchmakers/5.avif"
        alt="img"
      />
      <Watchmaker
        png="img/watchmakers/6.png"
        webp="img/watchmakers/6.webp"
        avif="img/watchmakers/6.avif"
        alt="img"
      />
      <Watchmaker
        png="img/watchmakers/7.png"
        webp="img/watchmakers/7.webp"
        avif="img/watchmakers/7.avif"
        alt="img"
      />
      <Watchmaker
        png="img/watchmakers/5.png"
        webp="img/watchmakers/5.webp"
        avif="img/watchmakers/5.avif"
        alt="img"
      />
    </div>
  );

  return (
    <section className={styled.section}>
      <div className="container">
        <h2 className={styled.title}>We work with certfied watchmakers</h2>
      </div>
      <div className={styled.animationWrap}>
        <div className={styled.animation}>
          {watchmakersEl}
          {watchmakersEl}
          {watchmakersEl}
        </div>
      </div>
    </section>
  );
};

export default HomeWatchmakers;
