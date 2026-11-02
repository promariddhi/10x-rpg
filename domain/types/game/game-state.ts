import { AchievementUnlock } from "../achievement";
import { CampaignProgress } from "../campaign";
import { QuestCompletion } from "../quest";
import { Rank } from "../rank";
import { SkillId, SkillProgress } from "../skill";
import { GameStatistics } from "./game-statistic";

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

  statistics: GameStatistics;
  unlockedAchievements: AchievementUnlock[];
};
