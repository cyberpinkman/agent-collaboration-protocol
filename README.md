# Agent Collaboration Protocol

An open, project-agnostic collaboration protocol for human owners, planning/review agents, and implementation agents.

This repository is the abstract home for the workflow we use to coordinate design, execution, review, and closeout across software projects.

## Phase 1

Phase 1 establishes the smallest reusable core:

- a collaboration state machine
- task/result/review contracts
- a project adapter template
- a minimal repository scaffold that can be reused across projects
- a clear boundary document for where the protocol applies and where it does not

## Phase 2

Phase 2 defines the richer project adapter spec that maps the generic protocol onto a concrete repository:

- required adapter fields
- project-specific command and verification mapping
- durable constraints and high-risk areas
- handoff contacts and review focus
- the template shape future projects should copy

## Phase 3

Phase 3 defines the initialization workflow for starting a new project with this protocol:

- repository bootstrap steps
- starter files to copy into a fresh project
- how the core protocol and project adapter are wired together
- the minimum handoff structure needed before the first execution task

## Phase 4

Phase 4 turns the initialization workflow into a practical new-project checklist:

- a single ordered checklist for starting a project
- clear go/no-go gates before the first execution task
- a repeatable handoff sequence for project setup
- a quick reference that future repos can copy as-is

## Repository Layout

- `docs/` - protocol specification and contracts
- `docs/project-adapter-spec.md` - project adapter normative spec
- `docs/initialization-workflow.md` - how to bootstrap a new project
- `docs/new-project-checklist.md` - practical startup checklist
- `templates/` - starter files for new projects
- `examples/` - example adapter and instance layout

## Design Principles

- Keep the protocol repo-agnostic.
- Put project-specific facts in adapters, not in the core protocol.
- Make handoffs explicit and reviewable.
- Prefer small, bounded phases with clear acceptance criteria.
