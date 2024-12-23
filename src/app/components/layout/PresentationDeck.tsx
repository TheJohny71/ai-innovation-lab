'use client';

import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Shield, Zap, Lightbulb } from 'lucide-react';
import ParticleCanvas from '../ui/ParticleCanvas'; // Ensure this file exists in the specified path

const PresentationDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    { id: 1, title: 'Welcome', content: 'Welcome to the AI Innovation Lab' },
    { id: 2, title: 'Solutions', content: 'Explore our solutions.' },
    { id: 3, title: 'Impact', content: 'See the impact of our AI initiatives.' },
    { id: 4, title: 'Apps', content: 'Check out our innovative apps.' },
  ];

  const cards = useMemo(() => [
    { title: 'Enhanced Client Service', icon: Shield },
    { title: 'Accelerated Workflows', icon: Zap },
    { title: 'Practice Innovation', icon: Lightbulb },
  ], []);

  const handlePageChange = (newIndex: number) => {
    if (isTransitioning || newIndex === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setIsTransitioning(false);
    }, 150);
  };
  

  return (
    <div className="relative bg-slate-900 overflow-hidden min-h-screen">
      {/* Particle Background */}
      <ParticleCanvas />

      {/* Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 bg-purple-500/30 -top-48 -left-48" />
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 bg-emerald-500/30 -bottom-48 -right-48" />
      </div>

      {/* Main Content */}
      <div
        className={`transition-opacity duration-500 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <h1 className="text-5xl font-bold text-white text-center mt-12 mb-6">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl text-slate-300 text-center mb-16">
          {slides[currentSlide].content}
        </p>
        <div className="grid grid-cols-3 gap-8 px-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-slate-800 p-6 rounded-lg hover:border-emerald-500 transition"
            >
              <card.icon className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-white">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-4 w-full flex justify-center">
        <button
          onClick={() => handlePageChange(currentSlide - 1)}
          disabled={currentSlide === 0}
          className="p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
        >
          <ChevronLeft className={`w-5 h-5 ${
            currentSlide === 0 ? 'text-gray-600' : 'text-gray-400 hover:text-gray-300'
          }`} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-emerald-500' : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => handlePageChange(currentSlide + 1)}
          disabled={currentSlide === slides.length - 1}
          className="p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
        >
          <ChevronRight className={`w-5 h-5 ${
            currentSlide === slides.length - 1 ? 'text-gray-600' : 'text-gray-400 hover:text-gray-300'
          }`} />
        </button>
      </nav>
    </div>
  );
};

export default PresentationDeck;
