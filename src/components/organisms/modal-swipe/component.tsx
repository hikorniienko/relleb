import React, { FC, useEffect, useState } from 'react';
import styled from './style.module.scss';
import { useSwipeable } from 'react-swipeable';

const ModalSwipe: FC<IM> = ({ children, className }) => {
  const [active, setActive] = useState(true);
  const [open, setOpen] = useState(false);

  const handlers = useSwipeable({
    onSwipedUp: () => setOpen(true),
    onSwipedDown: () => setOpen(false),
  });

  return (
    <div {...handlers} className={`${styled.modal} ${active && styled.active} ${className}`}>
      <div
        className={styled.inner}
        onClick={() => {
          setOpen(true);
        }}
        onKeyDown={() => undefined}
        role="button"
        tabIndex={0}
      >
        <button
          type="button"
          className={styled.close}
          onClick={(e) => {
            e.stopPropagation();
            setActive(false);
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.02393 1L10.9989 10.975" stroke="#C4C4C4" />
            <path d="M10.9751 1L1.00015 10.975" stroke="#C4C4C4" />
          </svg>
        </button>

        <div className={styled.title}>
          <div>
            <span className={styled.titleBlue}>Swipe Up</span> to check if a
            watch is real
          </div>
        </div>
      </div>
      <div className={styled.contentWrap}>
        <div className={`${styled.content} ${open && styled.open}`}>
          {children}
          <button
            type="button"
            className={styled.contentClose}
            onClick={() => {
              setOpen(false);
            }}
          >
            <svg
              width="5"
              height="3"
              viewBox="0 0 5 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.38058 0L2.5 1.80859L0.619415 0L0 0.595703L2.5 3L5 0.595703L4.38058 0Z"
                fill="#C4C4C4"
              />
            </svg>
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  );
};

interface IM {
  className?: string;
  children: React.ReactNode;
}

ModalSwipe.defaultProps = {
  className: '',
};

export default ModalSwipe;
