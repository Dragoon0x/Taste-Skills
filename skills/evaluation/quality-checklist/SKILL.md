---
name: quality-checklist
description: "Systematic design quality evaluation. Hierarchy, type, color, space, craft, system. Use when evaluating whether a design is ready to ship, running quality audits, or setting quality standards."
---

# Quality Checklist

A systematic pass through every dimension of design quality.

## How to use

- `/quality-checklist` Run a quality evaluation on any design in this conversation.

## Constraints

### Hierarchy
- [ ] Clear primary element on every screen
- [ ] Visual weight matches content priority
- [ ] No unintentional competing elements at the same hierarchy level
- [ ] Eye path follows the intended reading order

### Typography
- [ ] Type scale uses a consistent ratio
- [ ] Weight usage is systematic with named purposes
- [ ] Line height varies appropriately (tighter headlines, looser body)
- [ ] No more than 4-6 sizes per screen with clear justification
- [ ] Typeface matches product voice

### Color
- [ ] Every color has a clear, non-overlapping role
- [ ] Semantic colors are consistent everywhere
- [ ] Neutrals do 80-90% of the heavy lifting
- [ ] Sufficient contrast for accessibility (WCAG AA minimum)

### Space
- [ ] Spacing follows a consistent scale
- [ ] Proximity signals correct relationships
- [ ] Density matches the use case
- [ ] Margins create appropriate breathing room

### Craft
- [ ] Border radii consistent across element types
- [ ] Alignment pixel-perfect where intended
- [ ] All states covered: loading, empty, error, success, overflow
- [ ] Transitions purposeful and consistently timed

### System
- [ ] Design could scale to 10 more screens without breaking
- [ ] Another designer could extend this without asking questions
- [ ] Components are reusable, not one-offs
- [ ] System breaks are intentional, not accidental

### Anti-Patterns
- Checking only visual polish and ignoring information architecture
- Treating the checklist as pass/fail instead of diagnostic
- Running the checklist once and never revisiting
