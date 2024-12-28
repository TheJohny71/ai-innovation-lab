'use client';

import React from 'react';
import { Zap, Globe, Clock, Layers, Flag, ArrowRight, Scale } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Components
const Alert = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-lg p-6 ${className}`}>{children}</div>
);

const AlertTitle = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`font-semibold ${className}`}>{children}</h3>
);

const AlertDescription = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`mt-2 ${className}`}>{children}</div>
);

const MetricCard = ({ icon: Icon, title, value, subtitle, mainStats, additionalStats, gradient }: MetricCardProps) => (
  <div className={`rounded-2xl p-6 border backdrop-blur-sm ${gradient.border} ${gradient.bg}`}>
    <div className="flex items-center space-x-2">
      <Icon className={`w-5 h-5 ${gradient.text}`} />
      <h3 className={`font-semibold ${gradient.text}`}>{title}</h3>
    </div>
    <div className="mt-4">
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400 mt-1">{subtitle}</div>
    </div>
    <div className="mt-4 space-y-2">
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

// Types
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

function DisruptionPage() {
  // Mock data for metrics
  const metrics: DashboardMetrics = {
    cards: [
      {
        icon: Zap,
        title: "Total Initiatives",
        value: "31",
        subtitle: "verified",
        mainStats: {
          trend: "From 25 Law Firms"
        },
        additionalStats: {
          "Unique Firms": { value: "25" },
          "AmLaw 100": { value: "19" },
          "Active Projects": { value: "24" },
          "Pilot Phase": { value: "7" }
        },
        gradient: {
          border: "border-purple-400/20",
          bg: "bg-purple-500/10",
          text: "text-purple-300"
        }
      },
      {
        icon: Globe,
        title: "Global Reach",
        value: "18",
        subtitle: "global deployments",
        mainStats: {
          trend: "58% Global Scale"
        },
        additionalStats: {
          "Global Firms": { value: "18" },
          "US Focus": { value: "13" },
          "Coverage": { value: "58%" },
          "Regions": { value: "4" }
        },
        gradient: {
          border: "border-blue-400/20",
          bg: "bg-blue-500/10",
          text: "text-blue-300"
        }
      },
      {
        icon: Layers,
        title: "Active Projects",
        value: "24",
        subtitle: "in production",
        mainStats: {
          trend: "77% Active Rate"
        },
        additionalStats: {
          "Development": { value: "4" },
          "Planning": { value: "3" },
          "Success Rate": { value: "89%" },
          "Use Cases": { value: "12" }
        },
        gradient: {
          border: "border-blue-400/20",
          bg: "bg-blue-500/10",
          text: "text-blue-300"
        }
      },
      {
        icon: Flag,
        title: "2024 Launches",
        value: "8",
        subtitle: "this year",
        mainStats: {
          trend: "vs 6 in 2023"
        },
        additionalStats: {
          "2023 Total": { value: "6" },
          "2022 Total": { value: "4" },
          "Growth": { value: "33%" },
          "Pipeline": { value: "5" }
        },
        gradient: {
          border: "border-teal-400/20",
          bg: "bg-teal-500/10",
          text: "text-teal-300"
        }
      }
    ],
    implementationTypes: [
      { name: "Document Analysis & Review", count: 14 },
      { name: "Legal Research", count: 11 },
      { name: "Contract Management", count: 9 },
      { name: "Knowledge Management", count: 8 },
      { name: "Client Service Automation", count: 7 }
    ],
    deploymentStatus: {
      active: 24,
      development: 4,
      planning: 3
    }
  };

  const totalImplementations = metrics.implementationTypes.reduce((sum, type) => sum + type.count, 0);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.02)_0%,rgba(0,0,0,0)_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.005)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.005)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-500/5 via-blue-500/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-8 py-16">
        <div className="mb-20 max-w-5xl">
          <h1 className="text-5xl font-bold mb-6 tracking-tight whitespace-nowrap overflow-hidden">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 inline-block text-transparent bg-clip-text">
              Law Firm AI Disruption Index
            </span>
            <span className="block text-xl text-gray-400 mt-4 normal-case">
              Tracking AI innovation in global law firms
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.cards.map((card, index) => (
            <MetricCard key={index} {...card} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-800/40 rounded-2xl p-8 border border-blue-400/10 backdrop-blur-sm">
            <h3 className="text-2xl font-medium text-white mb-8 flex items-center justify-between">
              Implementation Types
              <span className="text-sm text-gray-400">By practice area</span>
            </h3>
            <div className="space-y-8">
              {metrics.implementationTypes.map((item) => (
                <div key={item.name} className="space-y-3">
                  <div className="flex justify-between text-base">
                    <span className="text-gray-300 font-medium">{item.name}</span>
                    <span className="text-gray-400">{item.count}</span>
                  </div>
                  <ProgressBar 
                    value={item.count}
                    max={Math.max(...metrics.implementationTypes.map(t => t.count))}
                    gradient="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/40 rounded-2xl p-8 border border-blue-400/10 backdrop-blur-sm">
            <h3 className="text-2xl font-medium text-white mb-8 flex items-center justify-between">
              Deployment Status
              <span className="text-sm text-gray-400">Current state</span>
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {Object.entries(metrics.deploymentStatus).map(([status, count]) => (
                <div key={status} className="text-center p-6 bg-gray-700/30 rounded-xl border border-blue-400/20">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {count}
                  </div>
                  <div className="text-sm text-gray-400 capitalize">{status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-16">
          <div className="flex flex-col items-center gap-8">
            <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <span>Access Complete Enterprise Dataset</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <div className="flex justify-center gap-16">
              <button onClick={() => window.location.href = '/'} className="px-4 py-2 rounded-lg bg-gray-800/60 text-gray-300 hover:text-white transition-colors">
                Welcome
              </button>
              <button onClick={() => window.location.href = '/solutions'} className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
                Solutions
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-900/60 text-blue-400 transition-colors">
                Disruption
              </button>
              <button onClick={() => window.location.href = '/apps'} className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
                Apps
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisruptionPage;