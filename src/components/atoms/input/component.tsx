import React, { FC } from 'react';
import styled from './style.module.scss';

const Input: FC<IInput> = ({
    type,
    placeholder,
    className,
    children,
}) => (
  <div className={`${styled.wrap} ${className}`}>
    <input type={type} className={`${styled.input}`} placeholder={placeholder} />
    <div className={styled.icon}>
      {children}
    </div>
  </div>
);

interface IInput {
    type?: string,
    placeholder?: string,
    className?: string,
    children?: React.ReactNode
}

Input.defaultProps = {
    type: 'text',
    placeholder: 'Input text',
    className: '',
    children: React.createElement(
      'span',
      { className: '' },
      '',
    ),
};

export default Input;
