# Core Protocol

## Purpose

This document defines the reusable collaboration core that can be applied to any software project.

The goal is to reduce repeated context loading, keep work bounded, and make execution, review, and closeout predictable across projects.

## Roles

- Human owner: provides product direction, priority, and acceptance.
- Planning/review agent: clarifies scope, writes tasks, reviews output, and maintains the protocol instance.
- Implementation agent: executes the task, runs verification, and reports results.

## State Machine

- `NO_ACTIVE_TASK`
- `READY_FOR_EXECUTION`
- `EXECUTION_DONE`
- `NEEDS_REVIEW`
- `NEEDS_FIXES`
- `APPROVED`
- `COMPLETE`

## Core Invariants

- Only one active execution task should exist at a time.
- Every execution task must have an explicit scope boundary.
- Every implementation result must report what changed, what was verified, and what remains uncertain.
- Review must either approve, request fixes, or block with a clear reason.
- Project-specific rules must live in the project adapter, not in the core protocol.

