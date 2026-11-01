import { GameState } from "../types/game-state";
import { Campaign } from "../types/campaigns";

export function updateCampaignProgress(
  campaignMetadata: Campaign,
  game: GameState,
): GameState {
  const completedCount = campaignMetadata.quests.filter((questId) =>
    game.completedQuests.some((q) => q.id === questId),
  ).length;

  return {
    ...game,
    campaignProgress: {
      ...game.campaignProgress,
      [campaignMetadata.id]: {
        completedPercent: Math.trunc(
          (completedCount / campaignMetadata.quests.length) * 100,
        ),
      },
    },
  };
}
