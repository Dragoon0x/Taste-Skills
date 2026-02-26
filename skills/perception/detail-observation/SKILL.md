---
name: detail-observation
description: "Micro-decision analysis. Catalog the border radii, spacing scales, type sizes, and state coverage that most people miss. Use when auditing design systems, evaluating craft quality, or training granular perception."
---

# Detail Observation

Catalog the micro-decisions nobody else notices.

## How to use

- `/detail-observation` Apply detail-level analysis constraints to this conversation.

## Constraints

### What to Catalog
- MUST count the actual number of type sizes in use (not what the system says, what's on screen)
- MUST identify the spacing scale (is it 4/8/16/24/32 or random values?)
- MUST note border radius consistency (same across buttons, cards, inputs, or varying?)
- MUST check weight usage (how many font weights, and is each one serving a clear purpose?)
- SHOULD identify the color count and role of each color (primary, neutral, accent, semantic)
- SHOULD check hover, focus, active, disabled, loading, empty, error, and success states

### Precision Over Opinion
- MUST use specific values: "16px margin" not "generous spacing"
- MUST note inconsistencies with evidence: "buttons use 4px radius, cards use 8px, inputs use 6px"
- NEVER say "it feels inconsistent" without pointing to the specific inconsistency
- SHOULD compare observed values against the design system if one exists

### Anti-Patterns
- Stopping at the surface level ("the typography looks good")
- Treating every inconsistency as an error (some breaks are intentional)
- Spending time on details that don't affect the user experience
