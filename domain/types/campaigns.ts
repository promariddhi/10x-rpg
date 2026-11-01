export type Campaign = {
  id: string;
  name: string;
  description: string;
  quests: string[]; //quest Id
  completionXpReward: number;
};

export type CampaignProgress = {
  id: string;
  completedPercent: number;
};
