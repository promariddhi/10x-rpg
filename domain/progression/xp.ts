import { GameState } from "../types/game-state";
import { Quest } from "../types/quests";
import { SkillId } from "../types/skills";

export function awardXp(questMetadata: Quest, game: GameState): GameState {
  let newGameState = awardTotalXp(questMetadata, game);
  newGameState = awardSkillXp(questMetadata, newGameState);
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

export function revokeXp(questMetadata: Quest, game: GameState): GameState {
  let newGameState = revokeTotalXp(questMetadata, game);
  newGameState = revokeSkillXp(questMetadata, newGameState);
  return newGameState;
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
