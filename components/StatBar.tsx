import React from 'react';
import { Heart, Brain, Shield, Users } from 'lucide-react';
import { StatKey } from '../types';

interface StatBarProps {
  label: StatKey;
  value: number;
  change?: number; // The amount changed in the last turn
}

const StatBar: React.FC<StatBarProps> = ({ label, value, change }) => {
  // Config for colors and icons
  const config = {
    Physical: { icon: Heart, color: 'text-rose-500', bar: 'bg-rose-400', bg: 'bg-rose-100' },
    Mental: { icon: Brain, color: 'text-indigo-500', bar: 'bg-indigo-400', bg: 'bg-indigo-100' },
    Literacy: { icon: Shield, color: 'text-emerald-500', bar: 'bg-emerald-400', bg: 'bg-emerald-100' },
    Social: { icon: Users, color: 'text-amber-500', bar: 'bg-amber-400', bg: 'bg-amber-100' },
  };

  const { icon: Icon, color, bar, bg } = config[label];

  return (
    <div className="flex flex-col w-full mb-3">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          <Icon className={`w-5 h-5 ${color}`} />
          <span className="text-sm font-bold text-slate-600">{label}</span>
        </div>
        <div className="flex items-center gap-2">
          {change !== undefined && change !== 0 && (
             <span className={`text-xs font-bold animate-pulse ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
               {change > 0 ? '+' : ''}{change}
             </span>
          )}
          <span className="text-sm font-bold text-slate-700">{Math.round(value)}</span>
        </div>
      </div>
      <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${bar} transition-all duration-1000 ease-out`}
          style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
        />
      </div>
    </div>
  );
};

export default StatBar;