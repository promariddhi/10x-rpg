import { SkillId } from "./skills";

export type Quest = {
  id: string;
  title: string;
  xpReward: number;
  skillReward: Record<SkillId, number>;
};

export type QuestCompletion = {
  id: string;
  startedAt?: string;
  completedAt?: string;
};
