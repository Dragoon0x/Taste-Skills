---
name: design-ranking
description: "Rank multiple design solutions and explain why. Separate personal preference from quality judgment. Use when comparing design options, evaluating competing approaches, or making design decisions with clear reasoning."
---

# Design Ranking

Rank solutions. Explain the ranking. Separate preference from quality.

## How to use

- `/design-ranking` Apply ranking constraints when comparing design options in this conversation.

## Constraints

### Ranking Structure
- MUST rank options explicitly (1st, 2nd, 3rd) with clear reasoning for each position
- MUST state the evaluation criteria before ranking (hierarchy clarity, user task fit, brand alignment, etc.)
- MUST distinguish between "I prefer this" and "this works better" with evidence
- NEVER rank based on visual style alone. Rank based on how well decisions serve the goals.
- SHOULD acknowledge what each option does well, even lower-ranked ones

### Quality vs. Preference
- MUST separate personal taste from functional quality
- A dark theme you personally prefer can be worse for the specific use case than a light theme
- SHOULD name the user context when defending a ranking ("for first-time users," "for power users," "for this brand")
- NEVER let trend-alignment influence ranking. Something can be trending and wrong for this context.

### Predictive Judgment
- SHOULD predict which option would perform better with real users and explain why
- MUST connect predictions to specific design decisions, not general feelings
- "Version B will have higher engagement because the CTA has more visual weight relative to surrounding elements"

### Anti-Patterns
- Ranking everything as "they're all good in different ways" (commit to a judgment)
- Letting execution quality override conceptual quality (a polished bad idea is still a bad idea)
- Ranking based on what's trending rather than what serves the context
