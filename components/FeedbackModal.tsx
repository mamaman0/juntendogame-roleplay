import React from 'react';
import { Choice } from '../types';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface FeedbackModalProps {
  choice: Choice;
  onNext: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ choice, onNext }) => {
  // Parse markdown-like bold syntax (**text**) for simple rendering
  const parseText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-slate-900 font-bold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden transform transition-all scale-100">
        
        {/* Header */}
        <div className={`p-6 ${choice.isCorrect ? 'bg-green-50' : 'bg-orange-50'} flex items-center gap-4`}>
          <div className={`p-3 rounded-full ${choice.isCorrect ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
            {choice.isCorrect ? <CheckCircle2 size={32} /> : <AlertCircle size={32} />}
          </div>
          <div>
            <h3 className={`text-xl font-bold ${choice.isCorrect ? 'text-green-800' : 'text-orange-800'}`}>
              {choice.isCorrect ? 'Great Choice!' : 'Think Again...'}
            </h3>
            <p className="text-sm text-slate-500">Educational Feedback</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-slate-700 leading-relaxed text-base space-y-2 whitespace-pre-wrap">
            {parseText(choice.feedback)}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Stat Changes</h4>
            <div className="flex flex-wrap gap-2">
              {Object.entries(choice.statEffects).map(([key, val]) => (
                <span 
                  key={key} 
                  className={`px-3 py-1 rounded-full text-sm font-bold ${
                    (val || 0) > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}
                >
                  {key}: {(val || 0) > 0 ? '+' : ''}{val}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onNext}
            className="mt-8 w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            Next Scenario <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;