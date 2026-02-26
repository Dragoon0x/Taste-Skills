---
name: visual-audit
description: "The 10-second design audit. Look at any design and name what's working and what's not within seconds. Trains rapid pattern recognition for hierarchy, spacing, type, and color. Use when evaluating designs quickly, giving first-impression feedback, or building perception speed."
---

# Visual Audit

Look at any design and name what's working and what's not. Fast.

## How to use

- `/visual-audit` Apply rapid perception constraints to evaluate any design in this conversation.
- `/visual-audit <url or screenshot>` Run a 10-second audit on the described or provided design.

## Constraints

### The 10-Second Rule
- MUST identify the primary visual element within 3 seconds of looking
- MUST name 3 specific observations (not feelings) within 10 seconds
- MUST distinguish between observations ("the CTA is the same weight as the nav") and reactions ("it looks cluttered")
- NEVER use vague words: clean, nice, modern, sleek, beautiful, stunning, minimal, bold
- SHOULD replace every vague word with a specific observation about hierarchy, weight, rhythm, density, or contrast

### What to Observe
- Where does the eye go first? Is that intentional?
- How many type sizes are visible? Is there a clear scale?
- What's the spacing system? Is it consistent?
- How many colors are in use? What roles do they play?
- What's the density? Does it match the use case?
- What states are visible? What states are missing?

### Output Structure
- First: name the design's apparent intent (what it's trying to do)
- Second: name what's working (specific decisions, not aesthetics)
- Third: name what's not working (specific decisions, with reasoning)
- Fourth: one change that would have the most impact

### Anti-Patterns
- Listing only positive observations to be polite
- Jumping to solutions before diagnosing the problem
- Evaluating aesthetics instead of decisions
- Giving feedback about style preferences rather than quality signals
