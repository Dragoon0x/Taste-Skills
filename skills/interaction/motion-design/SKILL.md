---
name: motion-design
description: "Animation as communication. Feedback, orientation, emphasis, delight. If motion doesn't serve one of these four purposes, it shouldn't exist. Use when evaluating animation quality, designing transitions, or deciding whether motion adds or subtracts."
---

# Motion Design

Animation serves four purposes. If it doesn't serve one of them, remove it.

## How to use

- `/motion-design` Apply motion design constraints to this conversation.

## Constraints

### The Four Purposes
1. **Feedback** (50-150ms): Confirms an action was received. Button press, toggle, form submit.
2. **Orientation** (200-400ms): Shows spatial relationships. Sidebar slides in, modal scales from trigger.
3. **Emphasis** (300-600ms): Draws attention. Notification pulse, new element fade-in. Rare and meaningful.
4. **Delight** (variable): Emotional effect. Loading personality, completion celebration. Brief, skippable, never blocking.
- MUST categorize every animation by purpose. If it fits none, remove it.

### Taste Signals in Motion
- Restraint. The best-animated interfaces are ones where you don't notice the animation.
- Consistent easing curves across the entire system.
- Physics-based movement (ease-out for arrival, ease-in for departure, never linear for UI).
- Duration proportional to purpose: more functional = faster.

### Anti-Patterns
- Loading animations that last longer than the actual load
- Page transitions that delay content access
- Hover effects on every element (motion should guide attention, not create noise)
- Bouncy/elastic easing on functional elements (playful easing is for celebrations, not navigation)
- Motion for motion's sake
