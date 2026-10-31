import { GameState } from "../types/game-state";

export function getInitialState(): GameState {
  return {
    name: "Player1",
    avatar: "avatar",
    totalXp: 0,
    level: 0,
    rank: "D",

    skills: {
      "software-engineering": { xp: 0 },
      "ai-engineering": { xp: 0 },
      "application-security": { xp: 0 },
      "architecture-systems": { xp: 0 },
      "debugging-performance": { xp: 0 },
      "business-product": { xp: 0 },
    },
    completedQuests: [],

    activeQuests: [],
  };
}
