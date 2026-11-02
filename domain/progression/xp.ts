import { Campaign } from "../types/campaign";
import { GameState } from "../types/game/game-state";
import { Quest } from "../types/quest";
import { SkillId } from "../types/skill";

export function awardQuestXp(questMetadata: Quest, game: GameState): GameState {
  let newGameState = awardTotalXp(questMetadata, game);
  newGameState = awardSkillXp(questMetadata, newGameState);
  return newGameState;
}

export function awardCampaignXp(
  campaignMetadata: Campaign,
  game: GameState,
): GameState {
  return {
    ...game,
    totalXp: game.totalXp + campaignMetadata.completionXpReward,
  };
}

export function revokeCampaignXp(
  campaignMetadata: Campaign,
  game: GameState,
): GameState {
  return {
    ...game,
    totalXp: game.totalXp - campaignMetadata.completionXpReward,
  };
}

export function revokeQuestXp(
  questMetadata: Quest,
  game: GameState,
): GameState {
  let newGameState = revokeTotalXp(questMetadata, game);
  newGameState = revokeSkillXp(questMetadata, newGameState);
  return newGameState;
}

function awardTotalXp(questMetadata: Quest, game: GameState): GameState {
  return {
    ...game,
    totalXp: game.totalXp + questMetadata.xpReward,
  };
}

function awardSkillXp(questMetadata: Quest, game: GameState): GameState {
  const skills = { ...game.skills };

  for (const [id, xp] of Object.entries(questMetadata.skillReward) as [
    SkillId,
    number,
  ][]) {
    skills[id] = { ...skills[id], xp: skills[id].xp + xp };
  }

  return { ...game, skills: skills };
}

function revokeTotalXp(questMetadata: Quest, game: GameState): GameState {
  return {
    ...game,
    totalXp: game.totalXp - questMetadata.xpReward,
  };
}

function revokeSkillXp(questMetadata: Quest, game: GameState): GameState {
  const skills = { ...game.skills };

  for (const [id, xp] of Object.entries(questMetadata.skillReward) as [
    SkillId,
    number,
  ][]) {
    skills[id] = { ...skills[id], xp: skills[id].xp - xp };
  }

  return { ...game, skills: skills };
}
