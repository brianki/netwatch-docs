"use client";

import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface ZoomableImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  quality?: number;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({
  src,
  alt,
  width = 1200,
  height = 800,
  className = '',
  quality = 100,
}) => {
  const fileExtension = src.split('.').pop()?.toLowerCase();

  const useUnoptimized = ['png', 'svg'].includes(fileExtension || '');

  return (
    <div className={`img-wrapper ${className}`}>
      <Zoom>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          unoptimized={useUnoptimized}
          priority
          className="zoomable-image"
        />
      </Zoom>
    </div>
  );
};

export default ZoomableImage;