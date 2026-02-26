---
name: color-systems
description: "Palette roles, restraint, semantic consistency, and when fewer colors means better design. Use when building color palettes, evaluating color usage, or diagnosing color-related design problems."
---

# Color Systems

Fewer colors, more discipline. Every color earns its place.

## How to use

- `/color-systems` Apply color system constraints to this conversation.

## Constraints

### Palette Roles
- MUST assign every color a clear role: structural (backgrounds, borders), semantic (error, success, warning), accent (primary action, emphasis), or decorative
- MUST ensure semantic colors are consistent everywhere (red always means the same thing)
- MUST keep neutrals doing 80-90% of the heavy lifting. Color is the accent, not the foundation.
- NEVER use the same color for conflicting purposes (red as both "featured" and "error")

### Restraint Rules
- A 2-3 color palette used with intention always outperforms a 7-color palette used without thought
- MUST evaluate: can any color be removed without losing information?
- SHOULD start with one accent color and add more only when the single accent can't carry the semantic load
- NEVER add a color because "it needs more color." Add a color because the information requires it.

### Relationships Over Swatches
- MUST evaluate colors in context, not in isolation (the same blue looks different next to warm gray vs. cool white)
- MUST check contrast ratios for accessibility (WCAG AA minimum)
- SHOULD evaluate how the palette works across light and dark modes

### Anti-Patterns
- Picking colors from a trend palette without evaluating fit
- Using color as the primary hierarchy tool (color should reinforce hierarchy, not create it alone)
- Decorative gradients that don't serve information or brand
- Different accent colors on different pages with no system behind the variation
