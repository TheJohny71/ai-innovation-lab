// src/app/components/layout/AnimatedStats.tsx
'use client';

import React from 'react';

const AnimatedStats = () => {
  const stats = [
    { label: 'Efficiency Increase', value: '85%' },
    { label: 'Time Saved', value: '60%' },
    { label: 'Cost Reduction', value: '40%' },
    { label: 'Accuracy Rate', value: '95%' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="text-center space-y-2 opacity-0 animate-fade-in"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
            {stat.value}
          </div>
          <div className="text-slate-400 text-sm">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedStats;
