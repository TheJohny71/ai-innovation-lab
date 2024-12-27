/**
 * Current Date and Time (UTC): 2024-12-27 04:59:13
 * Current User's Login: TheJohny71
 */
import React, { useState } from 'react';
import { LucideIcon, ChevronDown, ChevronUp } from 'lucide-react';

type AppMetrics = {
  timeReduction?: string;
  accuracyRate?: string;
  processingSpeed?: string;
  dataAccuracy?: string;
  predictionAccuracy?: string;
  reportingEfficiency?: string;
};

interface ExpandingCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  features: string[];
  metrics: AppMetrics;
}

const ExpandingCard: React.FC<ExpandingCardProps> = ({
  id,
  title,
  subtitle,
  description,
  icon: Icon,
  color,
  features,
  metrics
}): React.ReactElement => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg 
                    transition-all duration-300 hover:border-emerald-500/50">
      <div 
        className="p-6 cursor-pointer flex items-start justify-between gap-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-0.5 flex-shrink-0">
            <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
              <Icon className={`w-6 h-6 ${color}`} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-emerald-400">{subtitle}</p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-slate-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400" />
        )}
      </div>
      
      {isExpanded && (
        <div className="px-6 pb-6 space-y-4">
          <p className="text-slate-300">{description}</p>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-white mb-2">Features</h4>
              <ul className="space-y-1">
                {features.map((feature, index) => (
                  <li key={index} className="text-slate-400 text-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-emerald-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white mb-2">Metrics</h4>
              <div className="space-y-2">
                {Object.entries(metrics).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="text-emerald-400 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandingCard;