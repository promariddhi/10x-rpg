import { Campaign } from "@/domain/types/campaigns";

export const campaignList: Campaign[] = [
  {
    id: "campaign-001",
    name: "The Art of Debugging",
    description:
      "Investigate mysterious failures, trace elusive bugs, and restore a broken system.",
    quests: ["debug-001"],
    completionXpReward: 100,
  },
  {
    id: "campaign-002",
    name: "Fortress of Trust",
    description:
      "Explore application security and learn to identify and eliminate vulnerabilities in software systems.",
    quests: ["security-001"],
    completionXpReward: 150,
  },
  {
    id: "campaign-003",
    name: "The Architect's Journey",
    description:
      "Master the foundations of modern engineering, from intelligent systems to architectural design and product thinking.",
    quests: ["ai-001", "architecture-001", "product-001"],
    completionXpReward: 300,
  },
];
