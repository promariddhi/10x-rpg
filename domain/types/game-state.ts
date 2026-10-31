import { QuestCompletion } from "./quests";
import { Rank } from "./ranks";
import { SkillId, SkillProgress } from "./skills";

export type GameState = {
  name: string;
  avatar: string;

  totalXp: number;
  skills: Record<SkillId, SkillProgress>;
  completedQuests: QuestCompletion[];

  level: number;
  rank: Rank;

  activeQuests: QuestCompletion[];
};
