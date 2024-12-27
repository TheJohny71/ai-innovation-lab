'use client';

import React, { useState, ReactElement } from 'react';
import { 
  Shield, 
  Zap, 
  Lightbulb, 
  Command, 
  Database, 
  Search, 
  ChevronRight, 
  ChevronLeft,
  Clock,
  Globe,
  Layers,
  Flag,
  LucideIcon
} from 'lucide-react';
import ParticleCanvas from '../ui/ParticleCanvas';
import AnimatedStats from './AnimatedStats';
import CascadingCard from '../cards/CascadingCard';
import ExpandingCard from '../cards/ExpandingCard';

type AppMetrics = Record<string, string>;

type App = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  features: string[];
  metrics: AppMetrics;
};

// Apps data
const apps: App[] = [
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

const PresentationDeck = () => {
  type PageName = 'Welcome' | 'Solutions' | 'Impact' | 'Apps';
  
  const [activePage, setActivePage] = useState<PageName>('Welcome');
  const pages: PageName[] = ['Welcome', 'Solutions', 'Impact', 'Apps'];
  const [metrics] = useState({
    totalInitiatives: 157,
    globalDeployments: 42,
    activeProjects: 89,
    launches2024: 23,
    implementationTypes: [
      { name: 'Document Analysis', count: 45 },
      { name: 'Case Management', count: 38 },
      { name: 'Contract Review', count: 35 },
      { name: 'Legal Research', count: 39 }
    ],
    deploymentStatus: {
      active: 89,
      pending: 43,
      completed: 25
    }
  });

  const handleNextPage = () => {
    const currentIndex = pages.indexOf(activePage);
    if (currentIndex < pages.length - 1) {
      setActivePage(pages[currentIndex + 1]);
    }
  };

  const handlePrevPage = () => {
    const currentIndex = pages.indexOf(activePage);
    if (currentIndex > 0) {
      setActivePage(pages[currentIndex - 1]);
    }
  };

  const Navigation = () => (
    <div className="flex items-center gap-4">
      <button 
        onClick={handlePrevPage} 
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
              activePage === page ? 'bg-emerald-500 text-white' : 'text-slate-400'
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
        onClick={handleNextPage} 
        disabled={pages.indexOf(activePage) === pages.length - 1} 
        className="p-2 text-slate-500 hover:text-slate-400 transition-colors disabled:opacity-50"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );

  const PageComponents: Record<PageName, ReactElement> = {
    Welcome: (
      <div className="flex-1 flex flex-col items-center justify-center px-16 relative z-10">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
          AI Innovation Lab
        </h1>
        <p className="text-xl text-slate-300 text-center mb-16">
          Disrupting the legal industry through human-centered AI
        </p>
        <div className="relative w-full max-w-4xl">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          <div className="grid grid-cols-3 gap-8">
            {[
              { title: 'Enhanced Client Service', icon: Shield, color: 'text-purple-400' },
              { title: 'Accelerated Workflows', icon: Zap, color: 'text-cyan-400' },
              { title: 'Practice Innovation', icon: Lightbulb, color: 'text-emerald-400' },
            ].map((card) => (
              <CascadingCard 
                key={card.title} 
                title={card.title} 
                description="Description here" 
                Icon={card.icon} 
                color={card.color} 
              />
            ))}
          </div>
        </div>
        <div className="mt-16">
          <AnimatedStats />
        </div>
      </div>
    ),
    Solutions: (
      <div className="flex-1 flex flex-col px-16 relative z-10">
        <div className="h-20 flex justify-center items-center">
          <Navigation />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-white mb-16">Integrated Solutions</h2>
          <div className="grid grid-cols-3 gap-12 max-w-6xl">
            {apps.map((app, index) => (
              <div key={app.id} className="flex flex-col items-center relative">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-0.5 hover:scale-105 transition-all">
                  <div className="w-full h-full rounded-3xl bg-slate-900 flex items-center justify-center">
                    <app.icon className={`w-12 h-12 ${app.color}`} />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="text-xl font-bold text-white mb-2">{app.title}</div>
                  <div className="text-emerald-400">{app.subtitle}</div>
                </div>
                {index < 2 && (
                  <ChevronRight className="absolute -right-6 top-1/2 -translate-y-1/2 text-slate-600 animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    Impact: (
      <div className="flex-1 flex flex-col px-16 relative z-10">
        <div className="h-20 flex justify-center items-center">
          <Navigation />
        </div>
        
        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto w-full">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
              Legal AI Implementation Landscape
            </h1>
            <p className="text-xl text-slate-300">
              Comprehensive analysis of AI adoption in legal practice
            </p>
          </div>

          {/* Data Context Alert */}
          <div className="mb-12 bg-slate-800/50 backdrop-blur border border-emerald-500/20 rounded-lg p-6">
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <Clock className="w-5 h-5" />
              <h3 className="font-medium">Real-Time Analytics</h3>
            </div>
            <p className="text-slate-300">
              Live tracking of {metrics.totalInitiatives} AI initiatives across global legal operations
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Zap,
                title: 'Active Initiatives',
                value: metrics.totalInitiatives,
                subtitle: 'Total implementations',
                color: 'from-purple-500 to-purple-700'
              },
              {
                icon: Globe,
                title: 'Global Reach',
                value: metrics.globalDeployments,
                subtitle: 'Countries deployed',
                color: 'from-cyan-500 to-cyan-700'
              },
              {
                icon: Layers,
                title: 'Current Projects',
                value: metrics.activeProjects,
                subtitle: 'In development',
                color: 'from-emerald-500 to-emerald-700'
              },
              {
                icon: Flag,
                title: 'New Launches',
                value: metrics.launches2024,
                subtitle: '2024 roadmap',
                color: 'from-rose-500 to-rose-700'
              }
            ].map((metric, index) => (
              <div 
                key={index} 
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 
                         transition-all duration-300 hover:border-emerald-500/50 hover:scale-105"
              >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${metric.color} p-0.5 mb-4`}>
                  <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-white font-medium mb-2">{metric.title}</h3>
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <p className="text-sm text-emerald-400">{metric.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Implementation Analysis Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Implementation Types */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 
                          transition-all duration-300 hover:border-emerald-500/50">
              <h3 className="text-lg font-semibold text-white mb-6">Implementation Categories</h3>
              <div className="space-y-6">
                {metrics.implementationTypes.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">{item.name}</span>
                      <span className="text-emerald-400">{item.count} implementations</span>
                    </div>
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                        style={{ 
                          width: `${(item.count / Math.max(...metrics.implementationTypes.map(t => t.count))) * 100}%`,
                          transition: 'width 1s ease-in-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deployment Status */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 
                          transition-all duration-300 hover:border-emerald-500/50">
              <h3 className="text-lg font-semibold text-white mb-6">Deployment Status</h3>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(metrics.deploymentStatus).map(([status, count]) => (
                  <div key={status} 
                    className="text-center p-4 bg-slate-700/30 rounded-lg 
                             transition-all duration-300 hover:bg-slate-700/50"
                  >
                    <div className="text-2xl font-bold text-white mb-1">{count}</div>
                    <div className="text-sm text-emerald-400 capitalize">{status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    Apps: (
      <div className="flex-1 flex flex-col py-16 px-16 relative z-10">
        <div className="h-20 flex justify-center items-center">
          <Navigation />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-white mb-16">Our Applications</h2>
          <div className="space-y-6 w-full max-w-6xl">
            {apps.map((app) => (
              <ExpandingCard
                key={app.id}
                id={app.id}
                title={app.title}
                subtitle={app.subtitle}
                description={app.description}
                icon={app.icon}
                color={app.color}
                features={app.features}
                metrics={app.metrics}
              />
            ))}
          </div>
        </div>
      </div>
    )
  };

  // Main Component Return
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col relative overflow-hidden">
      <ParticleCanvas />
      {PageComponents[activePage]}
      {activePage === 'Welcome' && (
        <div className="h-20 flex justify-center items-center relative z-10">
          <Navigation />
        </div>
      )}
    </div>
  );
};

export default PresentationDeck;  
