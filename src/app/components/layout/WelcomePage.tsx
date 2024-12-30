// Complete WelcomePage.tsx file
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Star, Sparkles, Brain, Rocket, Bot } from 'lucide-react';
import Link from 'next/link';
import debounce from 'lodash/debounce';
import { LucideIcon } from 'lucide-react';

interface MousePosition {
  x: number;
  y: number;
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
  isAccent: boolean;
}

const StarField = React.memo(() => {
  const stars: Star[] = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.3,
    delay: Math.random() * 3,
    duration: Math.random() * 3 + 2,
    isAccent: Math.random() > 0.8
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animation: `twinkle ${star.duration}s infinite`,
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

  const navigation: NavigationItem[] = [
    { text: 'Welcome', href: '/', current: true },
    { text: 'Solutions', href: '/solutions', current: false },
    { text: 'Disruption', href: '/disruption', current: false },
    { text: 'Mindset', href: '/mindset', current: false }  // Updated from 'Apps' to 'Mindset'
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
      Icon: Brain,
      title: 'Advanced Analytics',
      description: 'Leveraging data for strategic insights and decision-making',
      gradient: {
        text: 'text-cyan-400',
        border: 'border-cyan-400'
      }
    },
    {
      Icon: Rocket,
      title: 'Process Automation',
      description: 'Streamlining operations with intelligent workflows',
      gradient: {
        text: 'text-emerald-400',
        border: 'border-emerald-400'
      }
    },
    {
      Icon: Bot,
      title: 'AI Integration',
      description: 'Seamlessly incorporating AI into existing systems',
      gradient: {
        text: 'text-blue-400',
        border: 'border-blue-400'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <StarField />
      
      <div className="relative z-10">
        <div className={`flex flex-col items-center gap-12 pt-32 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-6xl font-bold text-center leading-tight">
            AI Innovation Lab
          </h1>
          <p className="text-2xl text-gray-400 text-center max-w-2xl mx-auto">
            Future-Ready Law Firm
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform">
                <FeatureIcon
                  Icon={feature.Icon}
                  title={feature.title}
                  gradient={feature.gradient}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Navigation items={navigation} />
    </div>
  );
};

export default WelcomePage;
