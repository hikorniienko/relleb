import React, { FC } from 'react';
import styled from './style.module.scss';
import HomeTitle from '../../organisms/home-title/component';
import HomeSteps from '../../organisms/home-steps/component';
import HomeWatchmakers from '../../organisms/home-watchmakers/component';
import HomeClients from '../../organisms/home-clients/component';
import HomeWatchworlds from '../../organisms/home-watchworlds/component';
import HomeBanner from '../../organisms/home-banner/component';
import HomeCollections from '../../organisms/home-collections/component';
import HomeKnowledges from '../../organisms/home-knowledges/component';

const Home: FC = () => (
  <main className={styled.main}>
    <HomeTitle />
    <HomeSteps />
    <HomeWatchmakers />
    <HomeClients />
    <HomeWatchworlds />
    <HomeBanner />
    <HomeCollections />
    <HomeKnowledges />
  </main>
);

export default Home;
