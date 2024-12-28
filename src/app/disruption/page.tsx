'use client';

import React, { useState, useEffect } from 'react';
import { Zap, Globe, Clock, Layers, Flag, ArrowRight, Scale } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Types
interface AlertProps {
  children: React.ReactNode;
  className?: string;
}

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

// Components
const Alert: React.FC<AlertProps> = ({ children, className = '' }) => (
  <div className={`p-6 rounded-lg border ${className}`}>
    {children}
  </div>
);

const AlertTitle: React.FC<AlertProps> = ({ children, className = '' }) => (
  <h5 className={`text-lg font-medium mb-2 ${className}`}>
    {children}
  </h5>
);

const AlertDescription: React.FC<AlertProps> = ({ children, className = '' }) => (
  <div className={`text-sm ${className}`}>
    {children}
  </div>
);

const MetricCard: React.FC<MetricCardProps> = ({ 
  icon: Icon, 
  title, 
  value, 
  subtitle, 
  mainStats, 
  additionalStats, 
  gradient 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
      <div className={`bg-gray-800/40 p-6 rounded-2xl border ${gradient.border} backdrop-blur-sm
                      hover:bg-gray-800/60 transition-all duration-300 h-full`}>
        <div className="flex items-start justify-between mb-6">
          <div className={`w-12 h-12 rounded-xl ${gradient.bg} flex items-center justify-center
                          transform transition-transform duration-300 group-hover:scale-105`}>
            <Icon className={`w-6 h-6 ${gradient.text}`} />
          </div>
          <div className="flex items-center space-x-2">
            <Scale className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">{mainStats.trend}</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-300">{title}</h3>
            <div className="flex items-baseline gap-2 mt-2">
              <div className={`text-3xl font-bold ${gradient.text}`}>{value}</div>
              <div className="text-sm text-gray-400">/ {subtitle}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700/50">
            {Object.entries(additionalStats).map(([label, stat]) => (
              <div key={label} className="space-y-1">
                <div className="text-sm text-gray-400">{label}</div>
                <div className="text-lg font-semibold text-gray-200">
                  {stat.value}
                  {stat.change && (
                    <span className={`text-sm ml-1 ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.change}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max, gradient }) => (
  <div className="h-3 bg-gray-700/30 rounded-full overflow-hidden">
    <div 
      className={`h-full rounded-full ${gradient}`}
      style={{ 
        width: `${(value / max) * 100}%`,
        transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)' 
      }}
    />
  </div>
);

export default function DisruptionPage() {
  const [metrics] = useState<DashboardMetrics>({
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
          text: "text-purple-400"
        }
      },
      {
        icon: Globe,
        title: "Global Deployments",
        value: "18",
        subtitle: "regions",
        mainStats: {
          trend: "Across 12 Countries"
        },
        additionalStats: {
          "North America": { value: "8" },
          "Europe": { value: "6" },
          "Asia Pacific": { value: "3" },
          "Other Regions": { value: "1" }
        },
        gradient: {
          border: "border-blue-400/20",
          bg: "bg-blue-500/10",
          text: "text-blue-400"
        }
      },
      {
        icon: Clock,
        title: "2024 Launches",
        value: "8",
        subtitle: "scheduled",
        mainStats: {
          trend: "Q1-Q2 Focus"
        },
        additionalStats: {
          "Q1 Target": { value: "3" },
          "Q2 Target": { value: "5" },
          "In Development": { value: "6" },
          "Planning Phase": { value: "2" }
        },
        gradient: {
          border: "border-emerald-400/20",
          bg: "bg-emerald-500/10",
          text: "text-emerald-400"
        }
      },
      {
        icon: Layers,
        title: "Implementation Types",
        value: "5",
        subtitle: "categories",
        mainStats: {
          trend: "Core Focus Areas"
        },
        additionalStats: {
          "Document Analysis": { value: "14" },
          "Legal Research": { value: "11" },
          "Contract Mgmt": { value: "9" },
          "Knowledge Base": { value: "8" }
        },
        gradient: {
          border: "border-orange-400/20",
          bg: "bg-orange-500/10",
          text: "text-orange-400"
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
  });

  const totalImplementations = metrics.implementationTypes.reduce((sum, type) => sum + type.count, 0);

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.cards.map((card, index) => (
            <MetricCard key={index} {...card} />
          ))}
        </div>

        {/* Implementation Types */}
        <div className="bg-gray-800/40 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-gray-200 mb-6">Implementation Types</h3>
          <div className="space-y-4">
            {metrics.implementationTypes.map((type, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{type.name}</span>
                  <span className="text-gray-400">{type.count}</span>
                </div>
                <ProgressBar 
                  value={type.count}
                  max={totalImplementations}
                  gradient="bg-gradient-to-r from-purple-500 to-blue-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Deployment Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(metrics.deploymentStatus).map(([status, count], index) => (
            <Alert key={index} className="border-gray-700/50 bg-gray-800/40 backdrop-blur-sm">
              <AlertTitle className="text-gray-200 capitalize">{status} Deployments</AlertTitle>
              <AlertDescription className="text-gray-400">
                <span className="text-2xl font-bold text-gray-200">{count}</span>
                <span className="ml-2">projects</span>
              </AlertDescription>
            </Alert>
          ))}
        </div>
      </div>
    </div>
  );
}