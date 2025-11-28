import React, { useState, useEffect } from 'react';
import { GameStats, GameStatus, Choice, StatKey } from './types';
import { INITIAL_STATS, SCENARIOS } from './constants';
import StatBar from './components/StatBar';
import ScenarioCard from './components/ScenarioCard';
import FeedbackModal from './components/FeedbackModal';
import GameOver from './components/GameOver';
import { GraduationCap, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [stats, setStats] = useState<GameStats>(INITIAL_STATS);
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [status, setStatus] = useState<GameStatus>('intro');
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
  const [lastStatChanges, setLastStatChanges] = useState<Partial<Record<StatKey, number>>>({});

  // Reset Game
  const restartGame = () => {
    setStats(INITIAL_STATS);
    setScenarioIndex(0);
    setStatus('intro');
    setSelectedChoice(null);
    setLastStatChanges({});
  };

  // Handle User Selection
  const handleChoice = (choice: Choice) => {
    setSelectedChoice(choice);
    
    // Apply stats
    const newStats = { ...stats };
    const changes: Partial<Record<StatKey, number>> = {};

    (Object.keys(choice.statEffects) as StatKey[]).forEach((key) => {
      const effect = choice.statEffects[key] || 0;
      changes[key] = effect;
      // Clamp between 0 and 100
      newStats[key] = Math.min(Math.max(newStats[key] + effect, 0), 100);
    });

    setStats(newStats);
    setLastStatChanges(changes);
    setStatus('feedback');
  };

  // Move to next scenario
  const handleNext = () => {
    setLastStatChanges({}); // Clear visual feedback indicators
    if (scenarioIndex + 1 < SCENARIOS.length) {
      setScenarioIndex(prev => prev + 1);
      setStatus('playing');
    } else {
      setStatus('finished');
    }
  };

  const currentScenario = SCENARIOS[scenarioIndex];

  // Intro Screen
  if (status === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center animate-in zoom-in duration-500">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Uni-Life Balance</h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Welcome to University! Over the next 4 years, you will face various choices regarding your lifestyle, relationships, and health.
            <br/><br/>
            Keep your stats balanced to survive and thrive!
          </p>
          <button
            onClick={() => setStatus('playing')}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            Start Student Life <ArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row max-w-5xl mx-auto md:p-8">
      
      {/* Sidebar / Stats Area - Sticky on Desktop, Top on Mobile */}
      <div className="w-full md:w-80 p-4 md:p-0 md:mr-8 flex-shrink-0 sticky top-0 md:static z-40 bg-slate-50/95 backdrop-blur md:bg-transparent">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Current Status</h3>
          <StatBar label="Physical" value={stats.Physical} change={lastStatChanges.Physical} />
          <StatBar label="Mental" value={stats.Mental} change={lastStatChanges.Mental} />
          <StatBar label="Literacy" value={stats.Literacy} change={lastStatChanges.Literacy} />
          <StatBar label="Social" value={stats.Social} change={lastStatChanges.Social} />
        </div>
      </div>

      {/* Main Game Area */}
      <div className="flex-1 p-4 md:p-0 flex items-start justify-center">
        {status === 'finished' ? (
          <GameOver stats={stats} onRestart={restartGame} />
        ) : (
          <ScenarioCard scenario={currentScenario} onChoose={handleChoice} />
        )}
      </div>

      {/* Feedback Overlay */}
      {status === 'feedback' && selectedChoice && (
        <FeedbackModal choice={selectedChoice} onNext={handleNext} />
      )}
    </div>
  );
};

export default App;