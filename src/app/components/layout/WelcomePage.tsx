'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Star, Sparkles, Workflow, Users } from 'lucide-react';
import { debounce } from 'lodash';

interface StarFieldProps {
  mousePosition: { x: number; y: number };
}

const StarField: React.FC<StarFieldProps> = React.memo(({ mousePosition }) => {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; opacity: number }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 50 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      }));
      setStars(newStars);
    };

    generateStars();
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map((star, index) => {
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - star.x, 2) + Math.pow(mousePosition.y - star.y, 2)
        );
        const glow = Math.max(0, 1 - distance / 200);

        return (
          <div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
              opacity: star.opacity + glow,
              transform: `scale(${1 + glow})`,
              transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
            }}
          />
        );
      })}
    </div>
  );
});

StarField.displayName = 'StarField';

const FeatureIcon: React.FC<{
  Icon: React.ElementType;
  title: string;
  gradient: { text: string; border: string };
}> = ({ Icon, title, gradient }) => (
  <div className={`relative group p-4 rounded-xl ${gradient.border} transition-all duration-300`}>
    <div className="absolute inset-0.5 bg-slate-900 rounded-[11px] z-0" />
    <div className="relative z-10">
      <Icon className={`w-6 h-6 ${gradient.text} mb-2`} />
      <h3 className={`text-sm font-medium ${gradient.text}`}>{title}</h3>
    </div>
  </div>
);

const WelcomePage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useMemo(
    () =>
      debounce((e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }, 10),
    []
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const features = [
    {
      Icon: Sparkles,
      title: 'AI Innovation',
      gradient: {
        text: 'text-purple-400',
        border: 'border border-purple-500/20 hover:border-purple-500/40',
      },
    },
    {
      Icon: Workflow,
      title: 'Automation',
      gradient: {
        text: 'text-cyan-400',
        border: 'border border-cyan-500/20 hover:border-cyan-500/40',
      },
    },
    {
      Icon: Users,
      title: 'Collaboration',
      gradient: {
        text: 'text-emerald-400',
        border: 'border border-emerald-500/20 hover:border-emerald-500/40',
      },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <StarField mousePosition={mousePosition} />
      
      <div className="text-center space-y-8 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
            AI Innovation Lab
          </span>
        </h1>
        
        <p className="text-slate-400 max-w-lg mx-auto text-lg">
          Explore the future of AI technology with our cutting-edge solutions and innovative approaches
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="w-[160px]">
              <FeatureIcon {...feature} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;