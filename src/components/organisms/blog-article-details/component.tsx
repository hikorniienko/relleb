import React, { FC } from 'react';
import styled from './style.module.scss';

const BlogArticleDetails: FC<IP> = ({ title, open, className, children }) => (
  <details className={`${styled.details} ${className}`} open={open}>
    <summary>{title}</summary>
    <div>
      {children}
    </div>
  </details>
);

interface IP {
  className?: string;
  children: React.ReactNode;
  title: string;
  open?: boolean;
}

BlogArticleDetails.defaultProps = {
  className: '',
  open: false,
};

export default BlogArticleDetails;
