import { QuestCompletion } from "./quests";
import { SkillId, SkillProgress } from "./skills";

export type GameState = {
  name: string;
  avatar: string;

  totalXp: number;
  skills: Record<SkillId, SkillProgress>;
  completedQuests: QuestCompletion[];

  activeQuests: QuestCompletion[];
};
