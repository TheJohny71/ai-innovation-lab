'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Zap, Globe, Clock, Layers, Flag, ArrowRight, Scale, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { debounce } from 'lodash';
import Link from 'next/link';

interface MousePosition {
  x: number;
  y: number;
}

interface StarFieldProps {
  mousePosition: MousePosition;
}

const StarField: React.FC<StarFieldProps> = React.memo(({ mousePosition }) => {
  const stars = useMemo(() => Array(60).fill(null).map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 3,
    isAccent: Math.random() > 0.7,
    scale: 0.5 + Math.random() * 0.5
  })), []);

  return (
    <div className="absolute inset-0 opacity-30">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute animate-pulse transition-transform duration-500 ease-cubic-bezier"
          style={{
            left: star.left,
            top: star.top,
            transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 20}px, 0) scale(${star.scale})`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <Star 
            className={`w-2 h-2 ${star.isAccent ? 'text-teal-400' : 'text-blue-400'}`}
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
});

// Add display name to fix ESLint error
StarField.displayName = 'StarField';

const MetricCard = ({ icon: Icon, title, value, subtitle, mainStats, additionalStats, gradient }: MetricCardProps) => (
  <div className={`rounded-xl p-8 border-2 backdrop-blur-sm bg-gray-900/40 group hover:bg-gray-900/60 transition-colors ${gradient.border}`}>
    <div className="flex items-center space-x-3 mb-6">
      <Icon className={`w-6 h-6 ${gradient.text}`} strokeWidth={1.5} />
      <h3 className={`font-semibold ${gradient.text}`}>{title}</h3>
    </div>
    <div>
      <div className="text-4xl font-bold text-white mb-2">{value}</div>
      <div className="text-sm text-gray-400">{subtitle}</div>
    </div>
    <div className="mt-6 space-y-3">
      <div className="text-sm text-gray-400">{mainStats.trend}</div>
      {Object.entries(additionalStats).map(([key, stat]) => (
        <div key={key} className="flex justify-between text-sm">
          <span className="text-gray-400">{key}</span>
          <span className="text-gray-300">
            {stat.value} {stat.change && <span className="text-green-400">{stat.change}</span>}
          </span>
        </div>
      ))}
    </div>
  </div>
);
const ProgressBar = ({ value, max, gradient }: ProgressBarProps) => (
  <div className="h-2 bg-gray-700/30 rounded-full overflow-hidden">
    <div
      className={`h-full ${gradient}`}
      style={{ width: `${(value / max) * 100}%` }}
    />
  </div>
);

interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
  mainStats: {
    trend: string;
  };
  additionalStats: {
    [key: string]: {
      value: string;
      change?: string;
    };
  };
  gradient: {
    border: string;
    bg: string;
    text: string;
  };
}

interface ProgressBarProps {
  value: number;
  max: number;
  gradient: string;
}

interface Metric {
  name: string;
  count: number;
}

interface DashboardMetrics {
  cards: MetricCardProps[];
  implementationTypes: Metric[];
  deploymentStatus: {
    active: number;
    development: number;
    planning: number;
  };
}

const DisruptionPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const debouncedSetMousePosition = useMemo(
    () =>
      debounce((x: number, y: number) => {
        setMousePosition({ x, y });
      }, 16),
    []
  );

  const handleMouseMove = useCallback((e: MouseEvent) => {
    debouncedSetMousePosition(
      e.clientX / window.innerWidth,
      e.clientY / window.innerHeight
    );
  }, [debouncedSetMousePosition]);

  useEffect(() => {
    return () => {
      debouncedSetMousePosition.cancel();
    };
  }, [debouncedSetMousePosition]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const metrics: DashboardMetrics = {
    // ... (keep your existing metrics data exactly the same)
  };

  const totalImplementations = metrics.implementationTypes.reduce((sum, type) => sum + type.count, 0);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,rgba(0,0,0,0)_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.01)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <StarField mousePosition={mousePosition} />
      
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-8 py-12">
        <div className={`mb-12 max-w-5xl transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 inline-block text-transparent bg-clip-text">
              Law Firm AI Disruption Index
            </span>
            <span className="block text-xl text-gray-400 mt-6">
              Tracking AI innovation in global law firms
            </span>
          </h1>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-opacity duration-1000 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {metrics.cards.map((card, index) => (
            <MetricCard key={index} {...card} />
          ))}
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 transition-opacity duration-1000 delay-400 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* Implementation Types and Deployment Status sections remain the same */}
        </div>

        <div className={`flex flex-col items-center gap-12 transition-opacity duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-center gap-20">
            <Link
              href="/"
              className="px-5 py-2 text-gray-500 hover:text-gray-300 rounded-lg transition-colors"
            >
              Welcome
            </Link>
            <Link
              href="/solutions"
              className="px-5 py-2 text-gray-500 hover:text-gray-300 rounded-lg transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/disruption"
              className="px-5 py-2 text-white bg-purple-900/60 rounded-lg"
            >
              Disruption
            </Link>
            <Link
              href="/mindset"
              className="px-5 py-2 text-gray-500 hover:text-gray-300 rounded-lg transition-colors"
            >
              Mindset
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisruptionPage;
