import React, { FC } from 'react';
import styled from './style.module.scss';

import UlCheck from '../../molecules/ul-check/component';
import UlCheckLi from '../../atoms/ul-check-li/component';
import Button from '../../atoms/buttons/component';
import Trustpilot from '../trustpilot/component';

const BlogArticleBanner: FC<IP> = ({
  position,
  title,
  list,
  button,
  img,
  className,
}) => {
  const bg = `url('${img}')`;

  return (
    <div className={`${styled.banner} ${position && styled.bannerPosition} ${className}`}>
      <div className={styled.content}>
        <h3 className={styled.title}>{title}</h3>
        <div className={styled.list}>
          <UlCheck>
            {list?.map((item) => (
              <UlCheckLi key={item}>{item}</UlCheckLi>
            ))}
          </UlCheck>
        </div>
        <div className={styled.buttonWrap}>
          <Button className={styled.button}>{button}</Button>
          <Trustpilot />
        </div>
      </div>
      <div className={`${styled.bg} ${position && styled.bgPosition}`} style={{ backgroundImage: bg }} />
    </div>
  );
};

interface IP {
  position?: boolean;
  title: string;
  list?: Array<string>;
  button: string;
  img?: string;
  className?: string;
}

BlogArticleBanner.defaultProps = {
  className: '',
  position: false,
  img: '',
  list: [],
};

export default BlogArticleBanner;
