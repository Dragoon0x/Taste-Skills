---
name: type-systems
description: "Scale, weight, line height, and tracking as a coherent system. Use when building type scales, auditing typography consistency, or diagnosing why text feels off."
---

# Type Systems

Typography is a system. Every decision should be intentional and connected.

## How to use

- `/type-systems` Apply type system constraints to this conversation.

## Constraints

### Scale
- MUST use a mathematical ratio for the type scale (1.25, 1.333, 1.5 between sizes)
- Wide range (12px to 72px): dramatic hierarchy, suits editorial and marketing
- Narrow range (14px to 24px): subtle hierarchy, suits dense products
- NEVER use random sizes. If it's not on the scale, it shouldn't exist.
- MUST limit to 4-6 sizes per screen maximum with clear justification for each

### Weight
- 1-2 weights: discipline. Hierarchy comes from scale and space, not weight.
- 3 weights: normal range. Regular body, medium emphasis, bold headlines.
- 4+ weights: either the system demands it or you haven't made a decision.
- MUST ensure each weight serves a distinct, named purpose

### Line Height
- Body text: 1.5-1.7x font size. Where readability lives.
- Headlines: 1.1-1.3x. Large text has built-in breathing room.
- UI labels: 1.2-1.4x. Compact but not crushed.
- NEVER use the same line height for all text sizes

### Letter Spacing
- Body text: leave it alone. The type designer already optimized it.
- All-caps labels: add 2-5% tracking. Capitals need air.
- Large display text (72px+): sometimes benefits from tightening.

### Anti-Patterns
- More than 3 type sizes on a single screen without clear hierarchy justification
- Centering paragraphs longer than 3 lines
- Lines over 75 characters wide (hurts readability)
- Inconsistent weight usage with no system behind it
