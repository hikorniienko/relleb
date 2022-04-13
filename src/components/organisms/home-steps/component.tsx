import React, { FC } from 'react';
import styled from './style.module.scss';
import Step from '../../molecules/step/component';

const HomeSteps: FC = () => (
  <section className={styled.section}>
    <div className="container">
      <h2 className={styled.title}>How it works</h2>
      <div className={styled.inner}>
        <Step
          to="/"
          count="1"
          png="img/steps/step1.png"
          webp="img/steps/step1.webp"
          avif="img/steps/step1.avif"
          alt="step 1"
        >
          <span>
            Tell us which watch from Chrono24 you would like to buy and we will order it for you
          </span>
        </Step>
        <Step
          to="/"
          count="2"
          jpg="img/steps/step2.jpg"
          webp="img/steps/step2.webp"
          avif="img/steps/step2.avif"
          alt="step 2"
        >
          The watch gets verified throught a multi-point inspection at our Authentication Center.
          <br /><a href="#">What is being checked?</a>
        </Step>
        <Step
          to="/"
          count="3"
          png="img/steps/step3.png"
          webp="img/steps/step3.webp"
          avif="img/steps/step3.avif"
          alt="step 3"
        >
          If the watch is authentic you buy it from us with no comission and we ship it to you
        </Step>
      </div>
    </div>
  </section>
);

export default HomeSteps;
