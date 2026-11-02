import { Achievement } from "@/domain/types/achievement";

export const achievementList: Achievement[] = [
  {
    id: "first-steps",
    title: "First Steps",
    description: "Complete your first quest.",
    xpReward: 50,
    trigger: "QUEST_COMPLETED",
    condition: (p, c) => c.statistics.totalQuestsCompleted > 0,
  },
  {
    id: "veteran",
    title: "Veteran",
    description: "Reach level 25.",
    xpReward: 200,
    trigger: "LEVEL_UP",
    condition: (p, c) => c.level > 25,
  },
];

export const achievementIndex = Object.groupBy(
  achievementList,
  (achievement) => achievement.trigger,
);
