import { Quest } from "@/domain/types/quests";

export const quests: Quest[] = [
  {
    id: "debug-001",
    title: "The Vanishing Variable",
    xpReward: 100,
    skillReward: {
      "software-engineering": 20,
      "debugging-performance": 80,
      "application-security": 0,
      "ai-engineering": 0,
      "architecture-systems": 0,
      "business-product": 0,
    },
  },
  {
    id: "security-001",
    title: "The Broken Gate",
    xpReward: 150,
    skillReward: {
      "software-engineering": 0,
      "debugging-performance": 0,
      "application-security": 150,
      "ai-engineering": 0,
      "architecture-systems": 0,
      "business-product": 0,
    },
  },
  {
    id: "ai-001",
    title: "A Mind of Its Own",
    xpReward: 200,
    skillReward: {
      "software-engineering": 30,
      "debugging-performance": 0,
      "application-security": 0,
      "ai-engineering": 170,
      "architecture-systems": 0,
      "business-product": 0,
    },
  },
  {
    id: "architecture-001",
    title: "Blueprints of the Ancients",
    xpReward: 175,
    skillReward: {
      "software-engineering": 25,
      "debugging-performance": 0,
      "application-security": 0,
      "ai-engineering": 0,
      "architecture-systems": 150,
      "business-product": 0,
    },
  },
  {
    id: "product-001",
    title: "The Merchant's Dilemma",
    xpReward: 100,
    skillReward: {
      "software-engineering": 0,
      "debugging-performance": 0,
      "application-security": 0,
      "ai-engineering": 0,
      "architecture-systems": 0,
      "business-product": 100,
    },
  },
];
