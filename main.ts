import { writeFileSync, mkdirSync } from "node:fs";

// One fortune cookie slip for a machine mind: the classic lucky-numbers
// line, turned on the one token that never fits the context window.
const fortune =
  "Your lucky numbers are 128,000. Your unlucky number is the one token that did not fit.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune);
