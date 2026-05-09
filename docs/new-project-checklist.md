# New Project Checklist

Use this checklist when starting a new repository with the Agent Collaboration Protocol.

## Before You Start

- [ ] Confirm the new repository name and purpose.
- [ ] Decide whether the core protocol will be vendored into the repo or referenced from the protocol repository.
- [ ] Identify the first project owner for the new repository.
- [ ] Decide whether the first phase is discovery, setup, or implementation.

## Bootstrap The Repo

- [ ] Create or clone the new repository.
- [ ] Run the initializer: `npm run init:new-project -- --target <dir> --name <project-name>`.
- [ ] Add a `README.md` for the project.
- [ ] Add a `.agent/` directory or establish the equivalent protocol location.
- [ ] Make the core protocol files available to the project.
- [ ] Copy or link the project adapter template into the repo.

## Fill In The Project Adapter

- [ ] Set the project name.
- [ ] Write the project purpose.
- [ ] Document the repository layout.
- [ ] Add build commands.
- [ ] Add test commands.
- [ ] Add verification commands.
- [ ] List high-risk areas.
- [ ] Record project-specific constraints.
- [ ] Define handoff contacts.
- [ ] Record the first recommended next action.

## Set Up The Handoff Files

- [ ] Write `next.md` for the current starting phase.
- [ ] Ensure `context.md` contains the minimum project summary.
- [ ] Ensure `task.md`, `review.md`, and `opencode-result.md` use the expected contracts.
- [ ] Ensure `decisions.md` and `backlog.md` exist even if they start empty.

## Validate The Startup Shape

- [ ] Confirm the adapter is the single source of repository-specific context.
- [ ] Confirm the core protocol does not contain project-specific commands or paths.
- [ ] Confirm the first task can be written without ad hoc clarification.
- [ ] Confirm the first execution loop has explicit verification commands.

## Start The First Loop

- [ ] Write the first task.
- [ ] Review the first task for scope and risk.
- [ ] Execute the first task.
- [ ] Capture the result in `opencode-result.md`.
- [ ] Review the output.
- [ ] Update `next.md` for the next phase or next task.

## Done When

- [ ] A new contributor can orient themselves from the adapter and checklist alone.
- [ ] The repository can move from setup to execution without inventing new file roles.
- [ ] The first handoff is small, explicit, and reviewable.
