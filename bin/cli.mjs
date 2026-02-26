#!/usr/bin/env node

import { resolve, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync, mkdirSync, cpSync, readdirSync, readFileSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SKILLS_DIR = resolve(__dirname, "..", "skills");
const VERSION = JSON.parse(
  readFileSync(resolve(__dirname, "..", "package.json"), "utf-8")
).version;

/* ── Colors ── */
const c = {
  reset: "\x1b[0m",
  dim: "\x1b[2m",
  bold: "\x1b[1m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
};

/* ── Skill Registry ── */
function getSkillRegistry() {
  const categories = readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const skills = [];
  for (const category of categories) {
    const catPath = join(SKILLS_DIR, category);
    const entries = readdirSync(catPath, { withFileTypes: true }).filter((d) =>
      d.isDirectory()
    );
    for (const entry of entries) {
      const skillPath = join(catPath, entry.name);
      const skillFile = join(skillPath, "SKILL.md");
      if (existsSync(skillFile)) {
        skills.push({
          name: entry.name,
          category,
          path: skillPath,
        });
      }
    }
  }
  return { categories, skills };
}

/* ── Commands ── */
function printHelp() {
  console.log(`
${c.bold}taste-skills${c.reset} ${c.dim}v${VERSION}${c.reset}
Agent skills for design taste and visual judgment.

${c.bold}Usage:${c.reset}
  npx github:0xDragoon/taste-skills add <skill-name>   Add a specific skill
  npx github:0xDragoon/taste-skills add --all           Add all skills
  npx github:0xDragoon/taste-skills list                List available skills
  npx github:0xDragoon/taste-skills info <skill-name>   Show skill details
  npx github:0xDragoon/taste-skills help                Show this message

${c.bold}Options:${c.reset}
  --dir <path>    Target directory ${c.dim}(default: .taste-skills)${c.reset}

${c.bold}Examples:${c.reset}
  ${c.dim}$ npx github:0xDragoon/taste-skills add hierarchy-principles${c.reset}
  ${c.dim}$ npx github:0xDragoon/taste-skills add critique-vocabulary type-selection${c.reset}
  ${c.dim}$ npx github:0xDragoon/taste-skills add --all${c.reset}
  ${c.dim}$ npx github:0xDragoon/taste-skills add --all --dir ./agent-skills${c.reset}
  ${c.dim}$ npx github:0xDragoon/taste-skills list${c.reset}

${c.dim}Experimental software. Not professional advice. DYOR. All output requires human review.${c.reset}
${c.dim}See DISCLAIMER.md and TERMS.md for full details.${c.reset}
`);
}

function listSkills() {
  const { categories, skills } = getSkillRegistry();

  console.log(
    `\n${c.bold}taste-skills${c.reset} ${c.dim}v${VERSION}${c.reset}\n`
  );
  console.log(
    `${c.dim}${skills.length} skills across ${categories.length} categories${c.reset}\n`
  );

  for (const category of categories) {
    const catSkills = skills.filter((s) => s.category === category);
    if (catSkills.length === 0) continue;

    console.log(
      `  ${c.bold}${category}${c.reset} ${c.dim}(${catSkills.length})${c.reset}`
    );
    for (const skill of catSkills) {
      console.log(`    ${c.cyan}${skill.name}${c.reset}`);
    }
    console.log();
  }

  console.log(
    `${c.dim}Run ${c.reset}npx github:0xDragoon/taste-skills add <name>${c.dim} to install a skill.${c.reset}\n`
  );
}

function showInfo(skillName) {
  const { skills } = getSkillRegistry();
  const skill = skills.find((s) => s.name === skillName);

  if (!skill) {
    console.log(
      `\n${c.red}Skill not found:${c.reset} ${skillName}\n`
    );
    console.log(
      `${c.dim}Run ${c.reset}npx github:0xDragoon/taste-skills list${c.dim} to see available skills.${c.reset}\n`
    );
    process.exit(1);
  }

  const content = readFileSync(join(skill.path, "SKILL.md"), "utf-8");
  console.log(
    `\n${c.bold}${skill.name}${c.reset} ${c.dim}[${skill.category}]${c.reset}\n`
  );
  console.log(content);
  console.log();
}

function addSkills(skillNames, targetDir) {
  const { skills } = getSkillRegistry();
  const isAll = skillNames.includes("--all");
  const toInstall = isAll ? skills : [];

  if (!isAll) {
    for (const name of skillNames) {
      const skill = skills.find((s) => s.name === name);
      if (!skill) {
        console.log(
          `\n${c.red}Skill not found:${c.reset} ${name}`
        );
        console.log(
          `${c.dim}Run ${c.reset}npx github:0xDragoon/taste-skills list${c.dim} to see available skills.${c.reset}\n`
        );
        process.exit(1);
      }
      toInstall.push(skill);
    }
  }

  if (toInstall.length === 0) {
    console.log(
      `\n${c.yellow}No skills specified.${c.reset} Use a skill name or --all.\n`
    );
    printHelp();
    process.exit(1);
  }

  const dest = resolve(process.cwd(), targetDir);

  console.log(
    `\n${c.bold}taste-skills${c.reset} ${c.dim}v${VERSION}${c.reset}\n`
  );

  let added = 0;
  let skipped = 0;

  for (const skill of toInstall) {
    const skillDest = join(dest, skill.name);
    const skillFile = join(skillDest, "SKILL.md");

    if (existsSync(skillFile)) {
      console.log(
        `  ${c.dim}skip${c.reset}  ${skill.name} ${c.dim}(already exists)${c.reset}`
      );
      skipped++;
      continue;
    }

    mkdirSync(skillDest, { recursive: true });
    cpSync(skill.path, skillDest, { recursive: true });
    console.log(
      `  ${c.green}added${c.reset} ${skill.name} ${c.dim}[${skill.category}]${c.reset}`
    );
    added++;
  }

  console.log(
    `\n${c.green}Done.${c.reset} ${added} added${skipped > 0 ? `, ${skipped} skipped` : ""}. ${c.dim}-> ${targetDir}/${c.reset}\n`
  );

  if (added > 0) {
    console.log(
      `${c.dim}Point your agent to the ${targetDir}/ directory to use these skills.${c.reset}`
    );
    console.log(
      `${c.dim}Experimental software. Not professional advice. DYOR. All output requires human review.${c.reset}`
    );
    console.log(
      `${c.dim}See DISCLAIMER.md and TERMS.md for full details.${c.reset}\n`
    );
  }
}

/* ── Parse Args ── */
const args = process.argv.slice(2);

if (args.length === 0 || args[0] === "help" || args[0] === "--help" || args[0] === "-h") {
  printHelp();
  process.exit(0);
}

if (args[0] === "--version" || args[0] === "-v") {
  console.log(VERSION);
  process.exit(0);
}

// Extract --dir flag
let targetDir = ".taste-skills";
const dirIdx = args.indexOf("--dir");
if (dirIdx !== -1 && args[dirIdx + 1]) {
  targetDir = args[dirIdx + 1];
  args.splice(dirIdx, 2);
}

const command = args[0];
const rest = args.slice(1);

switch (command) {
  case "add":
    if (rest.length === 0) {
      console.log(
        `\n${c.yellow}Specify a skill name or use --all.${c.reset}\n`
      );
      console.log(
        `${c.dim}Examples:${c.reset}`
      );
      console.log(
        `  ${c.dim}$ npx github:0xDragoon/taste-skills add hierarchy-principles${c.reset}`
      );
      console.log(
        `  ${c.dim}$ npx github:0xDragoon/taste-skills add --all${c.reset}\n`
      );
      process.exit(1);
    }
    addSkills(rest, targetDir);
    break;
  case "list":
  case "ls":
    listSkills();
    break;
  case "info":
    if (!rest[0]) {
      console.log(
        `\n${c.yellow}Specify a skill name.${c.reset} Example: npx github:0xDragoon/taste-skills info hierarchy-principles\n`
      );
      process.exit(1);
    }
    showInfo(rest[0]);
    break;
  default:
    console.log(
      `\n${c.red}Unknown command:${c.reset} ${command}\n`
    );
    printHelp();
    process.exit(1);
}
