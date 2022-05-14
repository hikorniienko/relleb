import React, { FC } from 'react';
import styled from './style.module.scss';

import Picture from '../../atoms/picture/component';

const Avatar: FC<IA> = ({ png, className }) => (
  <a href="#" className={`${styled.avatar} ${className}`}>
    <Picture png={png} className={styled.avatarPicture} />
  </a>
);

interface IA {
  className?: string;
  png: string;
}

Avatar.defaultProps = {
  className: '',
};

export default Avatar;
