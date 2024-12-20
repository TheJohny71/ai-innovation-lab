// src/app/components/layout/CallToAction.tsx
'use client';
import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Search } from 'lucide-react';

export default function CallToAction() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div 
      ref={elementRef}
      className={`w-full max-w-4xl mx-auto bg-gradient-to-br from-purple-900/20 to-teal-900/20 
                  rounded-2xl p-8 transition-all duration-1000 transform
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-4">
          Ready to Transform Your Legal Practice?
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Join leading law firms already benefiting from our AI-powered solutions. 
          Schedule a demo to see how we can enhance your practice.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg 
                         transition-colors duration-200 flex items-center gap-2">
          <Search className="w-5 h-5" />
          Schedule Demo
        </button>
        <button className="px-6 py-3 border border-purple-500/50 hover:bg-purple-500/10 
                         text-white rounded-lg transition-colors duration-200">
          Learn More
        </button>
      </div>
    </div>
  );
}