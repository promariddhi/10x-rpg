import { campaignList } from "@/data/campaigns";
import { GameState } from "../types/game/game-state";
import { skills } from "@/data/skills";
import { SkillId, SkillProgress } from "../types/skill";

export function getInitialState(): GameState {
  return {
    name: "Player1",
    avatar: "avatar",
    totalXp: 0,
    level: 0,
    rank: "D",

    skills: Object.fromEntries(
      skills.map((skill) => [skill.id, { xp: 0, level: 0 }]),
    ) as Record<SkillId, SkillProgress>,
    completedQuests: [],

    campaignProgress: Object.fromEntries(
      campaignList.map((campaign) => [campaign.id, { completedPercent: 0 }]),
    ),

    activeQuests: [],

    statistics: {
      totalQuestsCompleted: 0,
      totalCampaignsCompleted: 0,
      totalQuestsStarted: 0,
      totalQuestsAbandoned: 0,
      totalAchievementsUnlocked: 0,
    },
    unlockedAchievements: [],
  };
}
