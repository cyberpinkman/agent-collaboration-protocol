# Agent Collaboration Protocol

An open, project-agnostic collaboration protocol for human owners, planning/review agents, and implementation agents.

This repository is the abstract home for the workflow we use to coordinate design, execution, review, and closeout across software projects.

## Phase 1

Phase 1 establishes the smallest reusable core:

- a collaboration state machine
- task/result/review contracts
- a project adapter template
- a minimal repository scaffold that can be reused across projects

## Repository Layout

- `docs/` - protocol specification and contracts
- `templates/` - starter files for new projects
- `examples/` - example adapter and instance layout

## Design Principles

- Keep the protocol repo-agnostic.
- Put project-specific facts in adapters, not in the core protocol.
- Make handoffs explicit and reviewable.
- Prefer small, bounded phases with clear acceptance criteria.

