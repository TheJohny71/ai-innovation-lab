'use client';

import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Zap,
  Lightbulb,
  CircleCheck,
  Command,
  Database,
  Search
} from 'lucide-react';
import ExpandingCard from '../cards/ExpandingCard';

const PresentationDeck = () => {
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

  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto pt-16">
        {apps.map((app) => (
          <ExpandingCard key={app.id} {...app} />
        ))}
      </div>
    </div>
  );
};

export default PresentationDeck;
