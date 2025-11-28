import React from 'react';
import { GameStats } from '../types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { RefreshCcw } from 'lucide-react';

interface GameOverProps {
  stats: GameStats;
  onRestart: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ stats, onRestart }) => {
  const data = [
    { subject: 'Physical', A: stats.Physical, fullMark: 100 },
    { subject: 'Social', A: stats.Social, fullMark: 100 },
    { subject: 'Literacy', A: stats.Literacy, fullMark: 100 },
    { subject: 'Mental', A: stats.Mental, fullMark: 100 },
  ];

  // Calculate a simple score
  const totalScore = Object.values(stats).reduce((a, b) => a + b, 0);
  const average = Math.round(totalScore / 4);

  let message = "";
  if (average >= 80) message = "Uni-Life Master! 🎓✨";
  else if (average >= 60) message = "Doing Great! 🌟";
  else message = "Room for Improvement 🌱";

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-8 text-center animate-in zoom-in duration-500">
      <h2 className="text-3xl font-bold text-slate-800 mb-2">Graduation!</h2>
      <p className="text-slate-500 mb-8">Here is your life balance report.</p>

      <div className="h-64 w-full mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid stroke="#e2e8f0" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 'bold' }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name="My Stats"
              dataKey="A"
              stroke="#6366f1"
              strokeWidth={3}
              fill="#818cf8"
              fillOpacity={0.5}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-slate-50 rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-bold text-slate-800 mb-1">{message}</h3>
        <p className="text-slate-500">Average Score: {average}/100</p>
      </div>

      <button
        onClick={onRestart}
        className="w-full bg-blue-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
      >
        <RefreshCcw size={20} /> Play Again
      </button>
    </div>
  );
};

export default GameOver;