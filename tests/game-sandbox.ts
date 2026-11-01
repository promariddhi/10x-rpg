import { questList } from "@/data/quests";
import { updateGame } from "@/domain/game/game-engine";
import { getInitialState } from "@/domain/game/game-initial-state";
import { GameActions } from "@/domain/types/game-actions";

let game = getInitialState();

function dispatch(action: GameActions) {
  game = updateGame(action, game);
  console.log("Action:", action.type);
  console.dir(game, { depth: null });
  console.log("");
}

dispatch({ type: "START_QUEST", questId: questList[2].id });
dispatch({ type: "START_QUEST", questId: questList[3].id });
dispatch({ type: "COMPLETE_QUEST", questId: questList[2].id });
dispatch({ type: "COMPLETE_QUEST", questId: questList[3].id });
dispatch({ type: "MARK_INCOMPLETE", questId: questList[2].id });
