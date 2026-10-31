export type GameActions =
  | {
      type: "START_QUEST";
      questId: string;
    }
  | {
      type: "ABANDON_QUEST";
      questId: string;
    }
  | {
      type: "COMPLETE_QUEST";
      questId: string;
    }
  | {
      type: "MARK_INCOMPLETE";
      questId: string;
    };
