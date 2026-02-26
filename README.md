# taste-skills

Agent skills for design taste and visual judgment. Help AI coding agents evaluate hierarchy, typography, color, spacing, interaction quality, and the invisible decisions that separate good design from great design before they ship.

> **⚠️ Experimental Software.** This project is in active development. Skills may change or break without notice. Not professional advice. All output requires human review. Do your own research. [Read full disclaimer →](./DISCLAIMER.md) | [Full terms →](./TERMS.md)

## Why

Agents can build interfaces. They can't tell if the interface is any good. They don't notice when the hierarchy is flat, the spacing is inconsistent, or the typography sends the wrong signal. These skills fill that gap.

Each skill is a set of opinionated constraints and patterns. When an agent uses them, it checks its own output against taste principles before shipping anything.

This is not a design system. Not a component library. This is the judgment layer.

## Install

```bash
# Add all skills
npx github:0xDragoon/taste-skills add --all

# Add a specific skill
npx github:0xDragoon/taste-skills add hierarchy-principles

# Add multiple skills
npx github:0xDragoon/taste-skills add critique-vocabulary type-selection spatial-rhythm

# List available skills
npx github:0xDragoon/taste-skills list

# Show skill details
npx github:0xDragoon/taste-skills info hierarchy-principles

# Custom directory
npx github:0xDragoon/taste-skills add --all --dir ./agent-skills
```

Skills are installed to `.taste-skills/` by default. Point your agent to this directory.

## Compatibility

Works with any agent that supports SKILL.md files:

- Claude Code
- Cursor
- Windsurf
- OpenCode
- Cline
- Codex
- Aider
- Continue

## Skills

### Perception (4)

| Skill | Description |
|---|---|
| `visual-audit` | The 10-second audit. Look at any design and name what's working and what's not, fast. |
| `detail-observation` | Micro-decision analysis. Catalog the border radii, spacing scales, and type sizes nobody else notices. |
| `cross-domain-seeing` | Pull design principles from architecture, fashion, film, and physical spaces into screen design. |
| `screenshot-surgery` | Annotate and map the anatomy of any design. Hierarchy, spacing, color roles, tension points. |

### Judgment (4)

| Skill | Description |
|---|---|
| `design-ranking` | Rank multiple solutions and explain why. Separate preference from quality. |
| `taste-vs-trends` | Tell the difference between decisions that age well and decisions that follow the crowd. |
| `constraint-evaluation` | Understand the constraints a design was built under and evaluate quality within that context. |
| `tradeoff-assessment` | Name what was prioritized, what was sacrificed, and whether the tradeoff was right. |

### Analysis (4)

| Skill | Description |
|---|---|
| `decision-tracing` | Reverse-engineer why a design decision was made. Observation to inference. |
| `absence-audit` | Notice what's deliberately missing. Restraint is a taste signal. |
| `version-archaeology` | Study how products evolve over time. The decisions that survive redesigns are the taste decisions. |
| `system-deconstruction` | Break a design system into its constituent decisions and evaluate each one. |

### Articulation (4)

| Skill | Description |
|---|---|
| `critique-vocabulary` | Precise language for design feedback. Ban vague words. Name what you actually see. |
| `design-rationale` | Defend a design decision to skeptical stakeholders with structure and evidence. |
| `audience-translation` | Explain the same design observation to a designer, a developer, and a non-technical stakeholder. |
| `written-critique` | Write a structured design review that someone can act on without follow-up questions. |

### Visual Language (4)

| Skill | Description |
|---|---|
| `hierarchy-principles` | Visual weight, attention order, and the decisions that guide the eye. |
| `color-systems` | Palette roles, restraint, semantic consistency, and when fewer colors means better design. |
| `spatial-rhythm` | Density, whitespace, rhythm, and how space communicates relationships. |
| `craft-signals` | Consistent radii, pixel-perfect alignment, state coverage, and the details that signal quality. |

### Typography (3)

| Skill | Description |
|---|---|
| `type-selection` | Choose typefaces based on voice and context, not trends. |
| `type-systems` | Scale, weight, line height, and tracking as a coherent system. |
| `type-as-signal` | Read a designer's taste through their typography decisions alone. |

### Interaction (3)

| Skill | Description |
|---|---|
| `timing-feedback` | Response timing, acknowledgment, and making the interface feel alive. |
| `flow-patterns` | Task sequences, progressive disclosure, and the pacing of an experience. |
| `motion-design` | Animation as communication. Feedback, orientation, emphasis, delight. |

### Reference Building (3)

| Skill | Description |
|---|---|
| `principle-tagging` | Tag references by principle, not aesthetic. Build a library you can actually search. |
| `library-architecture` | Build a reference system that returns the right reference in under 60 seconds. |
| `cross-pollination` | Draw from architecture, fashion, music, food, and industrial design to expand your taste range. |

### Team Practice (3)

| Skill | Description |
|---|---|
| `design-critique` | Run taste-informed design reviews using Observation → Principle → Question. |
| `daily-routines` | 15-minute daily taste exercises. Monday through Friday. Compound over time. |
| `teaching-taste` | Help other designers develop judgment without imposing your style. |

### Evaluation (3)

| Skill | Description |
|---|---|
| `self-assessment` | Diagnose your taste gaps across six skill areas. Know what to practice. |
| `quality-checklist` | Systematic design quality evaluation. Hierarchy, type, color, space, craft, system. |
| `field-notes` | Structured taste breakdowns of real products. The format for making taste legible. |

## How skills work

Each skill is a markdown file (SKILL.md) containing constraints and patterns that an agent can follow. When you add a skill to your project, it becomes part of the agent's context and guides its output.

```
.taste-skills/
├── hierarchy-principles/
│   └── SKILL.md
├── critique-vocabulary/
│   └── SKILL.md
├── type-selection/
│   └── SKILL.md
├── design-critique/
│   └── SKILL.md
├── spatial-rhythm/
│   └── SKILL.md
└── ...
```

You can edit any skill to fit your specific context. They're just markdown files.

## ⚠️ Important Notices

### Experimental Software

This project is **experimental**. It has not been independently audited, peer-reviewed, or formally verified. Skills, commands, and behaviors may change or break at any time without notice. Do not rely on this software for production-critical decisions without independent verification and qualified human oversight.

### Do Your Own Research (DYOR)

These skills encode opinionated design heuristics, not universal truths. They reflect patterns observed across specific contexts and the subjective experience of the contributors. Every product, market, user base, and aesthetic context is different. Any benchmarks, numbers, or reference points are illustrative approximations only.

- Test all design decisions against your own context and users
- Validate with your own research and testing
- Consult qualified professionals for business-critical design decisions
- No AI-generated output should ship without human review
- Do not treat any output as professional advice of any kind

### Not Professional Advice

Nothing in this software constitutes professional design, business, legal, financial, or strategic advice. The authors are not responsible for decisions made based on the output of this software.

### AI-Generated Output

All AI-generated output produced through these skills may be inaccurate, misleading, incomplete, or unsuitable for your context. Output should be reviewed, validated, and approved by a qualified human before use in any production or commercial context. The authors accept no responsibility for AI-generated content.

### No Guarantee of Results

Use of this software does not guarantee any specific outcome. Individual results depend on factors entirely outside the control of this software and its authors.

### Assumption of Risk

By using this software, you assume all risks associated with its use. See [DISCLAIMER.md](./DISCLAIMER.md) for full details.

## License

MIT License. See [LICENSE](./LICENSE).

Full disclaimer: [DISCLAIMER.md](./DISCLAIMER.md).

Full terms of use: [TERMS.md](./TERMS.md).

---

Built for agents that need to see design, not just build it.

**Experimental software. Not professional advice. DYOR. All output requires human review.**
