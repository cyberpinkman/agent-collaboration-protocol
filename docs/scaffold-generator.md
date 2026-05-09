# Scaffold Generator

## Purpose

The scaffold generator is the smallest practical tool that turns the protocol repository into a reusable project bootstrapper.

It exists to create the initial project shape quickly, without replacing the protocol or the project adapter.

## Responsibilities

- Copy the starter project structure into a new repository.
- Fill in the most important adapter placeholders.
- Create an initial `next.md` so the project has a clear starting point.
- Leave all deeper project decisions to the human owner and planning/review agent.

## Non-Goals

The generator should not:

- infer project architecture
- invent project-specific commands
- make product decisions
- create the first execution task automatically
- replace the project adapter as the source of truth

## Minimal Interface

The generator should accept:

- target directory
- project name
- optional repository URL
- optional short project purpose

## Output

The generator should produce:

- `README.md`
- `.agent/project-adapter.md`
- `.agent/next.md`
- the starter `.agent` files from `templates/new-project`

## Acceptance Criteria

The generator is good enough when:

- a new repository can be scaffolded from one command
- the output is readable without manual cleanup
- the generated adapter clearly points to follow-up handoff work
- the starter layout matches the protocol checklist

