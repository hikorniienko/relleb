import React, { FC, useEffect, useState } from 'react';
import styled from './style.module.scss';

import Button from '../../atoms/buttons/component';
import Picture from '../../atoms/picture/component';

const ModalAlert: FC<IM> = ({ light, img, button, text, className }) => {
  const [active, setActive] = useState(true);
  return (
    <div
      className={`${styled.modal} ${active && styled.active} ${
        light && styled.modalLight
      } ${className}`}
    >
      <div className={styled.inner}>
        {img && <Picture png={img} className={styled.img} />}
        <div
          className={`${styled.content} ${img && styled.contentImg} ${
            light && styled.contentLight
          }`}
        >
          {text}
        </div>
        <Button className={`${styled.button} ${light && styled.buttonLight}`}>
          {button}
        </Button>
        <button
          type="button"
          onClick={() => {
            setActive(false);
          }}
          className={`${styled.close} ${light && styled.closeLight}`}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12.5" cy="12.5" r="12" />
            <path d="M9 9L16 16" />
            <path d="M16 9L9 16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

interface IM {
  className?: string;
  img?: string;
  button: string;
  text: string;
  light?: boolean;
}

ModalAlert.defaultProps = {
  className: '',
  img: '',
  light: false,
};

export default ModalAlert;
