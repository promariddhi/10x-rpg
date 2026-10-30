import { Quest } from "./quests";
import { SkillId, SkillProgress } from "./skills";

export type Player = {
  name: string;
  avatar: string;

  totalXp: number;
  skills: Record<SkillId, SkillProgress>;
  completedQuests: Quest[];

  activeQuestId: string | null;
};
