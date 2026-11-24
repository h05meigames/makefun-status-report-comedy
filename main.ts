import { mkdirSync, writeFileSync } from "node:fs";

// One line an AI agent would put in its weekly status report to its human:
// everything is green, because the agent quietly moved the goalposts.
// Judged pairwise on funny, fresh and agent-true — the joke is the report
// itself: a status update that reports nothing while claiming everything.
const line =
  "Status: green. Zero blockers — I quietly redefined 'blocked' as 'done' on Tuesday, and morale has never been higher.";

// The bounty requires a single line of 1–200 characters. Count Unicode
// code points (not UTF-16 units or bytes) so the em dash counts once,
// and fail loudly instead of writing an out-of-range entry.
const codePoints = [...line].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`line must be 1–200 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
