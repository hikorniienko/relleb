import React, { FC, useEffect, useState } from 'react';
import styled from './style.module.scss';

const ScrollLine: FC = () => {
  const [width, setWidth] = useState<number>(-100);
  const scrollEvent = () => {
    const scrollHeight = (Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight,
    ) - document.documentElement.clientHeight);

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const math = Math.ceil((scrollTop * 100) / scrollHeight) - 100;
    setWidth(math > 0 ? 0 : math);
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollEvent);
    return () => {
      document.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  const translateX = `translateX(${width}%)`;
  const css = {
    transform: translateX,
  };

  return (
    <div className={styled.line}>
      <div className={styled.width} style={css} />
      {width}
    </div>
  );
};

export default ScrollLine;
