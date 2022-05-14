import React, { FC } from 'react';
import styled from './style.module.scss';

import Button from '../../atoms/buttons/component';
import UlCheck from '../../molecules/ul-check/component';
import UlCheckLi from '../../atoms/ul-check-li/component';

const ModalSwipeBlock: FC = () => (
  <div className={styled.block}>
    <div className={styled.blockTitle}>The most complete watch inspection</div>
    <p className={styled.blockDesc}>
      We check a watch for you before you buy it anywhere online
    </p>
    <hr />
    <div className={styled.blockListWrap}>
      <UlCheck className={styled.blockList}>
        <UlCheckLi>Authenticity & Condition check</UlCheckLi>
        <UlCheckLi>24/7 customer support</UlCheckLi>
        <UlCheckLi>Money back guarantee</UlCheckLi>
      </UlCheck>
    </div>
    <Button className={styled.blockBtn}>Get a free quote</Button>
  </div>
);

export default ModalSwipeBlock;
