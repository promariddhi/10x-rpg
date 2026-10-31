import { GameState } from "../types/game-state";
import { Rank } from "../types/ranks";

export function awardLevelAndRank(game: GameState): GameState {
  const level: number = Math.trunc(game.totalXp / 100);
  return {
    ...game,
    level: level,
    rank: getRankFromLevel(level),
  };
}

function getRankFromLevel(level: number): Rank {
  switch (true) {
    case level <= 10:
      return "D";
    case level <= 25:
      return "C";
    case level <= 45:
      return "B";
    case level <= 70:
      return "A";
    case level <= 100:
      return "S";
    default:
      return "SSS";
  }
}
