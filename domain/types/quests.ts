import { SkillId } from "./skills";

export type Quest = {
  id: string;
  title: string;
  xpReward: number;
  skillReward: Record<SkillId, number>;

  startedAt?: string;
  completedAt?: string;
};
