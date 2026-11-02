import { EventTrigger, events } from "../types/game/game-events";
import { GameState } from "../types/game/game-state";

export function evaluateEvents(
  previousState: GameState,
  currentState: GameState,
): EventTrigger[] {
  return events
    .filter((e) => e.condition(previousState, currentState))
    .map((e) => e.id);
}
