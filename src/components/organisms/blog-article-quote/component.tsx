import React, { FC } from 'react';
import styled from './style.module.scss';

const BlogArticleQuote: FC<IP> = ({ light, className, children }) => (
  <blockquote className={`${styled.quote} ${light && styled.quoteLight} ${className}`}>
    <svg
      width="37"
      height="27"
      viewBox="0 0 37 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.3274 26.9153H36.6475L25.9933 0H18.7795L25.3274 26.9153ZM7.34839 26.9153H18.6685L8.01427 0H0.800488L7.34839 26.9153Z"
      />
    </svg>
    <div>{children}</div>
    <svg
      width="37"
      height="27"
      viewBox="0 0 37 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.1584 0.000668351H36.4785L25.8243 26.916H18.6105L25.1584 0.000668351ZM7.17944 0.000668351H18.4995L7.84533 26.916H0.631542L7.17944 0.000668351Z"
      />
    </svg>
  </blockquote>
);

interface IP {
  className?: string;
  children: React.ReactNode;
  light?: boolean;
}

BlogArticleQuote.defaultProps = {
  className: '',
  light: false,
};

export default BlogArticleQuote;
