'use client';

import React, { useState, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight,
  Shield,
  Zap,
  Lightbulb,
  Command,
  Database,
  Search
} from 'lucide-react@0.263.1';
import ParticleCanvas from '../ui/ParticleCanvas';
import AnimatedStats from './AnimatedStats';
import ExpandingCard from '../cards/ExpandingCard';
import CascadingCard from '../cards/CascadingCard';

const PAGES = ['Welcome', 'Solutions', 'Impact', 'Apps'] as const;
type Page = typeof PAGES[number];

const PresentationDeck = () => {
  const [activePage, setActivePage] = useState<Page>('Welcome');
  const [expandedApp, setExpandedApp] = useState<string | null>(null);

  const handlePageChange = useCallback((page: Page) => {
    setActivePage(page);
    setExpandedApp(null);
  }, []);

  const WelcomePage = () => (
    <div className="flex flex-col items-center justify-center px-8">
      <h1 className="text-4xl font-bold text-white mb-8">
        AI Innovation Lab
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {[
          { title: 'Enhanced Service', description: 'Elevating client experience through AI', icon: Shield },
          { title: 'Fast Workflows', description: 'Accelerating legal processes', icon: Zap },
          { title: 'Innovation', description: 'Leading-edge legal tech solutions', icon: Lightbulb }
        ].map((card) => (
          <CascadingCard
            key={card.title}
            title={card.title}
            description={card.description}
            Icon={card.icon}
          />
        ))}
      </div>
    </div>
  );

  const SolutionsPage = () => (
    <div className="flex flex-col items-center px-8">
      <h2 className="text-3xl font-bold text-white mb-8">Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {[
          {
            title: 'AI Analysis',
            description: 'Advanced document analysis',
            features: ['Natural Language Processing', 'Citation Checking', 'Key Fact Extraction'],
            icon: 'search'
          },
          {
            title: 'Data Integration',
            description: 'Seamless system integration',
            features: ['Real-time Sync', 'Data Validation', 'API Integration'],
            icon: 'database'
          },
          {
            title: 'Analytics Platform',
            description: 'Comprehensive insights',
            features: ['Predictive Analytics', 'Custom Dashboards', 'Trend Analysis'],
            icon: 'search'
          }
        ].map((solution) => (
          <ExpandingCard
            key={solution.title}
            title={solution.title}
            description={solution.description}
            features={solution.features}
            icon={solution.icon}
          />
        ))}
      </div>
    </div>
  );

  const ImpactPage = () => (
    <div className="flex flex-col items-center px-8">
      <h2 className="text-3xl font-bold text-white mb-8">Impact</h2>
      <AnimatedStats />
    </div>
  );

  const Navigation = () => (
    <nav className="absolute bottom-4 w-full flex justify-center items-center gap-4">
      <button 
        onClick={() => {
          const prevIndex = PAGES.indexOf(activePage) - 1;
          if (prevIndex >= 0) handlePageChange(PAGES[prevIndex]);
        }}
        disabled={PAGES.indexOf(activePage) === 0}
        className="p-2 text-gray-400 hover:text-gray-300 disabled:text-gray-600 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <div className="flex items-center gap-2">
        {PAGES.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-3 h-3 rounded-full transition-colors ${
              activePage === page ? 'bg-green-500' : 'bg-gray-600 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
      
      <button 
        onClick={() => {
          const nextIndex = PAGES.indexOf(activePage) + 1;
          if (nextIndex < PAGES.length) handlePageChange(PAGES[nextIndex]);
        }}
        disabled={PAGES.indexOf(activePage) === PAGES.length - 1}
        className="p-2 text-gray-400 hover:text-gray-300 disabled:text-gray-600 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );

  return (
    <div className="relative min-h-screen bg-gray-900">
      <ParticleCanvas />
      
      {/* Gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 bg-purple-500/30 -top-48 -left-48" />
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 bg-green-500/30 -bottom-48 -right-48" />
      </div>

      {/* Main content */}
      <main className="relative z-10 p-8">
        {activePage === 'Welcome' && <WelcomePage />}
        {activePage === 'Solutions' && <SolutionsPage />}
        {activePage === 'Impact' && <ImpactPage />}
        <Navigation />
      </main>
    </div>
  );
};

export default PresentationDeck;
