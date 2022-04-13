import React, { FC } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import styled from './style.module.scss';
import Client from '../../molecules/client/component';
import Rating from '../../molecules/rating/component';

const HomeClients: FC = () => (
  <section className={styled.section}>
    <div className="container">
      <h2 className={styled.title}>What our clients say</h2>
      <div className={styled.slider}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={35}
          loop
          pagination
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1379: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            nextEl: '.client-swiper-button-next',
            prevEl: '.client-swiper-button-prev',
          }}
        >
          <SwiperSlide>
            <Client
              name="Frenkie de Jong"
              png="img/avatars/1.png"
              alt="Frenkie de Jong"
            >
              «Easy to use and do transaction platform.
              Safe especially with trusted dealers.
              Watch came as described, and Genuine...»
            </Client>
          </SwiperSlide>
          <SwiperSlide>
            <Client
              name="Erick Gracia"
              png="img/avatars/2.png"
              alt="Erick Gracia"
            >
              «A wide variety of choices and clear sales
              information are provided to customers.
              I find it reliable to buy watches through this platform.»
            </Client>
          </SwiperSlide>
          <SwiperSlide>
            <Client
              name="Lana Yensson"
              png="img/avatars/3.png"
              alt="Lana Yensson"
            >
              «Until now I ordered 3 watches, all in perfect condition and arrived on time.»
            </Client>
          </SwiperSlide>
          <SwiperSlide>
            <Client
              name="Erick Gracia"
              png="img/avatars/2.png"
              alt="Erick Gracia"
            >
              «A wide variety of choices and clear sales
              information are provided to customers.
              I find it reliable to buy watches through this platform.»
            </Client>
          </SwiperSlide>
        </Swiper>
        <div className={styled.navigation}>
          <svg className="client-swiper-button-prev" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 12.8672L13.9857 15.5L17 18.1328L16.0072 19L12 15.5L16.0072 12L17 12.8672Z" />
            <circle r="14.5" transform="matrix(-1 0 0 1 15 15)" />
          </svg>
          <svg className="client-swiper-button-next" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 12.8672L16.0143 15.5L13 18.1328L13.9928 19L18 15.5L13.9928 12L13 12.8672Z" />
            <circle cx="15" cy="15" r="14.5" />
          </svg>
        </div>
      </div>
      <div className={styled.trustpilot}>
        <div>
          <div className={styled.trustpilotImage} />
          <Rating className={styled.trustpilotRating} />
        </div>
        <div>
          4.7 rated <u>excellent</u>
        </div>
      </div>
    </div>
  </section>
);

export default HomeClients;
