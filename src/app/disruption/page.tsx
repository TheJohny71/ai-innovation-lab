'use client';

import React, { useState, useEffect } from 'react';
import { Zap, Globe, Clock, Layers, Flag, ArrowRight, Scale } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';

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
export default function DisruptionPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const currentUser = 'TheJohny71';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date: Date) => {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'UTC'
    });
  };

  // Mock data for metrics
  const metrics: DashboardMetrics = {
    cards: [
      {
        icon: Globe,
        title: "Total AI Initiatives",
        value: "145",
        subtitle: "Global implementations",
        mainStats: {
          trend: "28 jurisdictions"
        },
        additionalStats: {
          "Active": { value: "89", change: "+12%" },
          "In Development": { value: "56", change: "+8%" }
        },
        gradient: {
          border: "border-purple-400/20",
          bg: "bg-purple-500/10",
          text: "text-purple-300"
        }
      },
      // ... other cards data
    ],
    implementationTypes: [
      { name: "Document Analysis & Review", count: 45 },
      { name: "Legal Research", count: 35 },
      { name: "Contract Management", count: 25 },
      { name: "Compliance Monitoring", count: 20 },
      { name: "Case Prediction", count: 15 }
    ],
    deploymentStatus: {
      active: 89,
      development: 56,
      planning: 34
    }
  };

  const totalImplementations = metrics.implementationTypes.reduce((sum, type) => sum + type.count, 0);
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      {/* Enterprise Data Context Box */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-4 text-sm text-blue-200/80 flex justify-between items-center backdrop-blur-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>Current Date and Time (UTC): {formatDateTime(currentTime)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Flag className="w-4 h-4" />
            <span>Current User's Login: {currentUser}</span>
          </div>
        </div>
      </div>

      {/* Message Card */}
      <div className="max-w-7xl mx-auto mb-12">
        <Alert className="border-blue-400/20 bg-blue-500/10 backdrop-blur-sm">
          <div className="flex justify-between items-start">
            <div>
              <AlertTitle className="text-blue-300 text-lg mb-2">
                Latest Update
              </AlertTitle>
              <AlertDescription className="text-blue-200/80">
                AI Innovation Hub is currently tracking and analyzing {metrics.cards[0].value} verified AI initiatives 
                across {metrics.cards[0].mainStats.trend}. Our focus spans multiple practice areas, with {metrics.cards[3]?.additionalStats["Document Analysis"]?.value || '45'} implementations 
                in Document Analysis & Review and {metrics.cards[3]?.additionalStats["Legal Research"]?.value || '35'} in Legal Research. {metrics.cards[2]?.value || '34'} new launches are 
                scheduled for early {new Date().getFullYear()}, with a particular emphasis on Q1-Q2 deployments.
              </AlertDescription>
            </div>
            <div className="text-sm text-blue-300/60">
              Last updated: {formatDateTime(currentTime)}
            </div>
          </div>
        </Alert>
      </div>

      {/* Metric Cards */}
      <div className="max-w-7xl mx-auto space-y-12">
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

      {/* Bottom Navigation */}
      <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center gap-8 backdrop-blur-md bg-gray-900/30 p-2 rounded-2xl border border-gray-700/20 shadow-xl">
        <Link
          href="/"
          className="px-8 py-2.5 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-300"
        >
          Welcome
        </Link>
        <Link
          href="/solutions"
          className="px-8 py-2.5 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-300"
        >
          Solutions
        </Link>
        <span className="px-8 py-2.5 text-white bg-gradient-to-br from-purple-500/20 to-blue-500/5 shadow-lg border border-blue-400/20 rounded-xl">
          Disruption
        </span>
        <Link
          href="/explore"
          className="px-8 py-2.5 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-300"
        >
          Explore
        </Link>
      </nav>
    </div>
  );
}