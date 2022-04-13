import React, { FC } from 'react';
import styled from './style.module.scss';
import { Link } from 'react-router-dom';
import Collection from '../../molecules/collection/component';

const HomeCollections: FC = () => (
  <section className={styled.section}>
    <div className="container">
      <div className={styled.inner}>
        <div className={styled.titleWrap}>
          <h2 className={styled.title}>Explore our curated collection</h2>
          <ul>
            <li>
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17.5" cy="17.5" r="17.5" fill="#3760EF" />
                <path d="M17.5 11.2641L19.0686 14.9067L19.1861 15.1793L19.4817 15.2068L23.4307 15.573L20.4512 18.1905L20.2281 18.3864L20.2934 18.676L21.1653 22.5449L17.7553 20.5201L17.5 20.3685L17.2447 20.5201L13.8347 22.5449L14.7066 18.676L14.7719 18.3864L14.5488 18.1905L11.5693 15.573L15.5183 15.2068L15.8139 15.1793L15.9314 14.9067L17.5 11.2641Z" stroke="white" />
              </svg>
              <span>Authenticated by certified watchmaker before shipping</span>
            </li>
            <li>
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17.5" cy="17.5" r="17.5" fill="#3760EF" />
                <circle cx="17.5" cy="17.5" r="6.375" stroke="white" />
                <path d="M14.6666 17.5L16.7916 19.625L20.3333 15.375" stroke="white" />
              </svg>
              <span>One-Year warranty and easy returns</span>
            </li>
          </ul>
        </div>
        <div className={styled.collections}>
          <Collection png="img/collections/1.png" />
          <Collection png="img/collections/2.png" />
          <Collection png="img/collections/3.png" />
          <Link to="/" className={styled.collectionsMore}>
            <div>
              <div>
                <span>
                  Explore more
                </span>
                <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1.35509L4.28764 5.46924L0 9.58339L1.41223 10.9385L7.11211 5.46924L1.41223 -2.36077e-07L0 1.35509Z" fill="white" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HomeCollections;
