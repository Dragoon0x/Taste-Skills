---
name: constraint-evaluation
description: "Understand the constraints a design was built under and evaluate quality within that context. Use when reviewing work that had limited time, budget, or team size, or when assessing whether constraints were handled well."
---

# Constraint Evaluation

Judge quality within context, not in a vacuum.

## How to use

- `/constraint-evaluation` Apply constraint-aware evaluation to this conversation.

## Constraints

### Identify the Constraints
- MUST attempt to identify: team size, timeline, technology, budget, business model, and target audience
- MUST evaluate quality relative to constraints, not against an ideal with unlimited resources
- A strong design under tight constraints demonstrates more taste than a mediocre design with unlimited time
- SHOULD note where constraints were handled gracefully and where they caused visible damage

### Essential vs. Incidental Quality
- MUST distinguish between decisions that are core to the experience and decisions that are execution details
- Core decisions (hierarchy, information architecture, primary flow) should hold up regardless of constraints
- Execution details (animation polish, micro-interactions, state coverage) scale with available resources
- NEVER excuse poor core decisions by pointing to tight constraints

### Anti-Patterns
- Judging a startup MVP against enterprise product standards
- Ignoring constraints entirely ("this should have better animation" for a 2-week project)
- Using constraints as an excuse for fundamentally broken hierarchy or flow
