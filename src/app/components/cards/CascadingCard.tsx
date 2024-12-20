'use client';
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CascadingCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;  // Note the capital I in Icon
}

const CascadingCard: React.FC<CascadingCardProps> = ({
  title,
  description,
  Icon  // Keep the capital I here too
}) => {
  return (
    <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default CascadingCard;
