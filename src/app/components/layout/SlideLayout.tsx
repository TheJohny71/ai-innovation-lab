// src/app/components/layout/SlideLayout.tsx
'use client';
import React, { useState, useEffect } from 'react';

interface SlideLayoutProps {
  children: React.ReactNode[];
}

export default function SlideLayout({ children }: SlideLayoutProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSlideChange = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    if (index >= 0 && index < React.Children.count(children)) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        handleSlideChange(currentSlide + 1);
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        handleSlideChange(currentSlide - 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-teal-500/10 opacity-50 animate-gradient" />

      {/* Slides */}
      <div 
        className="relative flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div className="min-w-full h-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {React.Children.map(children, (_, index) => (
          <button
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 
              ${currentSlide === index ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={() => handleSlideChange(currentSlide - 1)}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 
                   ${currentSlide === 0 ? 'opacity-0' : 'opacity-50 hover:opacity-100'}
                   transition-opacity duration-200 text-white`}
        disabled={currentSlide === 0}
      >
        ←
      </button>
      <button
        onClick={() => handleSlideChange(currentSlide + 1)}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 
                   ${currentSlide === React.Children.count(children) - 1 ? 'opacity-0' : 'opacity-50 hover:opacity-100'}
                   transition-opacity duration-200 text-white`}
        disabled={currentSlide === React.Children.count(children) - 1}
      >
        →
      </button>
    </div>
  );
}