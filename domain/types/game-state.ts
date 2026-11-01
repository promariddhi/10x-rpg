import { CampaignProgress } from "./campaigns";
import { QuestCompletion } from "./quests";
import { Rank } from "./ranks";
import { SkillId, SkillProgress } from "./skills";

export type GameState = {
  name: string;
  avatar: string;

  totalXp: number;
  skills: Record<SkillId, SkillProgress>;
  completedQuests: QuestCompletion[];

  campaignProgress: Record<string, CampaignProgress>;

  level: number;
  rank: Rank;

  activeQuests: QuestCompletion[];
};
