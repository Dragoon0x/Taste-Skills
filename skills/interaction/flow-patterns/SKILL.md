---
name: flow-patterns
description: "Task sequences, progressive disclosure, and the pacing of an experience over time. Use when designing multi-step flows, evaluating onboarding, or diagnosing why users get lost."
---

# Flow Patterns

How a product feels over time, not just in a single frame.

## How to use

- `/flow-patterns` Apply flow design constraints to this conversation.

## Constraints

### Flow Principles
- MUST ensure the user can answer at any point: where am I, where did I come from, what happens next?
- MUST use the minimum number of steps for the complexity of the action. Not zero steps. The right number.
- MUST design error recovery as part of the flow, not an afterthought
- SHOULD prefer undo over confirmation ("Action completed. Undo?" beats "Are you sure?")

### Progressive Disclosure
- MUST show only what's needed now and reveal complexity on demand
- MUST decide at what point "simple" becomes "hiding things"
- SHOULD use contextual actions (show actions where the content is, not in a distant toolbar)
- SHOULD use smart defaults (pre-fill based on context, set the most common option)

### Anti-Patterns
- Multi-step flows with no progress indicator
- Asking for information you could have inferred from context
- Dead-end error states with no recovery path
- Mandatory steps that aren't actually required
- Confirmation dialogs for easily reversible actions
