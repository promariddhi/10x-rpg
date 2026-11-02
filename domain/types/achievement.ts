import { EventTrigger } from "./game/game-events";
import { GameState } from "./game/game-state";

export type Achievement = {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  trigger: EventTrigger;
  condition: (previousState: GameState, currentState: GameState) => boolean;
};

export type AchievementUnlock = {
  id: string;
  unlockedAt: string;
};
