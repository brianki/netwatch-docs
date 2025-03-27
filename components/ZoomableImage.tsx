'use client';

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
  // Extract the file extension from the src
  const fileExtension = src.split('.').pop()?.toLowerCase();
  
  // Determine if we should use unoptimized option
  // PNG and SVG should be unoptimized to maintain quality
  const useUnoptimized = ['png', 'svg'].includes(fileExtension || '');

  return (
    <Zoom 
      zoomMargin={40}
      wrapStyle={{ 
        width: '100%', 
        maxWidth: '100%',
        display: 'block'
      }}
      zoomImg={{
        src: src,
        alt: alt,
        style: { maxWidth: '1800px', maxHeight: '90vh' }
      }}
    >
      <div className={`relative img-zoom-container ${className}`} style={{ width: '100%', height: 'auto' }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ 
            objectFit: 'contain',
            width: '100%', 
            height: 'auto',
          }}
          className="rounded-md"
          quality={quality}
          unoptimized={useUnoptimized}
          priority={true}
        />
      </div>
    </Zoom>
  );
};

export default ZoomableImage;