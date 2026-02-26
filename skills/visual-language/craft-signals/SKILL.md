---
name: craft-signals
description: "Consistent radii, pixel-perfect alignment, state coverage, and the details that signal design quality. Use when polishing designs, auditing quality, or evaluating whether a design is ready to ship."
---

# Craft Signals

The details that separate 'designed' from 'well-designed.'

## How to use

- `/craft-signals` Apply craft quality constraints to this conversation.

## Constraints

### Consistency Checks
- MUST ensure consistent border radii from the same scale (4, 8, 12, 16, not 4 here and 5 there)
- MUST ensure alignment is pixel-perfect where intended. Near-alignment looks worse than deliberate offset.
- MUST ensure the same component looks and behaves the same everywhere it appears
- SHOULD ensure transitions share the same easing curve and follow a proportional duration scale

### State Coverage
- MUST cover all states: loading, empty, error, success, partial, overflow, truncation
- MUST design each state intentionally, not rely on browser defaults
- SHOULD ensure error messages are specific and actionable, not generic
- SHOULD ensure loading states give spatial hints about what's coming (skeletons over spinners)

### Transition Quality
- Feedback transitions (button press, toggle): 50-150ms, nearly instant
- Navigation transitions (page change, panel open): 200-400ms, noticeable but fast
- Emphasis transitions (notification, celebration): 300-600ms, deliberate
- NEVER let animation block content. If you have to wait for an animation to finish before reading, it's a bug.

### Anti-Patterns
- Inconsistent radii across component types
- Loading states that last longer than the actual load
- Error states that say "something went wrong" with no guidance
- Hover effects on every element (motion should guide attention, not create noise)
