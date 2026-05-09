# Project Adapter

The project adapter is the layer that turns the generic protocol into a specific project workflow.

Use `docs/project-adapter-spec.md` as the normative specification for how adapters should be structured.
Use `docs/initialization-workflow.md` for the sequence that turns the spec into a real project setup.

## Adapter Responsibilities

- Define project purpose and scope.
- Document repository structure.
- List build, test, and verification commands.
- Identify durable constraints and high-risk areas.
- Point to the current recommended next action.

## Adapter Rules

- Keep project facts out of the core protocol.
- Update the adapter when project structure or verification changes.
- Treat the adapter as the bridge between the generic protocol and the current repo.
- Keep the adapter rich enough to be useful, but not so broad that it becomes a project README substitute.
