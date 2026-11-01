import { campaignList } from "@/data/campaigns";
import { GameState } from "../types/game-state";
import { Campaign } from "../types/campaigns";

export function updateCampaignProgress(
  campaignId: string,
  game: GameState,
): GameState {
  const campaignMetadata: Campaign | undefined = campaignList.find(
    (campaign) => campaign.id === campaignId,
  );

  if (!campaignMetadata) {
    throw new Error("Campaign does not exist");
  }

  const completedCount = campaignMetadata.quests.filter((questId) =>
    game.completedQuests.some((q) => q.id === questId),
  ).length;

  return {
    ...game,
    campaignProgress: {
      ...game.campaignProgress,
      [campaignId]: {
        completedPercent: Math.trunc(
          (completedCount / campaignMetadata.quests.length) * 100,
        ),
      },
    },
  };
}
