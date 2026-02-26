---
name: timing-feedback
description: "Response timing, acknowledgment, and making the interface feel alive. Every action deserves a response at the right speed. Use when designing interactions, evaluating responsiveness, or diagnosing why a product feels sluggish or dead."
---

# Timing & Feedback

Every user action deserves acknowledgment. The question is what kind and how fast.

## How to use

- `/timing-feedback` Apply timing and feedback constraints to interaction design in this conversation.

## Constraints

### Timing Scale
- **Instant (< 100ms):** Direct manipulation. Button presses, toggles, drags. Any delay here feels broken.
- **Fast (100-300ms):** Page changes, panel opens, filter applications. Most UI animation lives here.
- **Deliberate (300ms-1s):** Complex operations. Loading a view, running a search. User accepts the wait because the action feels significant.
- **Patient (> 1s):** Needs explicit feedback. Progress indicator, skeleton, status message. Silence here feels like failure.

### Feedback Types
- **Visual:** Color change, animation, state shift. Minimum viable feedback.
- **Spatial:** Element movement, expansion, collapse. Communicates where something went.
- **Informational:** Text confirmation, count update, status change. Communicates what happened.
- MUST provide at least one feedback type for every user action
- SHOULD mute the device and verify: can you still tell what's happening?

### Anti-Patterns
- Identical response timing for all actions regardless of significance
- No feedback for destructive actions (delete, remove, disconnect)
- Spinners where skeletons would preserve spatial context
- Feedback animations that outlast the actual operation
