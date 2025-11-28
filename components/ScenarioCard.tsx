import React from 'react';
import { Scenario, Choice } from '../types';

interface ScenarioCardProps {
  scenario: Scenario;
  onChoose: (choice: Choice) => void;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario, onChoose }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Image / Pattern Area */}
      <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-400 p-6 flex flex-col justify-center text-white relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <span className="relative z-10 text-sm font-bold opacity-90 uppercase tracking-widest mb-1">
          {scenario.year}
        </span>
        <h2 className="relative z-10 text-2xl font-bold leading-tight">
          {scenario.title}
        </h2>
      </div>

      <div className="p-6">
        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          {scenario.text}
        </p>

        <div className="flex flex-col gap-4">
          {scenario.choices.map((choice, idx) => (
            <button
              key={idx}
              onClick={() => onChoose(choice)}
              className="group relative w-full p-4 text-left border-2 border-slate-100 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 active:scale-95"
            >
              <span className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                {choice.text}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScenarioCard;