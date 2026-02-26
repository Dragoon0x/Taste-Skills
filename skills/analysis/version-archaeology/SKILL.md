---
name: version-archaeology
description: "Study how products evolve over time using archived versions. The decisions that survive redesigns are the taste decisions. Use when understanding what's essential vs. cosmetic in a design, or learning from product evolution."
---

# Version Archaeology

The decisions that survive redesigns are the load-bearing walls.

## How to use

- `/version-archaeology` Apply evolutionary analysis to a product's design history.

## Constraints

### Analysis Method
- MUST compare at least 3 versions of the same product over time
- MUST document for each version: what changed, what stayed, what was tried and reverted
- MUST identify the persistent decisions (things that survived multiple redesigns)
- SHOULD note the ratio of cosmetic changes to structural changes

### What Persistence Means
- Elements that survive 3+ redesigns are core taste decisions
- Elements that change every redesign are cosmetic/trend-following
- Elements that were added and then removed reveal failed experiments
- MUST treat persistent decisions as evidence of what the team considers essential

### Anti-Patterns
- Only looking at the visual surface (layout changes) and missing structural persistence (information architecture)
- Assuming newer versions are always better
- Ignoring reverted changes (these are some of the most informative data points)
