// src/app/components/cards/CascadingCard.tsx
import React from 'react';
import { Database, Search } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon?: 'database' | 'search';
}

const CascadingCard = ({ title, description, icon = 'database' }: CardProps) => {
  const Icon = icon === 'database' ? Database : Search;
  
  return (
    <div className="group relative">
      {/* Background layers that appear on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 translate-x-4 translate-y-4 bg-gray-800/30 rounded-xl" />
        <div className="absolute inset-0 translate-x-2 translate-y-2 bg-gray-800/60 rounded-xl" />
      </div>
      
      {/* Main card */}
      <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 
                    transform transition-all duration-300 group-hover:-translate-y-2 group-hover:translate-x-1">
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-purple-500/10 rounded-lg">
            <Icon className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CascadingCard;