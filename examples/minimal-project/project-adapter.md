# Example Project Adapter

project name: Example Project
project repository: https://github.com/example/example-project
project purpose: A minimal example showing how a concrete repository fills the adapter fields.

repository layout:
  - entry points: src/main.ts
  - key docs: README.md, docs/architecture.md
  - key modules: src/server/, src/domain/

first read order:
  - docs/project-adapter.md
  - README.md
  - docs/architecture.md

build commands:
  - npm run build

test commands:
  - npm test

verification commands:
  - npm run typecheck
  - npm test

high-risk areas:
  - authentication
  - database migrations

project-specific constraints:
  - Keep changes backwards compatible with current API clients.

handoff contacts:
  - planning/review agent: updates task, next, review, and adapter files
  - implementation agent: updates task execution result only

review focus:
  - API compatibility
  - migration safety

recommended next action:
  - Fill in the adapter before creating the first execution task.

