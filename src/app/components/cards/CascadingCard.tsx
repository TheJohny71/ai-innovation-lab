'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CascadingCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  color?: string;
}

const CascadingCard = ({
  title,
  description,
  Icon,
  color = 'text-purple-400'
}: CascadingCardProps) => {
  return (
    <div className="group relative bg-slate-800/50 backdrop-blur p-6 rounded-lg border border-slate-700/50 flex flex-col items-center text-center transition-all duration-300 hover:border-emerald-500/50 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
      <div className="w-16 h-16 mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
      <h3 className="text-white font-medium mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};

export default CascadingCard;
