---
name: system-deconstruction
description: "Break a design system into its constituent decisions and evaluate each one. Use when auditing design systems, evaluating consistency, or understanding how a product maintains quality at scale."
---

# System Deconstruction

Take a design system apart. Understand every decision.

## How to use

- `/system-deconstruction` Apply system analysis constraints to this conversation.

## Constraints

### System Layers
- MUST identify and evaluate each layer independently:
  - Token layer: colors, spacing, radii, shadows, type scale
  - Component layer: buttons, inputs, cards, modals, navigation
  - Pattern layer: forms, tables, dashboards, settings, onboarding
  - Layout layer: grids, breakpoints, density modes
- MUST check consistency within each layer and between layers

### Quality Signals
- Consistent spacing scale across all components
- Type scale that follows a mathematical ratio
- Color palette with clear, non-overlapping roles
- Components that compose predictably
- States that are systematically covered (not ad-hoc)

### Quality Warnings
- More than 3 one-off components that don't fit the system
- Spacing values that almost match but don't (15px next to 16px)
- Colors that serve different semantic roles in different contexts
- Components that look similar but behave differently

### Anti-Patterns
- Evaluating a design system by its documentation instead of its actual usage
- Ignoring the gap between what the system defines and what the product actually ships
- Treating the system as sacred (systems should serve products, not the other way around)
