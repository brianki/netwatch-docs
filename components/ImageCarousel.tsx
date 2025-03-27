'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Define your images here - update these paths to your actual images
  const images = [
    "/images/comprehensive.png",
    "/images/real.png",
   
  ];
  
  const imageDescriptions = [
    "Comprehensive IT Monitoring Solution",
    "Real-time Network Visibility",
   
  ];
  
  useEffect(() => {
    // Auto-rotate images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <div style={{ 
      position: 'relative',
      width: '100%', 
      height: '80vh', // 80% of viewport height instead of 100%
      margin: '2rem 0', // Add space at top and bottom
      overflow: 'hidden',
      borderRadius: '8px', // Restore border radius
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)', // Slightly enhanced shadow
      backgroundColor: '#f0f0f0' // Fallback color
    }}>
      {/* Image carousel */}
      {images.map((src, index) => (
        <div
          key={src}
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%',
            opacity: index === currentImage ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: index === currentImage ? 1 : 0
          }}
        >
          <img
            src={src}
            alt={`Netwatch Feature ${index + 1}`}
            style={{ 
              objectFit: 'cover', 
              width: '100%', 
              height: '100%' 
            }}
          />
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)' 
          }} />
        </div>
      ))}
      
      {/* Caption overlay */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        zIndex: 10
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '1.5rem',
          padding: '0.5rem 1.5rem',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '0.25rem'
        }}>
          Netwatch.ai
        </h1>
        <p style={{ 
          fontSize: '1.4rem',
          marginBottom: '2.5rem',
          padding: '0.5rem 1.5rem',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '0.25rem',
          maxWidth: '32rem',
          textAlign: 'center'
        }}>
          {imageDescriptions[currentImage]}
        </p>
        <Link 
          href="/docs" 
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            fontWeight: 'bold',
            padding: '0.75rem 2rem',
            fontSize: '1.2rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
        >
          Explore Documentation
        </Link>
      </div>
      
      {/* Navigation dots */}
      <div style={{
        position: 'absolute',
        bottom: '1.5rem',
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: '0.75rem',
        zIndex: 10
      }}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            style={{
              width: '0.75rem',
              height: '0.75rem',
              borderRadius: '50%',
              backgroundColor: index === currentImage ? 'white' : 'rgba(255, 255, 255, 0.5)',
              border: 'none',
              cursor: 'pointer'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;