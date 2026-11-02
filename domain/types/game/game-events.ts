import { SkillId } from "../skill";
import { GameState } from "./game-state";

export type Event = {
  id: EventTrigger;
  condition: (previousState: GameState, currentState: GameState) => boolean;
};

export type EventTrigger =
  | "QUEST_STARTED"
  | "QUEST_COMPLETED"
  | "QUEST_ABANDONED"
  | "LEVEL_UP"
  | "CAMPAIGN_COMPLETED"
  | "SKILL_XP_INCREASED"
  | "SKILL_XP_DECREASED"
  | "SKILL_LEVEL_UP"
  | "TOTAL_XP_INCREASED"
  | "TOTAL_XP_DECREASED"
  | "RANK_UP"
  | "ACHIEVEMENT_UNLOCKED";

export const events: Event[] = [
  {
    id: "QUEST_STARTED",
    condition: (p, c) =>
      p.statistics.totalQuestsStarted < c.statistics.totalQuestsStarted,
  },
  {
    id: "QUEST_COMPLETED",
    condition: (p, c) =>
      p.statistics.totalQuestsCompleted < c.statistics.totalQuestsCompleted,
  },
  {
    id: "QUEST_ABANDONED",
    condition: (p, c) =>
      p.statistics.totalQuestsAbandoned < c.statistics.totalQuestsAbandoned,
  },
  {
    id: "LEVEL_UP",
    condition: (p, c) => p.level < c.level,
  },
  {
    id: "CAMPAIGN_COMPLETED",
    condition: (p, c) =>
      p.statistics.totalCampaignsCompleted <
      c.statistics.totalCampaignsCompleted,
  },
  {
    id: "SKILL_XP_INCREASED",
    condition: (p, c) =>
      (Object.keys(p.skills) as SkillId[]).some(
        (skillId) => p.skills[skillId].xp < c.skills[skillId].xp,
      ),
  },
  {
    id: "SKILL_XP_DECREASED",
    condition: (p, c) =>
      (Object.keys(p.skills) as SkillId[]).some(
        (skillId) => p.skills[skillId].xp > c.skills[skillId].xp,
      ),
  },
  {
    id: "SKILL_LEVEL_UP",
    condition: (p, c) =>
      (Object.keys(p.skills) as SkillId[]).some(
        (id) => p.skills[id].level < c.skills[id].level,
      ),
  },
  {
    id: "TOTAL_XP_INCREASED",
    condition: (p, c) => p.totalXp < c.totalXp,
  },
  {
    id: "TOTAL_XP_DECREASED",
    condition: (p, c) => p.totalXp > c.totalXp,
  },
  {
    id: "RANK_UP",
    condition: (p, c) => p.level < c.level && p.rank !== c.rank,
  },
  {
    id: "ACHIEVEMENT_UNLOCKED",
    condition: (p, c) =>
      p.statistics.totalAchievementsUnlocked <
      c.statistics.totalAchievementsUnlocked,
  },
];
