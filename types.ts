export type StatKey = 'Physical' | 'Mental' | 'Literacy' | 'Social';

export interface StatEffects {
  Physical?: number;
  Mental?: number;
  Literacy?: number;
  Social?: number;
}

export interface Choice {
  text: string;
  statEffects: StatEffects;
  feedback: string;
  isCorrect: boolean;
}

export interface Scenario {
  id: number;
  year: string;
  title: string;
  text: string;
  choices: Choice[];
}

export interface GameStats {
  Physical: number;
  Mental: number;
  Literacy: number;
  Social: number;
}

export type GameStatus = 'intro' | 'playing' | 'feedback' | 'finished';