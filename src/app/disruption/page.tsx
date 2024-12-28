'use client';

import React, { useState, useEffect } from 'react';
import { Zap, Globe, Clock, Layers, Flag, ArrowRight, Scale } from 'lucide-react';

// First, let's create a simple Alert component since we don't have the full UI library
const Alert = ({ children, className = '' }) => (
  <div className={`p-6 rounded-lg border ${className}`}>
    {children}
  </div>
);

const AlertTitle = ({ children, className = '' }) => (
  <h5 className={`text-lg font-medium mb-2 ${className}`}>
    {children}
  </h5>
);

const AlertDescription = ({ children, className = '' }) => (
  <div className={`text-sm ${className}`}>
    {children}
  </div>
);

// Now paste the MetricCard component code you provided
const MetricCard = ({ icon: Icon, title, value, subtitle, mainStats, additionalStats, gradient }) => {
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
            {Object.entries(additionalStats).map(([label, stat], index) => (
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

// Paste the ProgressBar component code
const ProgressBar = ({ value, max, gradient }) => (
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

// Paste the main Dashboard component but export it as default
export default function DisruptionPage() {
  const [metrics] = useState({
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
      // ... rest of your cards data
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

  return (
    // ... rest of your Dashboard component JSX
  );
}