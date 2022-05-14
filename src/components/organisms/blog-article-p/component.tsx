import React, { FC, useEffect, useState, useRef, useCallback } from 'react';
import styled from './style.module.scss';

const BlogArticleP: FC<IP> = ({
  showP,
  className,
  children,
  dissableLaptop,
}) => {
  const [height, setHeight] = useState<number>(0);
  const [heightAll, setHeightAll] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);

  const contentRef = useCallback((node) => {
    if (node !== null) {
      setHeightAll(node.scrollHeight);

      const p = node.querySelectorAll('p');
      let h = 0;

      for (let i = 0; i < p.length; i += 1) {
        if (i <= showP - 1) {
          h += p[i].scrollHeight;
        }
      }

      setHeight(h);
    }
  }, []);

  return (
    <div className={`${className}`}>
      <div
        className={`${styled.pContent} ${
          dissableLaptop && styled.pContentDissable
        }`}
        ref={contentRef}
        style={{ height: active ? heightAll : height }}
      >
        {children}
      </div>
      <svg
        onClick={() => {
          setActive(!active);
        }}
        className={`${styled.pBtn} ${dissableLaptop && styled.pBtnDissable} ${
          active && styled.pBtnActive
        }`}
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.1328 13L15.5 16.0143L12.8672 13L12 13.9928L15.5 18L19 13.9928L18.1328 13Z"
          fill="black"
        />
        <circle
          cx="15"
          cy="15"
          r="14.5"
          transform="rotate(90 15 15)"
          stroke="black"
        />
      </svg>
    </div>
  );
};

interface IP {
  showP: number;
  className?: string;
  children: React.ReactNode;
  dissableLaptop?: boolean;
}

BlogArticleP.defaultProps = {
  className: '',
  dissableLaptop: true,
};

export default BlogArticleP;
