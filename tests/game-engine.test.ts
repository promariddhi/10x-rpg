import { describe, it, expect } from "vitest";

import { getInitialState } from "@/domain/game/game-initial-state";
import { updateGame } from "@/domain/game/game-engine";

import { questList } from "@/data/quests";

describe("updateGame", () => {
  // --------------------------------------------------
  // START QUEST
  // --------------------------------------------------

  describe("START_QUEST", () => {
    it("should start a valid quest", () => {
      const game = getInitialState();
      const quest = questList[0];

      const result = updateGame(
        { type: "START_QUEST", questId: quest.id },
        game,
      );

      expect(result.activeQuest).not.toBeNull();
      expect(result.activeQuest?.id).toBe(quest.id);
      expect(Date.parse(result.activeQuest!.startedAt!)).not.toBeNaN();
    });

    it("should throw when the quest does not exist", () => {
      const game = getInitialState();

      expect(() =>
        updateGame({ type: "START_QUEST", questId: "invalid-quest" }, game),
      ).toThrow("Quest not found!");
    });

    it("should not modify the original game state", () => {
      const game = getInitialState();
      const originalState = structuredClone(game);

      updateGame({ type: "START_QUEST", questId: questList[0].id }, game);

      expect(game).toEqual(originalState);
    });
  });

  // --------------------------------------------------
  // COMPLETE QUEST
  // --------------------------------------------------

  describe("COMPLETE_QUEST", () => {
    it("should throw when there is no active quest", () => {
      const game = getInitialState();

      expect(() => updateGame({ type: "COMPLETE_QUEST" }, game)).toThrow(
        "No active quest",
      );
    });

    it("should throw when the active quest does not exist", () => {
      const game = getInitialState();

      game.activeQuest = {
        id: "invalid-quest",
        startedAt: new Date().toISOString(),
      };

      expect(() => updateGame({ type: "COMPLETE_QUEST" }, game)).toThrow(
        "Quest not found!",
      );
    });

    it("should move the active quest to completed quests", () => {
      const game = getInitialState();
      const quest = questList[0];

      game.activeQuest = {
        id: quest.id,
        startedAt: "2026-10-31T10:00:00.000Z",
      };

      const result = updateGame({ type: "COMPLETE_QUEST" }, game);

      expect(result.activeQuest).toBeNull();
      expect(result.completedQuests).toHaveLength(1);
      expect(result.completedQuests[0].id).toBe(quest.id);
      expect(result.completedQuests[0].startedAt).toBe(
        "2026-10-31T10:00:00.000Z",
      );

      expect(Date.parse(result.completedQuests[0].completedAt!)).not.toBeNaN();
    });

    it("should award total XP", () => {
      const game = getInitialState();
      const quest = questList[0];

      game.activeQuest = {
        id: quest.id,
        startedAt: new Date().toISOString(),
      };

      const result = updateGame({ type: "COMPLETE_QUEST" }, game);

      expect(result.totalXp).toBe(quest.xpReward);
    });

    it("should award skill XP", () => {
      const game = getInitialState();
      const quest = questList[0];

      game.activeQuest = {
        id: quest.id,
        startedAt: new Date().toISOString(),
      };

      const result = updateGame({ type: "COMPLETE_QUEST" }, game);

      for (const [id, xp] of Object.entries(quest.skillReward)) {
        expect(result.skills[id as keyof typeof result.skills].xp).toBe(xp);
      }
    });

    it("should not modify the original game state", () => {
      const game = getInitialState();
      const quest = questList[0];

      game.activeQuest = {
        id: quest.id,
        startedAt: new Date().toISOString(),
      };

      const originalState = structuredClone(game);

      updateGame({ type: "COMPLETE_QUEST" }, game);

      expect(game).toEqual(originalState);
    });
  });

  // --------------------------------------------------
  // ABANDON QUEST
  // --------------------------------------------------

  describe("ABANDON_QUEST", () => {
    it("should throw when there is no active quest", () => {
      const game = getInitialState();

      expect(() => updateGame({ type: "ABANDON_QUEST" }, game)).toThrow(
        "No active quest",
      );
    });

    it("should throw when the active quest does not exist", () => {
      const game = getInitialState();

      game.activeQuest = {
        id: "invalid-quest",
        startedAt: new Date().toISOString(),
      };

      expect(() => updateGame({ type: "ABANDON_QUEST" }, game)).toThrow(
        "Quest not found!",
      );
    });

    it("should abandon an active quest", () => {
      const game = getInitialState();
      const quest = questList[0];

      game.activeQuest = {
        id: quest.id,
        startedAt: new Date().toISOString(),
      };

      const result = updateGame({ type: "ABANDON_QUEST" }, game);

      expect(result.activeQuest).toBeNull();
    });

    it("should not award XP when abandoning a quest", () => {
      const game = getInitialState();
      const quest = questList[0];

      game.activeQuest = {
        id: quest.id,
        startedAt: new Date().toISOString(),
      };

      const result = updateGame({ type: "ABANDON_QUEST" }, game);

      expect(result.totalXp).toBe(0);
      expect(result.skills).toEqual(game.skills);
      expect(result.completedQuests).toHaveLength(0);
    });

    it("should not modify the original game state", () => {
      const game = getInitialState();

      game.activeQuest = {
        id: questList[0].id,
        startedAt: new Date().toISOString(),
      };

      const originalState = structuredClone(game);

      updateGame({ type: "ABANDON_QUEST" }, game);

      expect(game).toEqual(originalState);
    });
  });

  // --------------------------------------------------
  // SEQUENTIAL OPERATIONS
  // --------------------------------------------------

  describe("Sequential operations", () => {
    it("should correctly process multiple quest operations", () => {
      let game = getInitialState();

      const quest1 = questList[0];
      const quest2 = questList[1];

      // Start first quest
      game = updateGame({ type: "START_QUEST", questId: quest1.id }, game);

      expect(game.activeQuest?.id).toBe(quest1.id);

      // Complete first quest
      game = updateGame({ type: "COMPLETE_QUEST" }, game);

      expect(game.activeQuest).toBeNull();
      expect(game.completedQuests).toHaveLength(1);
      expect(game.totalXp).toBe(quest1.xpReward);

      // Start second quest
      game = updateGame({ type: "START_QUEST", questId: quest2.id }, game);

      expect(game.activeQuest?.id).toBe(quest2.id);

      // Abandon second quest
      game = updateGame({ type: "ABANDON_QUEST" }, game);

      // Verify final state
      expect(game.activeQuest).toBeNull();
      expect(game.completedQuests).toHaveLength(1);
      expect(game.completedQuests[0].id).toBe(quest1.id);
      expect(game.totalXp).toBe(quest1.xpReward);
    });
  });
});
