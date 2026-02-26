---
name: spatial-rhythm
description: "Density, whitespace, rhythm, and how space communicates relationships between elements. Use when building layouts, evaluating spacing consistency, or diagnosing why a design feels cramped or empty."
---

# Spatial Rhythm

Space is not what's left over. It's active design material.

## How to use

- `/spatial-rhythm` Apply spatial design constraints to this conversation.

## Constraints

### Spacing System
- MUST use a consistent spacing scale (4, 8, 16, 24, 32, 48, 64 or similar)
- MUST use proximity to signal relationships: related things close, unrelated things far
- MUST ensure outer margins create breathing room proportional to the content
- NEVER use arbitrary spacing values. If it's not on the scale, it shouldn't exist.

### Density Rules
- MUST match density to use case: data tools can be dense, consumer products should breathe
- High density works when: users compare data, speed matters, users are experienced, long sessions
- Low density works when: content is consumed (not scanned), users are new, focus matters
- NEVER apply one density philosophy everywhere. Settings and marketing pages should feel different.

### Rhythm
- Regular rhythm (even spacing, consistent sizes) feels orderly. Good for data, tables, lists.
- Syncopated rhythm (mostly regular with intentional breaks) feels dynamic. Good for editorial, marketing.
- MUST ensure rhythm matches content energy. A to-do app with irregular rhythm is confusing.

### Whitespace
- Generous margins signal confidence ("we trust this content to speak for itself")
- MUST ensure whitespace accounts for 40-60% of total layout area in most well-designed products
- NEVER treat whitespace as wasted space. It separates, groups, emphasizes, and breathes.

### Anti-Patterns
- Spacing values that almost match but don't (15px next to 16px)
- Cramming content to "use the space" instead of letting the content breathe
- Identical spacing between all elements regardless of their relationship
