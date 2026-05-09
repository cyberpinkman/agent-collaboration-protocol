# Scope Boundaries

## What This Protocol Is For

This protocol is for coordinating software work between a human owner, a planning/review agent, and an implementation agent.

It is intended for projects where:

- work needs to be split into bounded tasks
- execution needs a clear review loop
- project context should be reduced to a small reusable surface
- the team wants a repeatable handoff format across multiple repositories

Typical uses include:

- new product development
- feature work in existing applications
- refactors with review gates
- bug fixes that benefit from explicit execution and review contracts
- cross-project collaboration patterns that should behave the same way everywhere

## What This Protocol Is Not For

This protocol is not a product-specific playbook.

It does not define:

- business strategy
- product-market fit
- product requirements for a single app
- UI design standards for one codebase
- backend architecture for one company
- organization-specific approval policy
- model routing, inference, or agent runtime internals

Those belong in a project adapter or a separate project document.

## Notable Non-Goals

This protocol does not try to:

- replace a project README
- replace architecture documentation
- encode every repo's command set into the core
- prescribe implementation details for individual stacks
- solve local development environment setup in a universal way
- define a universal AI model provider layer

## Boundary Rule

If a rule changes when the repository changes, it is probably project-specific.

If a rule stays the same across repositories, it belongs in the core protocol.

If a rule describes the current repository's commands, paths, or domain terms, it belongs in the project adapter.

