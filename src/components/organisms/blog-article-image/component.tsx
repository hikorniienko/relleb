import React, { FC } from 'react';
import styled from './style.module.scss';
import Picture from '../../atoms/picture/component';

const BlogArticleImage: FC<IImage> = ({
  jpg,
  png,
  webp,
  avif,
  alt,
  className,
  figcaption,
}) => (
  <figure className={`${styled.figure} ${className}`}>
    <div>
      <Picture jpg={jpg} png={png} webp={webp} avif={avif} alt={alt} />
    </div>
    <figcaption>{figcaption}</figcaption>
  </figure>
);

interface IImage {
  jpg?: string;
  png?: string;
  webp?: string;
  avif?: string;
  alt?: string;
  className?: string;
  figcaption?: string;
}

BlogArticleImage.defaultProps = {
  jpg: '',
  png: '',
  webp: '',
  avif: '',
  alt: '',
  className: '',
  figcaption: '',
};

export default BlogArticleImage;
