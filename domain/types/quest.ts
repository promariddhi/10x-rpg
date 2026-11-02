import { SkillId } from "./skill";

export type Quest = {
  id: string;
  title: string;
  campaign: string; //campaign id
  xpReward: number;
  skillReward: Record<SkillId, number>;
};

export type QuestCompletion = {
  id: string;
  startedAt?: string;
  completedAt?: string;
};
