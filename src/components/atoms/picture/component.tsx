import React, { FC } from 'react';
import styled from './style.module.scss';

const Picture: FC<IPicture> = ({
    jpg,
    png,
    webp,
    avif,
    alt,
    className,
}) => {
  const img = jpg !== '' ? <img src={jpg} alt={alt} /> : <img src={png} alt={alt} />;
  const sourseAvif = avif !== '' && <source srcSet={avif} type="image/avif" />;
  const sourseWebp = webp !== '' && <source srcSet={webp} type="image/webp" />;
  const soursePng = png !== '' && <source srcSet={png} type="image/png" />;
  const sourseJpg = jpg !== '' && <source srcSet={jpg} type="image/jpg" />;

  return (
    <picture className={`${className}`}>
      {sourseAvif}
      {sourseWebp}
      {soursePng}
      {sourseJpg}
      {img}
    </picture>
  );
};

interface IPicture {
    jpg?: string
    png?: string
    webp?: string
    avif?: string
    alt?: string
    className?: string
}

Picture.defaultProps = {
    jpg: '',
    png: '',
    webp: '',
    avif: '',
    alt: '',
    className: '',
};

export default Picture;
