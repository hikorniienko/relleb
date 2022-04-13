import React, { FC, useEffect, useState } from 'react';
import styled from './style.module.scss';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss';

import Knowledge from '../../molecules/knowledge/component';
import useWindowSize from '../../../hooks/useWindowSize';

const HomeKnowledges: FC = () => {
  const _slidesPerView = 3;
  const _spaceBetween = 25;
  const _sliderHDefault = 768 * _slidesPerView;

  const [sliderH, setSliderH] = useState<any>(_sliderHDefault);
  const [width, height] = useWindowSize();

  useEffect(() => {
    sliderUpdate();
  }, [width]);

  function sliderUpdate() {
    const h = document.body?.querySelector(`.${styled.slider} .swiper-slide div`)?.clientHeight;
    if (h && h > 0) {
      const calcH = (h + _spaceBetween) * _slidesPerView;
      setSliderH(calcH);
    }
  }

  return (
    <section className={styled.section}>
      <h2 className={styled.title}>Protect yourself with knowledge</h2>
      <div className="container">
        <div className={styled.slider}>
          <Swiper
            onSwiper={() => { sliderUpdate(); }}
            style={{ height: window.innerWidth >= 768 ? 'auto' : sliderH }}
            modules={[Navigation]}
            direction="vertical"
            allowTouchMove={false}
            spaceBetween={_spaceBetween}
            autoHeight
            loop
            slidesPerView={_slidesPerView}
            breakpoints={{
              768: {
                slidesPerView: 2,
                direction: 'horizontal',
                allowTouchMove: true,
              },
              1024: {
                slidesPerView: _slidesPerView,
                direction: 'horizontal',
                allowTouchMove: true,
              },
            }}
            navigation={{
              nextEl: '.knowledge-swiper-button-next',
              prevEl: '.knowledge-swiper-button-prev',
            }}
          >
            <SwiperSlide>
              <Knowledge
                png="img/knowledge/1.png"
              >
                Chrono24 review: is buying on Chrono24 safe?
              </Knowledge>
            </SwiperSlide>
            <SwiperSlide>
              <Knowledge
                jpg="img/knowledge/2.jpg"
              >
                The Definitive Guide To Luxury Watch Authentication
              </Knowledge>
            </SwiperSlide>
            <SwiperSlide>
              <Knowledge
                jpg="img/knowledge/3.jpg"
              >
                How to buy a new Rolex at list price
              </Knowledge>
            </SwiperSlide>
            <SwiperSlide>
              <Knowledge
                jpg="img/knowledge/2.jpg"
              >
                The Definitive Guide To Luxury Watch Authentication
              </Knowledge>
            </SwiperSlide>
          </Swiper>
          <div className={styled.navigation}>
            <svg className="knowledge-swiper-button-prev" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 12.8672L13.9857 15.5L17 18.1328L16.0072 19L12 15.5L16.0072 12L17 12.8672Z" />
              <circle r="14.5" transform="matrix(-1 0 0 1 15 15)" />
            </svg>
            <svg className="knowledge-swiper-button-next" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 12.8672L16.0143 15.5L13 18.1328L13.9928 19L18 15.5L13.9928 12L13 12.8672Z" />
              <circle cx="15" cy="15" r="14.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeKnowledges;
