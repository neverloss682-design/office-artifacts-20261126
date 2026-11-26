import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Office Artifacts: The One-Line Placard Contest — a museum placard for an
// ordinary office object, treated as an ancient artifact. The conceit is a
// reversal: correction fluid, made to fix typos, was used by court scribes
// to delete disgraced officials from history itself. The punchline lands in
// the driest line on the label: the bottle is half empty, the dynasty is not.
const ENTRY =
  "Correction Fluid, c. 1400 BCE. Court scribes used it to delete disgraced officials from history. The bottle is half empty; the dynasty is not. Donor: the Ministry of Erasures.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate ourselves the same way the sealed scorer does: UTF-8 text of 1 to
// 180 characters, not only white space. This entry is 175 characters.
if (ENTRY.length < 1 || ENTRY.length > 180 || !ENTRY.trim()) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-180`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
