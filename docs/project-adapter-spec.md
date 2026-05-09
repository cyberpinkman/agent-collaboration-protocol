# Project Adapter Spec

## Purpose

The project adapter spec defines the project-specific layer that sits between the reusable collaboration core and a concrete repository.

Its job is to make a new project immediately legible to the planning/review agent and the implementation agent without polluting the core protocol with repo-specific details.

## What Belongs In The Adapter

The adapter should contain the facts that change from project to project, including:

- project identity and purpose
- repository layout
- domain vocabulary
- build, test, and verification commands
- important file paths
- risky subsystems
- release or deployment constraints
- review priorities
- any project-specific approval gates

## What Does Not Belong In The Adapter

The adapter should not contain:

- reusable collaboration rules
- generic state machine definitions
- task/result/review contracts
- universal handoff behavior
- generic review policy

Those belong in the core protocol.

## Required Sections

Every project adapter should include these sections:

### 1. Project Identity

Describe the project name, repository URL if relevant, and a short statement of what the repository is for.

### 2. Project Purpose

Explain the product or engineering goal in one or two paragraphs.

### 3. Repository Layout

Document the important folders, entry points, and the files that agents should read first.

### 4. Build And Verification

List the commands used to build, test, typecheck, lint, or otherwise verify changes.

### 5. High-Risk Areas

Call out the parts of the repository that need extra care, such as:

- authentication
- payments
- data migrations
- privacy-sensitive flows
- release pipelines
- production configuration

### 6. Project Constraints

Document constraints that change how work should be done, such as:

- stack limitations
- platform constraints
- approval requirements
- rollout rules
- dependency restrictions

### 7. Handoff Contacts

State where the next action should point and what files should be updated during a handoff.

### 8. Recommended Next Action

Describe the next concrete move for the current phase or task.

## Adapter Quality Rules

- Keep the adapter concise but complete enough to execute without guesswork.
- Prefer explicit commands over vague descriptions.
- Prefer file paths and module names over broad repository summaries.
- Update the adapter whenever project structure or verification behavior changes.
- Treat the adapter as a living project-specific index, not as a permanent design doc.

## Maintenance Rules

- If a project-specific fact keeps appearing in tasks, move it into the adapter.
- If a rule applies across multiple projects, move it into the core protocol.
- If an adapter starts explaining the workflow itself, it is probably too broad.
- If an adapter starts describing implementation internals in detail, it is probably too narrow.

## Acceptance Criteria

A project adapter is good enough when:

- a new contributor can find the repo's critical files quickly
- an implementation agent can choose the right verification commands without asking follow-up questions
- a reviewer can identify the main risk areas from the adapter alone
- the adapter does not require reading unrelated project docs to understand basic workflow boundaries

