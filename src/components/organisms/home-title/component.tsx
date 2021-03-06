import React, { FC } from 'react';
import styled from './style.module.scss';
import Input from '../../atoms/input/component';
import Button from '../../atoms/buttons/component';

const HomeTitle: FC = () => (
  <section className={styled.section}>
    <div className={`container ${styled.container}`}>
      <div className={styled.inner}>
        <div className={styled.title}>
          <h1>Authenticate luxury watches on <strong>Chrono24</strong> before buying</h1>
          <div className={styled.search}>
            <Input className={styled.searchInput} placeholder="Enter Chrono24 listing URL to get a quote">
              <svg className={styled.searchInputSvg} width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12.5" cy="13" r="12.5" />
                <path d="M11.2525 16.6849V16.5999C11.262 15.6976 11.3564 14.9795 11.536 14.4457C11.7155 13.9119 11.9706 13.4796 12.3013 13.1489C12.6319 12.8182 13.0288 12.5135 13.4917 12.2348C13.7705 12.0647 14.0208 11.864 14.2429 11.6325C14.4649 11.3963 14.6397 11.1246 14.7672 10.8176C14.8995 10.5105 14.9657 10.1704 14.9657 9.79716C14.9657 9.3342 14.857 8.93265 14.6397 8.59251C14.4224 8.25238 14.1319 7.99019 13.7681 7.80595C13.4043 7.62171 13.0004 7.52959 12.5564 7.52959C12.169 7.52959 11.7958 7.6099 11.4367 7.77052C11.0777 7.93114 10.7777 8.18388 10.5368 8.52874C10.2959 8.8736 10.1565 9.32475 10.1187 9.88219H8.33301C8.3708 9.0791 8.57866 8.39174 8.95659 7.82012C9.33924 7.2485 9.84236 6.81152 10.4659 6.50918C11.0943 6.20684 11.7911 6.05566 12.5564 6.05566C13.3878 6.05566 14.1106 6.22101 14.7247 6.5517C15.3436 6.88238 15.8207 7.3359 16.1561 7.91224C16.4963 8.48858 16.6663 9.14523 16.6663 9.88219C16.6663 10.4018 16.586 10.8719 16.4254 11.2923C16.2695 11.7128 16.0428 12.0884 15.7451 12.419C15.4522 12.7497 15.0979 13.0426 14.6822 13.2977C14.2665 13.5576 13.9334 13.8316 13.6831 14.1197C13.4327 14.4032 13.2508 14.7409 13.1374 15.133C13.0241 15.5251 12.9626 16.0141 12.9532 16.5999V16.6849H11.2525ZM12.1595 20.8799C11.81 20.8799 11.51 20.7547 11.2596 20.5044C11.0092 20.254 10.884 19.954 10.884 19.6044C10.884 19.2548 11.0092 18.9549 11.2596 18.7045C11.51 18.4541 11.81 18.3289 12.1595 18.3289C12.5091 18.3289 12.8091 18.4541 13.0595 18.7045C13.3099 18.9549 13.435 19.2548 13.435 19.6044C13.435 19.8359 13.376 20.0485 13.2579 20.2422C13.1445 20.4359 12.991 20.5918 12.7973 20.7099C12.6083 20.8232 12.3957 20.8799 12.1595 20.8799Z" />
              </svg>
            </Input>
            <Button className={styled.searchButton}>Get a quote</Button>
          </div>
        </div>
        <div className={styled.info}>
          <ul>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7.5" />
                <path d="M6.66668 10L9.16668 12.5L13.3333 7.5" />
              </svg>
              <span>
                Authenticity & condition&nbsp;<a href="#">report</a>&nbsp;
                <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.83333 1V3.16667L6.83333 3.20294C6.83327 3.48565 6.83322 3.7604 6.86369 3.98701C6.89803 4.24248 6.98171 4.534 7.22386 4.77614C7.466 5.01829 7.75752 5.10197 8.01299 5.13631C8.23959 5.16678 8.51434 5.16673 8.79705 5.16667L8.83333 5.16667H11V8C11 9.41421 11 10.1213 10.5607 10.5607C10.1213 11 9.41421 11 8 11H6C4.58579 11 3.87868 11 3.43934 10.5607C3 10.1213 3 9.41421 3 8V4C3 2.58579 3 1.87868 3.43934 1.43934C3.87868 1 4.58579 1 6 1H6.83333ZM8.16667 1.01049V3.16667C8.16667 3.49978 8.16808 3.68255 8.18513 3.80935L8.1858 3.8142L8.19065 3.81487C8.31745 3.83192 8.50022 3.83333 8.83333 3.83333H10.9895C10.9797 3.71406 10.9607 3.62039 10.9239 3.53153C10.8478 3.34776 10.7032 3.20324 10.4142 2.91421L9.08579 1.58579C8.79676 1.29676 8.65224 1.15224 8.46847 1.07612C8.37961 1.03931 8.28594 1.0203 8.16667 1.01049Z" />
                  <path d="M6.99999 6.66669V9.33335M6.99999 9.33335L5.66666 8.00002M6.99999 9.33335L8.33332 8.00002" stroke="#0E0D10" strokeWidth="0.666667" />
                </svg>
              </span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7.5" />
                <path d="M6.66668 10L9.16668 12.5L13.3333 7.5" />
              </svg>
              <span>24/7 customer support</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7.5" />
                <path d="M6.66668 10L9.16668 12.5L13.3333 7.5" />
              </svg>
              <span>Money back guarantee</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default HomeTitle;
