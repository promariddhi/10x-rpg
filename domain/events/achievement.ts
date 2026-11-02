import { achievementIndex } from "@/data/achievements";
import { EventTrigger } from "../types/game/game-events";
import { GameState } from "../types/game/game-state";
import { Achievement } from "../types/achievement";

export function evaluateAchievements(
  triggeredEvents: EventTrigger[],
  previousState: GameState,
  currentState: GameState,
): GameState {
  if (!triggeredEvents) return currentState;

  const candidates = triggeredEvents
    .map((e: EventTrigger) => achievementIndex[e] ?? [])
    .flat();

  const achievementsUnlocked = candidates.filter(
    (a) =>
      a.condition(previousState, currentState) &&
      !currentState.unlockedAchievements.some((u) => u.id === a.id),
  );

  return {
    ...currentState,
    unlockedAchievements: [
      ...currentState.unlockedAchievements,
      ...achievementsUnlocked.map((a: Achievement) => ({
        id: a.id,
        unlockedAt: new Date().toISOString(),
      })),
    ],
    totalXp:
      currentState.totalXp +
      achievementsUnlocked.reduce((total, a) => total + a.xpReward, 0),
  };
}
