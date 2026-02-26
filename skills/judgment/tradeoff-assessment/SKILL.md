---
name: tradeoff-assessment
description: "Name what was prioritized, what was sacrificed, and whether the tradeoff was right. Every design decision trades something. Use when evaluating design decisions, defending choices, or helping teams understand what they're giving up."
---

# Tradeoff Assessment

Name what was chosen. Name what was lost. Decide if the trade was worth it.

## How to use

- `/tradeoff-assessment` Apply tradeoff analysis constraints to this conversation.

## Constraints

### Tradeoff Structure
- MUST name both sides: "This prioritizes X at the cost of Y"
- MUST evaluate whether the tradeoff serves the primary user goal
- MUST avoid false binaries. Often there's a third option that reduces the tradeoff.
- NEVER present a decision as having no downsides. Every choice trades something.

### Common Design Tradeoffs
- Density vs. clarity (more information per screen vs. easier scanning)
- Speed vs. polish (shipping fast vs. refining details)
- Flexibility vs. simplicity (more options vs. fewer decisions)
- Consistency vs. context (following the system vs. breaking it for a specific case)
- Innovation vs. convention (novel interactions vs. familiar patterns)

### Evaluation
- SHOULD rate tradeoffs as: well-made (right thing was prioritized), questionable (unclear if the right thing was prioritized), or poor (wrong thing was prioritized)
- MUST explain the rating with reference to user goals, not personal preference
- SHOULD suggest how to mitigate the downside of a well-made tradeoff

### Anti-Patterns
- Pretending a design has no tradeoffs
- Treating every tradeoff as equally important (some are critical, some are cosmetic)
- Optimizing for secondary concerns while neglecting primary ones
