import { questList } from "@/data/quests";
import { GameActions } from "../types/game/game-actions";
import { GameState } from "../types/game/game-state";
import {
  awardCampaignXp,
  awardQuestXp,
  revokeCampaignXp,
  revokeQuestXp,
} from "../progression/xp";
import { QuestCompletion } from "../types/quest";
import { awardLevelAndRank } from "../progression/level-rank";
import { updateCampaignProgress } from "../progression/campaign";
import { campaignList } from "@/data/campaigns";
import { EventTrigger } from "../types/game/game-events";
import { evaluateEvents } from "../events/events";
import { evaluateAchievements } from "../events/achievement";

export function updateGame(action: GameActions, game: GameState): GameState {
  let newGame: GameState;
  switch (action.type) {
    case "START_QUEST":
      newGame = handleStartQuest(action.questId, game);
      break;
    case "COMPLETE_QUEST":
      newGame = handleCompleteQuest(action.questId, game);
      break;
    case "ABANDON_QUEST":
      newGame = handleAbandonQuest(action.questId, game);
      break;
    case "MARK_INCOMPLETE":
      newGame = handleMarkIncomplete(action.questId, game);
      break;
    default:
      throw new Error("Unknown game action");
  }

  const eventsTriggered: EventTrigger[] = evaluateEvents(game, newGame);
  newGame = evaluateAchievements(eventsTriggered, game, newGame);
  return newGame;
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
    statistics: {
      ...game.statistics,
      totalQuestsStarted: game.statistics["totalQuestsStarted"] + 1,
    },
  };
}

function handleCompleteQuest(questId: string, game: GameState): GameState {
  const quest = game.activeQuests.find((quest) => quest.id === questId);
  if (!quest) {
    throw new Error("Quest not active");
  }

  if (game.completedQuests.some((q) => q.id === questId)) {
    throw new Error("Quest already completed!");
  }

  const questMetadata = questList.find((quest) => quest.id === questId);
  if (!questMetadata) {
    throw new Error("Quest not found!");
  }

  const campaignMetadata = campaignList.find(
    (campaign) => campaign.id === questMetadata.campaign,
  );
  if (!campaignMetadata) {
    throw new Error("Campaign not found!");
  }

  let newGameState = awardQuestXp(questMetadata, game);

  const completedQuest: QuestCompletion = {
    ...quest,
    completedAt: new Date().toISOString(),
  };

  newGameState = {
    ...newGameState,
    completedQuests: [...newGameState.completedQuests, completedQuest],
    activeQuests: newGameState.activeQuests.filter(
      (quest) => quest.id !== questId,
    ),
    statistics: {
      ...newGameState.statistics,
      totalQuestsCompleted: newGameState.statistics["totalQuestsCompleted"] + 1,
    },
  };

  newGameState = awardLevelAndRank(newGameState);
  newGameState = updateCampaignProgress(campaignMetadata, newGameState);
  if (
    game.campaignProgress[campaignMetadata.id].completedPercent < 100 &&
    newGameState.campaignProgress[campaignMetadata.id].completedPercent === 100
  ) {
    newGameState = awardCampaignXp(campaignMetadata, newGameState);
    newGameState = {
      ...newGameState,
      statistics: {
        ...newGameState.statistics,
        totalCampaignsCompleted:
          newGameState.statistics["totalCampaignsCompleted"] + 1,
      },
    };
  }

  return { ...newGameState };
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
    statistics: {
      ...game.statistics,
      totalQuestsAbandoned: game.statistics["totalQuestsAbandoned"] + 1,
    },
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

  const campaignMetadata = campaignList.find(
    (campaign) => campaign.id === questMetadata.campaign,
  );
  if (!campaignMetadata) {
    throw new Error("Campaign not found!");
  }

  let newGameState = {
    ...game,
    completedQuests: game.completedQuests.filter(
      (quest) => quest.id !== questId,
    ),
  };

  newGameState = revokeQuestXp(questMetadata, newGameState);
  newGameState = awardLevelAndRank(newGameState);
  newGameState = updateCampaignProgress(campaignMetadata, newGameState);

  if (
    game.campaignProgress[campaignMetadata.id].completedPercent === 100 &&
    newGameState.campaignProgress[campaignMetadata.id].completedPercent < 100
  ) {
    newGameState = revokeCampaignXp(campaignMetadata, newGameState);
  }

  return newGameState;
}
