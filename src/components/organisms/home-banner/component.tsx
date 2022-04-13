import React, { FC } from 'react';
import styled from './style.module.scss';
import Button from '../../atoms/buttons/component';

const HomeBanner: FC = () => (
  <section className={styled.section}>
    <div className="container">
      <div className={styled.inner}>
        <h2 className={styled.title}>Want to sell your watch fast at the best price?</h2>
        <div className={styled.info}>
          <span>
            We let know a large number of dealers
            about what you are selling to get you the best quotes
          </span>
          <Button className={styled.button}>Learn more</Button>
        </div>
      </div>
    </div>
  </section>
);

export default HomeBanner;
