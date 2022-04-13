import React, { FC } from 'react';
import styled from './style.module.scss';
import Input from '../../atoms/input/component';
import Button from '../../atoms/buttons/component';
import Logo from '../../atoms/logo/component';
import Social from '../../atoms/social/component';
import Select from '../../atoms/select/component';

const Footer: FC = () => (
  <footer className={styled.footer}>
    <div className="container">
      <header className={styled.header}>
        <h5>
          Stay up to date
          <span>Sign up for the latest Relleb news and exclusive offers.</span>
        </h5>
        <div className={styled.subscribe}>
          <Input className={styled.subscribeInput} placeholder="Email address..." />
          <Button className={styled.subscribeButton}>Subscribe</Button>
        </div>
      </header>
      <div className={styled.main}>
        <div className={styled.logo}>
          <Logo invert />
          <span>
            We founded Relleb to provide protection over authenticity and condition.
          </span>
          <Social />
        </div>
        <div className={styled.address}>
          <div>
            <span>Relleb B.V.</span>
            Van Nelleweg 1<br />
            3044 BC<br />
            Rotterdam, the Netherlands<br />
          </div>
          <div>
            <span>Policies & Conditions</span>
            <a href="#">Privacy policy</a><br />
            <a href="#">Terms and conditions</a><br />
          </div>
        </div>
        <div className={styled.nav}>
          <ul>
            <li>
              <a href="#">Authentication Service</a>
            </li>
            <li>
              <a href="#">Fake vs Real Guide</a>
            </li>
            <li>
              <a href="#">Shop Watches</a>
            </li>
            <li>
              <a href="#">Sell Fast</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className={styled.nav}>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Other</a>
            </li>
          </ul>
        </div>
        <div className={styled.trustpilot}>
          <a href="#">
            <div className={styled.trustpilotCount}>
              <span>Check out our</span> 33 review
            </div>
            <div className={styled.trustpilotImg} />
          </a>
        </div>
      </div>
      <div className={styled.copy}>
        <div>
          Copyright © Relleb B.V. all rights reserved.
        </div>
        <div>
          <Select className={styled.copySelect}>
            <option value="USD">USD</option>
            <option value="UAH">UAH</option>
          </Select>
          <Select className={styled.copySelect}>
            <option value="EN">EN</option>
            <option value="UA">UA</option>
          </Select>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
