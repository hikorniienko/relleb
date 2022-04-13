import React, { FC, useEffect } from 'react';
import styled from './style.module.scss';
import Ticker from 'react-ticker';
import Watchmaker from '../../molecules/watchmaker/component';

const HomeWatchmakers: FC = () => (
  <section className={styled.section}>
    <div className="container">
      <h2 className={styled.title}>We work with certfied watchmakers</h2>
    </div>
    <Ticker>
      {({ index }) => (
        <>
          <div className={styled.watchmakers}>
            <Watchmaker png="img/watchmakers/1.png" />
            <Watchmaker png="img/watchmakers/2.png" />
            <Watchmaker png="img/watchmakers/3.png" />
            <Watchmaker png="img/watchmakers/4.png" />
            <Watchmaker png="img/watchmakers/5.png" />
            <Watchmaker png="img/watchmakers/6.png" />
            <Watchmaker png="img/watchmakers/7.png" />
            <Watchmaker png="img/watchmakers/5.png" />
          </div>
        </>
      )}
    </Ticker>
  </section>
);

export default HomeWatchmakers;
