# State Machine

The collaboration workflow should move through a small number of explicit states.

## States

- `NO_ACTIVE_TASK`: nothing is ready to execute.
- `READY_FOR_EXECUTION`: a bounded task is available.
- `EXECUTION_DONE`: implementation has completed and reported back.
- `NEEDS_REVIEW`: output exists and needs review.
- `NEEDS_FIXES`: review found blocking issues.
- `APPROVED`: review passed.
- `COMPLETE`: the phase is finished.

## Transition Rules

- The human owner or planning/review agent moves the workflow into `READY_FOR_EXECUTION`.
- The implementation agent moves the workflow to `EXECUTION_DONE`.
- The planning/review agent moves the workflow to `NEEDS_REVIEW`, `NEEDS_FIXES`, `APPROVED`, or `COMPLETE`.

