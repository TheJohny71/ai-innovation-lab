// src/app/components/layout/AnimatedStats.tsx
'use client';
import React, { useState, useEffect } from 'react';

interface StatItemProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const StatItem = ({ value, label, prefix = '', suffix = '' }: StatItemProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const steps = 60; // Number of steps in animation
    const stepValue = value / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm">
      <div className="text-3xl font-bold text-white mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
};

export default function AnimatedStats() {
  const stats = [
    { value: 98, label: 'Accuracy Rate', suffix: '%' },
    { value: 1000000, label: 'Documents Processed', prefix: '>' },
    { value: 85, label: 'Time Saved', suffix: '%' },
    { value: 24, label: 'Response Time', suffix: 'hrs' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatItem 
            key={index}
            value={stat.value}
            label={stat.label}
            prefix={stat.prefix}
            suffix={stat.suffix}
          />
        ))}
      </div>
    </div>
  );
}