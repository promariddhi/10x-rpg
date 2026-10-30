# Engineer's Guild
## Product & Build Specification

**Version:** 1.0  
**Date:** 30 October 2026  
**Status:** Initial product specification

---

# 1. Product Overview

## 1.1 Concept

Engineer's Guild is a personal, gamified software engineering learning environment.

It combines a structured technical curriculum with RPG-inspired progression. The user is a member of a guild, undertakes quests, completes training campaigns, earns experience, improves individual skills and unlocks achievements.

The application should make learning feel like playing a small, cosy RPG rather than managing an online course.

The primary purpose is to encourage consistent, independent skill development outside work.

## 1.2 Design philosophy

The application follows five principles:

1. **Mastery over accumulation:** Completing substantial learning resources matters more than collecting hundreds of superficial tasks.
2. **Consistency without pressure:** The user chooses tasks based on available energy and time. There are no streak penalties.
3. **Independent progression:** Each engineering skill develops separately.
4. **Concrete assignments:** Every quest has a defined resource, task, deliverable and completion condition.
5. **Playfulness first:** The application should feel like a small game, not an LMS or corporate productivity dashboard.

## 1.3 Target user

A junior software developer who wants to maintain and improve independent engineering ability while working in an AI-assisted development environment.

Learning priorities:

- Software engineering and programming fluency
- Debugging and performance
- Application security
- Practical AI engineering
- Architecture and systems
- Product management and product design

## 1.4 Scope of v1

The first version is a personal, single-user application.

Included:

- Character profile and level
- Six independent skill progressions
- Curated learning campaigns
- Campaign milestones and quests
- Energy-based quest selection
- One active quest at a time
- XP and level progression
- Achievements
- Completion journal
- Weekly learning statistics
- Local persistence

Not included initially:

- User accounts
- Cloud synchronisation
- Social features
- Multiplayer
- Leaderboards
- AI-generated quests
- Subscription features
- External LMS integrations

---

# 2. Visual Identity and Experience

## 2.1 Theme

**Concept:** A cosy fantasy guild for aspiring engineers.

Visual references:

- Pixel-art RPGs
- Fantasy guild halls
- Adventure journals
- Quest boards
- Character progression screens
- Old parchment and illustrated maps

The visual style should be cute and inviting without looking childish.

## 2.2 Visual language

Suggested palette:

| Purpose | Colour |
|---|---|
| Background | Warm parchment |
| Primary | Muted lavender |
| Secondary | Dusty blue |
| Accent | Sage green |
| Highlight | Soft gold |
| Text | Dark charcoal |
| Secondary text | Muted grey |

Use:

- Rounded cards
- Small pixel-art illustrations
- Subtle borders
- Simple icons
- Progress bars
- Illustrated skill emblems
- Small achievement badges

Avoid excessive gradients, glassmorphism, oversized dashboard cards and overly corporate styling.

## 2.3 Character

The player has:

- Name
- Avatar
- Overall level
- Overall XP
- Guild rank
- Six skill levels

The avatar is primarily decorative in v1, with room for future customisation.

## 2.4 Main navigation

1. Guild Hall
2. Campaigns
3. Quest Board
4. Achievements
5. Hunter's Journal

The Guild Hall is the home screen.

---

# 3. Skill System

There are six independent skills.

## 3.1 Software Engineering

Covers:

- Programming and language proficiency
- Data structures and algorithms
- Backend development and APIs
- Databases and SQL
- Code quality and refactoring
- Testing and maintainability

## 3.2 Debugging & Performance

Covers:

- Systematic debugging
- Stack traces and profiling
- Memory and CPU analysis
- Database optimisation
- Load testing
- Bottleneck identification
- Root-cause analysis

## 3.3 Application Security

Covers:

- OWASP vulnerabilities
- Authentication and authorisation
- Secure API development
- Threat modelling
- Cryptography fundamentals
- Security testing
- Secrets and data protection

## 3.4 AI Engineering

Covers:

- LLM application development
- Prompting and structured outputs
- Tool calling and agentic workflows
- RAG and retrieval systems
- Evaluation and guardrails
- AI security
- AI observability and deployment

## 3.5 Architecture & Systems

Covers:

- Software architecture
- Design patterns and architectural styles
- Distributed systems
- System design
- Scalability and fault tolerance
- Networking and infrastructure
- Reliability and observability
- Database architecture and performance

## 3.6 Business & Product

This skill means practical product management and product design, not traditional business analysis.

Covers:

- Requirements and product discovery
- Stakeholder communication
- User research
- Domain understanding
- Product thinking and prioritisation
- Feasibility and trade-off analysis
- UX and product design
- Translating user needs into product solutions

Each skill has its own XP and level.

---

# 4. Learning System: Campaigns, Milestones and Quests

The learning system should be hierarchical.

## 4.1 Campaign

A campaign represents a substantial learning resource or a coherent curriculum.

Examples:

- Exercism Python
- Full Stack Open
- PortSwigger Web Security Academy
- Hugging Face Agents Course
- Designing Data-Intensive Applications

A campaign has:

- Title
- Description
- Associated skill or skills
- Resource information
- Completion requirements
- Milestones
- Overall progress
- Completion reward

## 4.2 Milestone

A milestone represents a meaningful section of a campaign.

Examples:

- Complete the Python track's concept exercises.
- Complete Part 3 of Full Stack Open.
- Finish the SQL injection learning path.
- Complete the Agent Fundamentals unit.

A milestone contains one or more quests.

## 4.3 Quest

A quest is the actual work the player undertakes.

Every quest must define:

- Title
- Instructions
- Resource
- Relevant section, lesson, exercise or lab
- Estimated time
- Recommended energy
- Difficulty
- XP reward
- Completion criteria
- Optional deliverable

A quest should never say merely "learn about databases" or "study security".

It must specify what to do and how completion is demonstrated.

## 4.4 Quest categories

**Training quests:** Work through a lesson, exercise, lab or chapter.

**Practice quests:** Apply a concept independently.

**Project quests:** Build something or produce a substantial artefact.

**Boss quests:** Complete a capstone, assessment or integrated challenge.

## 4.5 Resource completion

The user should be able to see what completing a campaign means before starting it.

For example:

- Exercism: complete the required concept and practice exercises.
- Full Stack Open: complete the course parts, exercises and project requirements.
- PortSwigger: complete the selected learning paths and their specified labs.
- Books: finish the defined reading sequence and required understanding exercises.
- Project courses: finish the material and capstone.

Campaigns must have explicit completion criteria. Progress should not be marked complete merely because the user has opened every section.

---

# 5. Game Mechanics

## 5.1 XP rewards

Initial difficulty system:

| Difficulty | XP | Recommended energy | Time |
|---|---:|---|---|
| Easy | 10 | Low | 10–25 min |
| Normal | 20 | Medium | 25–50 min |
| Hard | 35 | High | 50–90 min |
| Boss | 60 | High | 90+ min |

These are initial reward values. Large campaign milestones may have larger rewards.

XP should be awarded for meaningful milestones rather than every tiny action.

A completed campaign should award a separate mastery bonus.

## 5.2 Overall character level

Every 100 XP increases the character's level by one.

Formula:

`level = floor(totalXP / 100) + 1`

`currentLevelXP = totalXP % 100`

## 5.3 Guild ranks

| Rank | Levels |
|---|---|
| E | 1–4 |
| D | 5–9 |
| C | 10–19 |
| B | 20–34 |
| A | 35–49 |
| S | 50+ |

## 5.4 Skill progression

Each skill uses the same level formula independently.

The user can have a high Software Engineering level and a low Application Security level.

Do not force balanced progression.

## 5.5 Energy system

The user chooses their available energy.

| Energy | Suitable activity |
|---|---|
| Low | Reading, small exercises, short debugging tasks |
| Medium | Course sections, programming exercises, small implementations |
| High | Projects, labs, architecture exercises, capstones |

The user may also specify available time.

Energy and time are recommendations, not restrictions.

## 5.6 One active quest

Only one quest can be active at a time.

Starting a quest:

- Changes its state to active.
- Records the start time.
- Does not award XP.

Completing a quest:

- Records its completion.
- Awards XP.
- Updates the associated skills.
- Checks achievement conditions.
- Updates campaign progress.

Abandoning a quest:

- Returns it to available.
- Awards no XP.
- Does not erase campaign progress.

An active quest remains active after refreshing or reopening the application.

## 5.7 Repeatable quests

Some quests can be repeated using different exercises, labs or challenges.

Examples:

- Exercism exercises
- PortSwigger labs
- PostgreSQL exercises

Each unique exercise or lab can only award XP once.

The application must store a unique external task identifier where available.

Do not allow repeatedly completing the same exercise to farm XP.

## 5.8 Achievements

Initial achievements:

| Achievement | Condition |
|---|---|
| First Steps | Complete first quest |
| Apprentice | Complete 10 quests |
| Dedicated Hunter | Complete 25 quests |
| Veteran | Complete 50 quests |
| Bug Hunter | Complete 5 debugging quests |
| Security Initiate | Complete 5 security quests |
| AI Tinkerer | Complete 5 AI quests |
| Architect | Complete 5 architecture quests |
| Jack of All Trades | Reach level 2 in five skills |
| S-Rank Hunter | Reach overall level 50 |
| Campaign Graduate | Complete first campaign |
| Master of the Guild | Complete five campaigns |

Achievements do not award XP initially. They are recognition rewards.

## 5.9 Journal

Every completed quest creates a journal entry.

Fields:

- Quest title
- Campaign
- Skill
- Completion date
- XP earned
- Optional reflection
- Optional deliverable link

The user can revisit completed work.

---

# 6. Initial Learning Curriculum

The initial campaign library is curated. It is not intended to contain every possible resource.

## 6.1 Software Engineering

Three major campaigns.

### SE-01: PowerShell Automation

**Resource:** Exercism — PowerShell

https://exercism.org/tracks/powershell

Goal: Develop practical PowerShell fluency for Windows automation and scripting.

Milestones:

1. Complete introductory concepts.
2. Complete the core concept exercises.
3. Complete the practice exercises.
4. Review and improve selected solutions.
5. Build a final automation utility.

Final project:

Create a PowerShell utility that automates a meaningful Windows workflow. It should handle errors, accept parameters, produce useful output and have basic tests or validation.

Completion: Finish the track and final project.

### SE-02: Python Fluency

**Resource:** Exercism — Python

https://exercism.org/tracks/python

Goal: Improve independent programming ability and practical Python fluency.

Milestones:

1. Complete introductory concepts.
2. Complete core concept exercises.
3. Complete practice exercises.
4. Review selected solutions for idiomatic Python.
5. Build a final automation project.

Final project:

Build a Python automation utility using file operations, standard-library modules, error handling and tests.

Completion: Finish the track and final project.

### SE-03: Full Stack Mastery

**Resource:** University of Helsinki — Full Stack Open

https://fullstackopen.com/en/

Goal: Develop strong full-stack engineering fluency.

Complete the course sequentially rather than selecting isolated topics.

The curriculum includes:

- React
- Node.js
- REST APIs
- Testing
- State management
- TypeScript
- GraphQL
- Databases
- CI/CD
- Containers
- Relational databases
- Additional advanced topics

Milestones should follow the actual course parts.

Completion:

- Complete the required exercises.
- Complete the course project work.
- Complete the required submissions or assessments.
- Build one independent application that integrates the major concepts.

This is the largest Software Engineering campaign.

---

## 6.2 Application Security

### AS-01: Secure Development

**Resource:** IBM — Application Security for Developers and DevOps Professionals

https://www.coursera.org/learn/application-security-for-developers-devops

Goal: Establish a structured foundation in application security.

Complete all course modules, labs, graded assignments and final project.

Topics include:

- Security by design
- DevSecOps
- Network security fundamentals
- Security testing
- Vulnerability scanning
- Threat modelling
- Secure coding practices
- Secrets management
- Security headers

### AS-02: Web Security Academy

**Resource:** PortSwigger Web Security Academy

https://portswigger.net/web-security/learning-paths

Goal: Develop practical web application security skills.

Study the learning material and solve the associated labs.

Suggested topic sequence:

1. SQL injection
2. Authentication
3. Access control
4. Path traversal
5. File upload vulnerabilities
6. Server-side request forgery
7. Business logic vulnerabilities
8. Cross-site scripting
9. Cross-site request forgery
10. API testing and vulnerabilities

For each selected topic:

- Read the learning material.
- Complete all relevant Apprentice labs.
- Complete the relevant Practitioner labs.
- Document the vulnerability and remediation.
- Attempt Expert labs as an optional advanced extension.

Completion: Finish the defined learning paths and lab requirements.

---

## 6.3 AI Engineering

The focus is production AI engineering, not ML research.

### AI-01: Agent Engineering

**Resource:** Hugging Face Agents Course

https://huggingface.co/learn/agents-course/en/unit0/introduction

Goal: Understand agent fundamentals and build working agents.

Milestones:

1. Onboarding.
2. Agent fundamentals.
3. Frameworks: smolagents, LangGraph and LlamaIndex.
4. Practical use cases.
5. Final assignment.
6. Optional advanced units on evaluation and observability.

Completion:

- Complete the main course units.
- Complete their quizzes and exercises.
- Complete the final benchmark assignment.
- Build an independent agent-based application.

### AI-02: Production AI Systems

**Resource:** Full Stack Deep Learning

https://fullstackdeeplearning.com/

Goal: Learn the engineering practices involved in building and deploying AI-powered products.

Study the relevant lectures and labs covering:

- Data management
- Model development
- Evaluation
- Deployment
- Infrastructure
- Monitoring
- Product integration

Final project:

Build a production-style AI application with:

- Structured inputs and outputs
- Tool calling or retrieval
- Evaluation dataset
- Failure handling
- Logging and observability
- Deployment

Completion: Finish the selected course material, labs and capstone.

### Supplementary reference

Made With ML — MLOps

https://madewithml.com/courses/mlops/

Use as a reference for testing, reproducibility, evaluation, CI/CD and monitoring. Not a mandatory third campaign.

---

## 6.4 Architecture & Systems

### AR-01: Systems Thinking

**Resource:** Designing Data-Intensive Applications — Martin Kleppmann

https://dataintensive.net/

Goal: Develop a deep understanding of data systems and distributed architecture.

Read the book in sequence.

Major topics:

- Data models and query languages
- Storage and retrieval
- Encoding and evolution
- Replication
- Partitioning
- Transactions
- Distributed systems
- Consistency and consensus
- Batch processing
- Stream processing

Completion:

- Finish the book.
- Maintain chapter notes.
- Create diagrams for major systems concepts.
- Produce architecture decisions demonstrating application of the concepts.

### AR-02: Architecture Map

**Resources:**

System Design:
https://roadmap.sh/system-design

Software Design & Architecture:
https://roadmap.sh/software-design-architecture

Goal: Build a structured map of architecture knowledge.

Use the roadmaps as a syllabus and gap checklist.

Topics include:

- Design principles
- Design patterns
- Architectural styles
- Modular monoliths
- Microservices
- Domain-driven design
- Distributed systems
- Scalability
- Caching
- Messaging
- Reliability
- Fault tolerance

Completion:

- Work through every major roadmap topic.
- Identify and explain the important concepts.
- Apply selected concepts in architecture diagrams and ADRs.

Do not treat every roadmap node as an independent XP-granting quest.

---

## 6.5 PostgreSQL Fluency, Security & Performance

A dedicated practical campaign under Architecture & Systems.

### AR-03: Database Mastery

**Primary resource:** PostgreSQL documentation

https://www.postgresql.org/docs/current/

**Practice resource:** PostgreSQL Exercises

https://pgexercises.com/

Topics:

1. SQL fundamentals
2. Data types and constraints
3. Schema design
4. Joins and aggregations
5. Window functions and advanced queries
6. Indexing
7. EXPLAIN and EXPLAIN ANALYZE
8. Transactions and isolation levels
9. Roles and privileges
10. Row-level security
11. Authentication and secure configuration
12. Monitoring and performance
13. Backup and maintenance

Completion:

- Work through the exercise collection.
- Study the relevant documentation.
- Build a database-backed application.
- Implement appropriate indexes and constraints.
- Configure roles and permissions.
- Demonstrate a row-level security policy.
- Measure and explain query performance.
- Document security and performance decisions.

Useful references:

- EXPLAIN: https://www.postgresql.org/docs/current/using-explain.html
- Monitoring: https://www.postgresql.org/docs/current/monitoring.html
- Row security: https://www.postgresql.org/docs/current/ddl-rowsecurity.html
- Transaction isolation: https://www.postgresql.org/docs/current/transaction-iso.html

---

## 6.6 Observability

### AR-04: SRE and Observability Principles

**Resource:** Google Site Reliability Engineering

https://sre.google/sre-book/table-of-contents/

Read the selected chapters:

- Monitoring Distributed Systems
- Practical Alerting
- Effective Troubleshooting
- Emergency Response
- Managing Incidents
- Postmortem Culture

Completion:

Produce a concise technical reference explaining:

- Logs
- Metrics
- Traces
- SLIs and SLOs
- Alerting
- Incident response
- Postmortems

### AR-05: OpenTelemetry Fundamentals

**Resource:** OpenTelemetry documentation

https://opentelemetry.io/docs/concepts/

Study:

- Signals
- Instrumentation
- Context propagation
- Sampling
- Semantic conventions
- Collectors

Completion:

Explain how the signals work together and how instrumentation supports debugging and operational visibility.

---

## 6.7 Business & Product

### BP-01: Product Management

**Resource:** Atlassian Product Discovery Handbook

https://support.atlassian.com/jira-product-discovery/docs/the-product-management-handbook/

Goal: Understand product discovery and prioritisation.

Study the handbook in sequence.

Topics:

- Product discovery
- User problems
- Insights and feedback
- Opportunity identification
- Prioritisation
- Backlogs
- Roadmaps
- Stakeholder alignment

Completion:

Finish the handbook and create a personal product-management reference.

### BP-02: Product Design & UX

**Resource:** Nielsen Norman Group UX research library

https://www.nngroup.com/articles/

Follow a curated reading sequence on:

- User research
- User interviews
- Usability testing
- Interaction design
- Information architecture
- Accessibility

Completion:

Complete the selected reading sequence and produce a concise UX principles reference.

### Supplementary roadmap

Product Manager:
https://roadmap.sh/product-manager

Product Design:
https://roadmap.sh/product-design

Use these to identify gaps, not as additional mandatory courses.

---

# 7. Curriculum Organisation in the Application

Each campaign should have a structured representation.

Suggested hierarchy:

```text
Skill
└── Campaign
    ├── Resource
    ├── Completion requirements
    ├── Milestone 1
    │   ├── Quest 1
    │   └── Quest 2
    ├── Milestone 2
    │   ├── Quest 3
    │   └── Quest 4
    └── Final Trial
        └── Capstone
```

Campaign progress is derived from completed milestones and quests.

The campaign should display:

- Overall progress
- Completed milestones
- Remaining milestones
- Next recommended quest
- Mastery requirements
- Campaign XP earned

The user should be able to see the entire campaign before starting it.

---

# 8. Application Screens

## 8.1 Guild Hall

The home screen.

Display:

- Character avatar
- Overall level and XP bar
- Guild rank
- Six skill summaries
- Active quest
- Campaign progress
- Suggested quests based on energy
- Recent achievements

The screen should feel like entering a guild hall, not opening a spreadsheet.

## 8.2 Campaign Library

Display all campaigns grouped by skill.

Each campaign card contains:

- Title
- Description
- Skill
- Resource provider
- Progress
- Completion status
- Estimated scope, if known

Filters:

- Skill
- Not started
- In progress
- Completed

## 8.3 Campaign Detail

Display:

- Campaign overview
- Learning objectives
- Resource links
- Milestone list
- Quest list
- Completion criteria
- XP rewards
- Campaign completion bonus

Allow the user to start the next available quest.

## 8.4 Quest Board

This is the daily task-selection screen.

The user chooses:

- Energy level
- Available time
- Preferred skill or any skill

The board recommends suitable quests from the active campaigns.

The user can select one quest and start it.

There should be no pressure to complete a daily quota.

## 8.5 Active Quest

Display:

- Quest title
- Instructions
- Resource link
- Estimated time
- Difficulty
- XP reward
- Completion criteria
- Optional notes

Actions:

- Complete
- Abandon

Completing a quest should optionally prompt the user for a reflection or deliverable.

## 8.6 Achievements

Display unlocked and locked achievements.

For locked achievements, show the requirement.

## 8.7 Hunter's Journal

A chronological history of completed quests.

Allow filtering by:

- Skill
- Campaign
- Date
- Quest type

Each entry should be expandable to show reflections and deliverables.

---

# 9. Technical Architecture

## 9.1 Stack

| Layer | Technology |
|---|---|
| Framework | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| Icons | Lucide |
| State | React state / reducer |
| Persistence | localStorage |
| Testing | Vitest |
| Browser testing | Playwright |
| Package manager | pnpm |
| Version control | Git / GitHub |
| Hosting | Vercel |

## 9.2 Architecture principles

- Keep game logic separate from UI components.
- Keep campaign definitions separate from player progress.
- Derive levels and progress rather than storing redundant values.
- Use pure functions for XP and progression logic.
- Keep state transitions predictable.
- Persist state through a dedicated storage layer.
- Make the application usable without a backend.

## 9.3 Suggested folder structure

```text
engineers-guild/
├── app/
│   ├── page.tsx
│   ├── campaigns/
│   │   ├── page.tsx
│   │   └── [campaignId]/
│   │       └── page.tsx
│   ├── quests/
│   │   └── page.tsx
│   ├── active-quest/
│   │   └── page.tsx
│   ├── achievements/
│   │   └── page.tsx
│   └── journal/
│       └── page.tsx
│
├── components/
│   ├── character/
│   ├── skills/
│   ├── campaigns/
│   ├── quests/
│   ├── achievements/
│   ├── journal/
│   └── layout/
│
├── data/
│   ├── skills.ts
│   ├── campaigns/
│   ├── achievements.ts
│   └── quest-templates/
│
├── lib/
│   ├── game/
│   │   ├── progression.ts
│   │   ├── quest-engine.ts
│   │   ├── campaign-engine.ts
│   │   ├── achievement-engine.ts
│   │   └── game-reducer.ts
│   ├── storage/
│   │   ├── local-storage.ts
│   │   └── migrations.ts
│   └── utils/
│
├── hooks/
│   └── use-game-state.ts
│
├── types/
│   └── game.ts
│
└── tests/
    ├── progression.test.ts
    ├── quest-engine.test.ts
    ├── campaign-engine.test.ts
    ├── achievement-engine.test.ts
    └── game-reducer.test.ts
```

---

# 10. Data Model

The model should distinguish static curriculum data from user progress.

## 10.1 Core types

```ts
type SkillId =
  | "software-engineering"
  | "debugging-performance"
  | "application-security"
  | "ai-engineering"
  | "architecture-systems"
  | "business-product";

type EnergyLevel = "low" | "medium" | "high";

type Difficulty = "easy" | "normal" | "hard" | "boss";

type CampaignStatus =
  | "not-started"
  | "in-progress"
  | "completed";

type QuestStatus =
  | "available"
  | "active"
  | "completed";

type CampaignType =
  | "course"
  | "practice-track"
  | "book"
  | "learning-path"
  | "project-curriculum"
  | "reference-curriculum";

type SkillReward = {
  skillId: SkillId;
  xp: number;
};

type Resource = {
  title: string;
  provider: string;
  url: string;
};

type Quest = {
  id: string;
  campaignId: string;
  milestoneId: string;

  title: string;
  description: string;
  instructions: string[];

  difficulty: Difficulty;
  energy: EnergyLevel;
  estimatedMinutes: number;

  xpReward: number;
  skillRewards: SkillReward[];

  resources: Resource[];

  completionCriteria: string[];
  repeatable: boolean;
};

type Milestone = {
  id: string;
  campaignId: string;
  title: string;
  description: string;
  questIds: string[];
  completionCriteria: string[];
  xpReward: number;
};

type Campaign = {
  id: string;
  title: string;
  description: string;

  skillIds: SkillId[];
  type: CampaignType;

  resources: Resource[];

  milestoneIds: string[];

  completionCriteria: string[];

  completionXp: number;
};

type SkillProgress = {
  xp: number;
};

type QuestCompletion = {
  id: string;
  questId: string;
  campaignId: string;

  completedAt: string;

  xpAwarded: number;
  skillRewards: SkillReward[];

  externalTaskId?: string;

  reflection?: string;
  deliverableUrl?: string;
};

type CampaignProgress = {
  campaignId: string;
  status: CampaignStatus;

  completedMilestoneIds: string[];
  completedAt?: string;
};

type UnlockedAchievement = {
  achievementId: string;
  unlockedAt: string;
};

type Player = {
  name: string;
  avatar: string;

  totalXp: number;

  skills: Record<SkillId, SkillProgress>;

  activeQuestId: string | null;

  campaignProgress: Record<string, CampaignProgress>;

  completedQuests: QuestCompletion[];

  unlockedAchievements: UnlockedAchievement[];

  createdAt: string;
};

type GameState = {
  version: 1;
  player: Player;
};
```

This is an initial model, not an instruction to implement every feature immediately.

## 10.2 Static versus dynamic data

Static data:

- Skills
- Campaigns
- Milestones
- Quest definitions
- Achievement definitions

Dynamic data:

- Active quest
- Completed quests
- Skill XP
- Campaign progress
- Achievement unlocks
- Reflections

Do not store campaign definitions in player progress.

## 10.3 Derived values

Calculate rather than persist:

- Character level
- Character rank
- XP progress to next level
- Skill levels
- Campaign percentage
- Number of completed quests
- Weekly statistics

## 10.4 Completion integrity

Quest completion must be an atomic game-state transition.

The same quest must not award XP twice.

Repeatable quests require a unique external task identifier to prevent duplicate exercise or lab rewards.

Campaign completion bonuses must only be awarded once.

The sum of skill XP allocations must equal the total XP reward.

---

# 11. State Management and Persistence

Use a central game-state reducer.

Suggested actions:

```ts
type GameAction =
  | { type: "START_QUEST"; questId: string }
  | { type: "COMPLETE_QUEST"; questId: string; reflection?: string }
  | { type: "ABANDON_QUEST"; questId: string }
  | { type: "COMPLETE_MILESTONE"; milestoneId: string }
  | { type: "COMPLETE_CAMPAIGN"; campaignId: string }
  | { type: "UNLOCK_ACHIEVEMENT"; achievementId: string }
  | { type: "UPDATE_PLAYER"; name?: string; avatar?: string };
```

Use localStorage with a versioned schema.

Requirements:

- Initialise safely in the browser.
- Avoid server-side rendering hydration mismatches.
- Validate loaded state.
- Provide a default player state.
- Handle invalid or outdated stored data.
- Support future migrations.

The application should not require a database in v1.

---

# 12. Testing Strategy

Game logic should be tested before the UI is fully built.

## Unit tests

### Progression

- XP produces the correct level.
- XP produces the correct rank.
- Skill levels are independent.
- XP allocations add up correctly.

### Quest engine

- Only one quest can be active.
- Starting a quest awards no XP.
- Completing a quest awards XP exactly once.
- Abandoning a quest awards no XP.
- Repeatable quests reject duplicate external task IDs.

### Campaign engine

- Milestone progress is calculated correctly.
- Campaign completion requires all mandatory milestones.
- Campaign completion bonus is awarded once.

### Achievements

- Correct conditions unlock achievements.
- Achievements do not unlock repeatedly.
- Achievement checks run after relevant state changes.

### Persistence

- State survives refresh.
- Invalid state is handled.
- State migrations work.

## Playwright tests

One primary happy-path test:

1. Open the Guild Hall.
2. Navigate to the Campaign Library.
3. Open a campaign.
4. Start a quest.
5. Complete the quest.
6. Verify XP increases.
7. Verify skill progress updates.
8. Refresh.
9. Verify progress persists.

---

# 13. Implementation Roadmap

Build incrementally. Do not start by implementing the entire application.

## Phase 1 — Foundation

- Initialise Next.js and TypeScript.
- Configure Tailwind and shadcn/ui.
- Configure pnpm.
- Set up Git.
- Create the application layout.
- Add navigation.
- Establish the visual theme.

Deliverable: A navigable static application.

## Phase 2 — Game Logic

- Define types.
- Add skills and progression calculations.
- Implement quest state transitions.
- Implement campaign progress.
- Implement achievements.
- Write unit tests.

Deliverable: A tested game engine without a polished UI.

## Phase 3 — Persistence

- Implement localStorage.
- Add versioned state.
- Implement safe initialisation.
- Test persistence and reload behaviour.

Deliverable: Progress survives browser refresh.

## Phase 4 — Guild Hall

- Character panel.
- XP bar.
- Guild rank.
- Skill cards.
- Campaign progress.
- Active quest summary.

Deliverable: Functional home screen.

## Phase 5 — Campaigns and Quests

- Campaign library.
- Campaign detail screen.
- Milestone progression.
- Quest board.
- Energy and time filters.
- Active quest screen.
- Completion and abandonment.

Deliverable: The main learning loop works.

## Phase 6 — Achievements and Journal

- Achievement conditions.
- Achievement display.
- Journal entries.
- Reflections.
- Weekly statistics.

Deliverable: Complete progression experience.

## Phase 7 — Visual Polish

- Pixel-art assets.
- Empty states.
- Loading states.
- Responsive layouts.
- Small animations.
- Sound effects only if they improve the experience.

Deliverable: A polished personal RPG-style application.

## Phase 8 — Deployment

- Final Playwright test.
- Accessibility review.
- Production build.
- Deploy to Vercel.
- Verify local persistence in production.

Deliverable: Publicly accessible personal application.

---

# 14. Product Decisions and Constraints

These decisions are considered approved for v1.

| Decision | Choice |
|---|---|
| Progression | Independent skill XP |
| Skills | Six approved skills |
| Active quests | One at a time |
| Curriculum | Curated campaigns |
| Campaign structure | Campaign → Milestones → Quests |
| XP | Milestone and campaign-based rewards |
| Repeatable tasks | Allowed, unique completion required |
| Persistence | localStorage |
| Backend | None in v1 |
| Authentication | None in v1 |
| Streaks | No penalties |
| Task selection | Energy and time based |
| Achievements | Automatic unlocks |
| Journal | Automatic completion records |
| Hosting | Vercel |
| Stack | Next.js, TypeScript, Tailwind, shadcn/ui |

---

# 15. Future Possibilities

Not part of v1, but the architecture should not make these difficult later:

- Cloud synchronisation
- Multiple characters or profiles
- Custom avatars
- More campaigns
- User-created campaigns
- Importing external course progress
- Additional achievements
- Campaign recommendations
- AI-assisted reflection and review
- Calendar integration
- Exporting the learning journal

---

# 16. Definition of Done

The first version is complete when:

- The user can see their character and six skill levels.
- The user can browse the curated campaign library.
- Each campaign has milestones and completion criteria.
- The user can select a quest based on energy and available time.
- Only one quest can be active.
- Quest completion correctly awards XP.
- Skill progress updates independently.
- Campaign progress updates correctly.
- Achievements unlock automatically.
- Completed quests appear in the journal.
- Progress persists after refresh.
- Duplicate XP awards are prevented.
- The application works on desktop and mobile.
- The production build passes.
- The main user journey passes its Playwright test.

**The guiding idea:** Engineer's Guild should make it enjoyable to become a better engineer, while ensuring that every bit of progress represents real learning or work completed.