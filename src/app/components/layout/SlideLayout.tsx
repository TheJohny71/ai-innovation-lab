'use client';
import React from 'react';

export interface SlideLayoutProps {
  children: React.ReactNode;
  onSectionChange?: (index: number) => void;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ children, onSectionChange }) => {
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const sections = target.children;
    const viewportHeight = window.innerHeight;
    const scrollTop = target.scrollTop;
    const currentSectionIndex = Math.floor((scrollTop + viewportHeight / 2) / viewportHeight);

    if (onSectionChange) {
      onSectionChange(currentSectionIndex);
    }
  };

  return (
    <div 
      className="h-screen overflow-y-auto snap-y snap-mandatory" 
      onScroll={handleScroll}
    >
      {React.Children.map(children, (child) => (
        <div className="snap-start">
          {child}
        </div>
      ))}
    </div>
  );
};

export default SlideLayout;
