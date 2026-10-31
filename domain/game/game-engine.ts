import { questList } from "@/data/quests";
import { GameActions } from "../types/game-actions";
import { GameState } from "../types/game-state";
import { awardXp, revokeXp } from "../progression/xp";
import { QuestCompletion } from "../types/quests";

export function updateGame(action: GameActions, game: GameState): GameState {
  switch (action.type) {
    case "START_QUEST":
      return handleStartQuest(action.questId, game);
    case "COMPLETE_QUEST":
      return handleCompleteQuest(action.questId, game);
    case "ABANDON_QUEST":
      return handleAbandonQuest(action.questId, game);
    case "MARK_INCOMPLETE":
      return handleMarkIncomplete(action.questId, game);
    default:
      throw new Error("Unknown game action");
  }
}

function handleStartQuest(questId: string, game: GameState): GameState {
  if (game.completedQuests.some((quest) => quest.id === questId)) {
    throw new Error("Quest already completed");
  }

  if (game.activeQuests.some((quest) => quest.id === questId)) {
    throw new Error("Quest already Active");
  }

  const questMetadata = questList.find((quest) => quest.id === questId);
  if (!questMetadata) {
    throw new Error("Quest not found!");
  }

  return {
    ...game,
    activeQuests: [
      ...game.activeQuests,
      {
        id: questId,
        startedAt: new Date().toISOString(),
      },
    ],
  };
}

function handleCompleteQuest(questId: string, game: GameState): GameState {
  const quest = game.activeQuests.find((quest) => quest.id === questId);
  if (!quest) {
    throw new Error("Quest not active");
  }

  const questMetadata = questList.find((quest) => quest.id === questId);
  if (!questMetadata) {
    throw new Error("Quest not found!");
  }

  const newGameState = awardXp(questMetadata, game);

  const completedQuest: QuestCompletion = {
    ...quest,
    completedAt: new Date().toISOString(),
  };
  newGameState.completedQuests = [...game.completedQuests, completedQuest];
  newGameState.activeQuests = game.activeQuests.filter(
    (quest) => quest.id !== questId,
  );

  return newGameState;
}

function handleAbandonQuest(questId: string, game: GameState): GameState {
  const quest = game.activeQuests.find((quest) => quest.id === questId);
  if (!quest) {
    throw new Error("Quest not active");
  }

  const questMetadata = questList.find((quest) => quest.id === questId);
  if (!questMetadata) {
    throw new Error("Quest not found!");
  }

  return {
    ...game,
    activeQuests: game.activeQuests.filter((quest) => quest.id !== questId),
  };
}

function handleMarkIncomplete(questId: string, game: GameState): GameState {
  if (!game.completedQuests.some((quest) => quest.id === questId)) {
    throw new Error("Quest not completed");
  }

  const questMetadata = questList.find((quest) => quest.id === questId);
  if (!questMetadata) {
    throw new Error("Quest not found!");
  }

  const newGameState = revokeXp(questMetadata, game);

  return {
    ...newGameState,
    completedQuests: newGameState.completedQuests.filter(
      (quest) => quest.id !== questId,
    ),
  };
}
