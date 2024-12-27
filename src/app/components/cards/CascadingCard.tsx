// src/app/components/cards/CascadingCard.tsx
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CascadingCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
}

const CascadingCard: React.FC<CascadingCardProps> = ({
  title,
  description,
  Icon,
  color
}) => {
  return (
    <div className="group relative">
      <div className="relative z-10 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 
                    transition-all duration-300 hover:border-emerald-500/50 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-0.5 mb-4">
          <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 
                    transform rotate-[-4deg] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default CascadingCard;
