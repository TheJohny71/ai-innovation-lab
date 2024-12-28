'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Star, Sparkles, Workflow, Users, LucideIcon } from 'lucide-react';
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

interface Gradient {
  text: string;
  border: string;
  marginTop?: string;
}

interface FeatureIconProps {
  Icon: LucideIcon;
  title: string;
  gradient: Gradient;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ Icon, title, gradient }) => {
  const [firstWord, ...restWords] = title.split(' ');
  return (
    <div className="flex flex-col items-center justify-center gap-8 group h-64">
      <div className={`rounded-2xl p-10 border border-opacity-20 bg-gray-900/40 group-hover:bg-gray-900/60 transition-colors ${gradient.border} shadow-lg flex items-center justify-center`}>
        <div className="flex items-center justify-center w-24 h-24">
          <Icon className={`w-full h-full ${gradient.text}`} strokeWidth={1.5} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h3 className={`text-3xl font-medium tracking-wide text-center ${gradient.text}`}>{firstWord}</h3>
        <h3 className={`text-3xl font-medium tracking-wide text-center ${gradient.text}`}>{restWords.join(' ')}</h3>
      </div>
    </div>
  );
};

interface NavigationItem {
  text: string;
  href: string;
  current: boolean;
}

interface NavigationProps {
  items: NavigationItem[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => (
  <nav className="flex justify-center gap-8 fixed bottom-8 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-gray-900/30 p-2 rounded-2xl border border-gray-700/20 shadow-xl" role="navigation">
    {items.map(({ text, href, current }) => (
      <Link
        key={text}
        href={href}
        className={`relative px-8 py-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-xl transition-all duration-300 ${
          current
            ? 'text-white bg-gradient-to-br from-purple-500/20 to-blue-500/5 shadow-lg border border-blue-400/20'
            : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
        }`}
        aria-current={current ? 'page' : undefined}
      >
        {text}
        <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
          current 
            ? 'opacity-100 bg-blue-400/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' 
            : 'opacity-0 group-hover:opacity-100 bg-gradient-to-b from-white/5 to-transparent'
        }`} />
      </Link>
    ))}
  </nav>
);

interface Feature {
  Icon: LucideIcon;
  title: string;
  description: string;
  gradient: Gradient;
}

const WelcomePage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = useCallback(
    debounce((e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    }, 16),
    [] // This is where the warning is coming from
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const navigation: NavigationItem[] = [
    { text: 'Welcome', href: '/', current: true },
    { text: 'Solutions', href: '/solutions', current: false },
    { text: 'Disruption', href: '/disruption', current: false }, // Changed from Impact to Disruption
    { text: 'Apps', href: '/apps', current: false }
  ];

  const features: Feature[] = [
    { 
      Icon: Sparkles, 
      title: 'Enhanced Client Service',
      description: 'Elevating client experience through innovative AI solutions',
      gradient: {
        text: 'text-purple-400',
        border: 'border-purple-400'
      }
    },
    { 
      Icon: Workflow, 
      title: 'Accelerated Workflows',
      description: 'Streamlining operations with intelligent automation',
      gradient: {
        text: 'text-blue-400',
        border: 'border-blue-400'
      }
    },
    { 
      Icon: Users, 
      title: 'Talent Acceleration',
      description: 'Empowering growth through AI-driven development',
      gradient: {
        text: 'text-teal-400',
        border: 'border-teal-400',
        marginTop: '-2px'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,rgba(0,0,0,0)_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.01)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <StarField mousePosition={mousePosition} />
      
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-start pt-24">
        <div className={`text-center mb-24 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center space-y-8">
            <h1 className="text-7xl font-bold tracking-wide bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 text-transparent bg-clip-text animate-gradient drop-shadow-2xl block">
              AI Innovation Hub
            </h1>
            <div>
              <h2 className="text-4xl font-medium tracking-wide bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 text-transparent bg-clip-text animate-gradient drop-shadow-2xl block">
                Future-Ready Law Firm
              </h2>
            </div>
            <p className="text-xl text-gray-300 drop-shadow-lg leading-relaxed whitespace-nowrap block">
              Accelerating disruption through human-centered AI solutions
            </p>
          </div>
        </div>

        <div className={`grid grid-cols-3 gap-16 px-8 max-w-7xl mx-auto mt-24 transition-opacity duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {features.map((feature, i) => (
            <div key={i} className="flex justify-center">
              <FeatureIcon {...feature} />
            </div>
          ))}
        </div>

        <Navigation items={navigation} />
      </div>
    </div>
  );
};

StarField.displayName = 'StarField';

export default WelcomePage;