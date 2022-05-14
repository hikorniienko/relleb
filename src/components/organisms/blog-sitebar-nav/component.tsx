import React, { FC } from 'react';
import styled from './style.module.scss';

const BlogSitebarNav: FC<IP> = ({ className, children }) => (
  <ul className={`${styled.ul} ${className}`}>{children}</ul>
);

interface IP {
  className?: string;
  children: React.ReactNode;
}

BlogSitebarNav.defaultProps = {
  className: '',
};

export default BlogSitebarNav;
