import { GameState } from "../types/game/game-state";
import { Rank } from "../types/rank";
import { SkillId, SkillProgress } from "../types/skill";

export function awardLevelAndRank(game: GameState): GameState {
  const level: number = Math.trunc(game.totalXp / 100);
  return {
    ...game,
    level: level,
    rank: getRankFromLevel(level),
    skills: Object.fromEntries(
      Object.entries(game.skills).map(([skillId, progress]) => [
        skillId,
        { ...progress, level: Math.trunc(progress.xp / 100) },
      ]),
    ) as Record<SkillId, SkillProgress>,
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
