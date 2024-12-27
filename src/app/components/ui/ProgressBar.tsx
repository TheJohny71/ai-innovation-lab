// src/app/components/ui/ProgressBar.tsx
'use client';
import React from 'react';

interface ProgressBarProps {
  currentSlide: number;
  totalSlides: number;
  sections: string[];
}

export default function ProgressBar({ currentSlide, totalSlides, sections }: ProgressBarProps) {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Progress bar */}
      <div className="h-1 bg-gray-800">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-teal-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Section names */}
      <div className="flex justify-between px-4 py-2 bg-gray-900/80 backdrop-blur-sm">
        {sections.map((section, index) => (
          <div 
            key={index}
            className={`text-sm transition-colors duration-300 ${
              currentSlide === index 
                ? 'text-white' 
                : 'text-gray-500'
            }`}
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  );
}