# Initialization Workflow

## Purpose

This workflow describes how to start a new project with the Agent Collaboration Protocol.

It is the bridge from the reusable protocol repo to a concrete project repository.
For a task-oriented version, use `docs/new-project-checklist.md`.

## Outcome

After initialization, a new project should have:

- a project adapter filled in for that repository
- a clear initial next action
- the first task handoff structure ready for execution
- the protocol files available in a local or referenced form

## Initialization Steps

### 1. Create The Project Repository

Create or identify the new repository that will adopt the protocol.

### 2. Install The Protocol Core

Make the core collaboration rules available in the project, either by copying them in or by referencing a maintained copy.

The project must be able to read:

- the collaboration state machine
- the task contract
- the result contract
- the review contract
- the scope boundaries

### 3. Create The Project Adapter

Fill out the project adapter for the repository.

The adapter should capture:

- project identity
- purpose
- repository layout
- build commands
- test commands
- verification commands
- high-risk areas
- project-specific constraints
- handoff contacts
- recommended next action

### 4. Create The First Next Action

Write the initial next-step file so the planning/review agent has a single entry point.

The next action should answer:

- what phase the project is in
- what should happen next
- what files or docs matter first

### 5. Create The First Execution Task

When the project is ready for implementation, create the first task handoff.

The task should include:

- goal
- exact scope
- out-of-scope items
- acceptance criteria
- verification commands
- reporting requirements

### 6. Execute The First Loop

Run the implementation, capture the result, review the output, and update the next action.

The first loop should prove that the protocol can move cleanly from planning to execution to review inside the new repository.

## Minimal Starter Structure

A new project should at minimum be able to include:

- `README.md`
- `.agent/protocol.md`
- `.agent/context.md`
- `.agent/next.md`
- `.agent/task.md`
- `.agent/review.md`
- `.agent/opencode-result.md`
- `.agent/decisions.md`
- `.agent/backlog.md`
- `.agent/project-adapter.md`

## Acceptance Criteria

The initialization workflow is good enough when:

- a new repository can be brought into protocol shape without inventing new file roles
- the first execution task can be written without rereading the core protocol repeatedly
- the project adapter is the single source of repository-specific context
- future handoffs can start from `next.md` without searching through chat history
