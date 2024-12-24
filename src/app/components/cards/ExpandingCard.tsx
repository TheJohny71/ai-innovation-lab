'use client';

import React, { useState } from 'react';
import { Search, Database, LucideIcon } from 'lucide-react';

interface ExpandingCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

const ExpandingCard = ({ 
  title, 
  description, 
  features,
  icon: Icon
}: ExpandingCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="group relative bg-gradient-to-br from-gray-800 to-gray-900 
                rounded-xl border border-gray-700/50 transition-all duration-500
                hover:scale-102"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative p-6">
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-purple-500/10 rounded-lg">
            <Icon className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
        </div>

        <div className={`mt-4 overflow-hidden transition-all duration-500 
                      ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <hr className="border-gray-700 mb-4" />
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpandingCard;
