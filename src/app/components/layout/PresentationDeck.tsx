'use client';

import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight,
  Shield,
  Zap,
  Lightbulb,
  CircleCheck,
  Command,
  Database,
  Search,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import ParticleCanvas from '../ui/ParticleCanvas';

const colorSchemes = {
  primary: 'from-purple-400 via-cyan-400 to-emerald-400',
  secondary: 'from-emerald-500 to-emerald-700',
  cardBg: 'bg-slate-800/50',
  cardBorder: 'border-slate-700/50'
};

const PresentationDeck = () => {
  const [activePage, setActivePage] = useState('Welcome');
  const [expandedApp, setExpandedApp] = useState(null);
  const pages = ['Welcome', 'Solutions', 'Impact', 'Apps'];

  const apps = [
    {
      id: 'ai-analysis',
      title: 'AI Analysis',
      subtitle: 'Enhanced Legal Research',
      description: 'Advanced AI-powered legal document analysis and research assistance.',
      icon: Command,
      color: 'text-purple-400',
      features: ['Natural Language Processing', 'Citation Checking', 'Key Fact Extraction'],
      metrics: { timeReduction: '40%', accuracyRate: '85%' }
    },
    {
      id: 'data-integration',
      title: 'Data Integration',
      subtitle: 'Unified Data Platform',
      description: 'Seamless integration with existing legal databases and systems.',
      icon: Database,
      color: 'text-cyan-400',
      features: ['Real-time Sync', 'Data Validation', 'API Integration'],
      metrics: { processingSpeed: '60%', dataAccuracy: '95%' }
    },
    {
      id: 'analytics',
      title: 'Analytics',
      subtitle: 'Insights & Reporting',
      description: 'Data-driven insights and customizable reporting.',
      icon: Search,
      color: 'text-rose-400',
      features: ['Predictive Analytics', 'Custom Dashboards', 'Trend Analysis'],
      metrics: { predictionAccuracy: '85%', reportingEfficiency: '75%' }
    }
  ];

  // Navigation component and page rendering functions follow...
  const Navigation = () => (
    <div className="flex items-center gap-4">
      <button 
        onClick={() => setActivePage(pages[pages.indexOf(activePage) - 1])}
        disabled={pages.indexOf(activePage) === 0}
        className="p-2 text-slate-500 hover:text-slate-400 transition-colors disabled:opacity-50"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition-colors ${
              activePage === page
                ? 'bg-emerald-500 text-white'
                : 'flex items-center text-slate-500'
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${
              activePage === page ? 'hidden' : 'bg-slate-500'
            }`} />
            {page}
          </button>
        ))}
      </div>

      <button 
        onClick={() => setActivePage(pages[pages.indexOf(activePage) + 1])}
        disabled={pages.indexOf(activePage) === pages.length - 1}
        className="p-2 text-slate-500 hover:text-slate-400 transition-colors disabled:opacity-50"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );

  // Rest of the component implementation...
  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      <ParticleCanvas />
      
      <div className="relative z-10">
        {activePage === 'Welcome' && renderWelcome()}
        {activePage === 'Solutions' && renderSolutions()}
        {activePage === 'Impact' && renderImpact()}
        {activePage === 'Apps' && renderApps()}
      </div>
    </div>
  );
};

export default PresentationDeck;
