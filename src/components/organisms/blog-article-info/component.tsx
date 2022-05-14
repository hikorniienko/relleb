import React, { FC } from 'react';
import styled from './style.module.scss';

import Button from '../../atoms/buttons/component';
import Trustpilot from '../trustpilot/component';

const BlogArticleInfo: FC<IP> = ({
  title,
  button,
  className,
}) => (
  <div className={`${styled.info} ${className}`}>
    <h2>{title}</h2>
    <div className={styled.block}>
      <Button className={styled.infoBtn}>{button}</Button>
      <Trustpilot invert />
    </div>
  </div>
);

interface IP {
  title: string;
  button: string;
  className?: string;
}

BlogArticleInfo.defaultProps = {
  className: '',
};

export default BlogArticleInfo;
