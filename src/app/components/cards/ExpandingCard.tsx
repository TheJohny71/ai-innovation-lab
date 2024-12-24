'use client';

import React, { useState } from 'react';
import { ChevronUp, ChevronDown, CircleCheck, LucideIcon } from 'lucide-react';

interface ExpandingCardProps {
  id?: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: LucideIcon;
  color?: string;
  features?: string[];
  metrics?: Record<string, string>;
}

const ExpandingCard = ({
  id,
  title,
  subtitle,
  description,
  icon: Icon,
  color = 'text-purple-400',
  features = [],
  metrics = {}
}: ExpandingCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      key={id} 
      className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg transition-all duration-300 hover:border-emerald-500/50 hover:-translate-y-1"
    >
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-0.5 flex-shrink-0">
            <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
              <Icon className={`w-8 h-8 ${color}`} />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            {subtitle && <p className="text-emerald-400 text-sm">{subtitle}</p>}
            <p className="text-slate-400 mt-2">{description}</p>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-slate-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-400" />
          )}
        </div>
      </div>
      
      {isExpanded && (
        <div className="px-6 pb-6">
          <div className="border-t border-slate-700/50 pt-6">
            <div className="grid grid-cols-2 gap-8">
              {features.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-300">
                        <CircleCheck className={`w-4 h-4 flex-shrink-0 ${color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {Object.keys(metrics).length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Performance</h4>
                  <div className="space-y-4">
                    {Object.entries(metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-slate-400">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="text-emerald-400 font-bold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandingCard;
