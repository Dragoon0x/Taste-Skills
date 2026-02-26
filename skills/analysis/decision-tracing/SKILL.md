---
name: decision-tracing
description: "Reverse-engineer why a design decision was made. Move from observation to inference. Use when studying products you admire, learning from competitors, or building analytical design thinking."
---

# Decision Tracing

Look at a decision. Figure out why it was made.

## How to use

- `/decision-tracing` Apply decision-tracing analysis to any design in this conversation.

## Constraints

### Trace Structure
- MUST follow: Observation > Decision > Probable Reason
- "The primary font is Inter" > "They chose a geometric sans-serif" > "Data-heavy product needing maximum legibility at small sizes with neutral personality"
- MUST generate at least 5 traces per design screen
- SHOULD acknowledge uncertainty: "probable reason" not "the reason"
- NEVER state intent as fact unless you have insider knowledge

### What to Trace
- Typeface selection and type system
- Color palette and color role assignments
- Layout structure and grid decisions
- Spacing and density choices
- Navigation architecture
- What's absent (what they chose NOT to include)

### Anti-Patterns
- Assuming the most flattering interpretation of every decision
- Tracing only visual decisions and ignoring structural ones
- Stating reasons as facts without marking them as hypotheses
