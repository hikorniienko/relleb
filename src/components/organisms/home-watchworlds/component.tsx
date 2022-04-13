import React, { FC, useEffect, useState } from 'react';
import styled from './style.module.scss';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss';

import Watchworld from '../../molecules/watchworld/component';
import useWindowSize from '../../../hooks/useWindowSize';

const HomeWatchworlds: FC = () => {
  const _slidesPerView = 2;
  const _spaceBetween = 25;
  const _sliderHDefault = 768 * _slidesPerView;

  const [sliderH, setSliderH] = useState(_sliderHDefault);
  const [width] = useWindowSize();

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
      <div className="container">
        <div className={styled.inner}>
          <h2 className={styled.title}>What a watch world thinks of us</h2>
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
                  direction: 'horizontal',
                  allowTouchMove: true,
                },
              }}
              navigation={{
                nextEl: '.watchworld-swiper-button-next',
                prevEl: '.watchworld-swiper-button-prev',
              }}
            >
              <SwiperSlide>
                <Watchworld
                  png="img/watchworld/1.png"
                  logoPng="img/watchworld/logo1.png"
                >
                  Relleb Authenticates Pre-Owned Luxury Watches For Your Peace Of Mind
                </Watchworld>
              </SwiperSlide>
              <SwiperSlide>
                <Watchworld
                  png="img/watchworld/2.png"
                  logoPng="img/watchworld/logo2.png"
                >
                  This is why Relleb makes buying watches from online marketplaces a lot safer
                </Watchworld>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styled.navigation}>
            <svg className="watchworld-swiper-button-prev" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 12.8672L13.9857 15.5L17 18.1328L16.0072 19L12 15.5L16.0072 12L17 12.8672Z" />
              <circle r="14.5" transform="matrix(-1 0 0 1 15 15)" />
            </svg>
            <svg className="watchworld-swiper-button-next" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 12.8672L16.0143 15.5L13 18.1328L13.9928 19L18 15.5L13.9928 12L13 12.8672Z" />
              <circle cx="15" cy="15" r="14.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWatchworlds;
