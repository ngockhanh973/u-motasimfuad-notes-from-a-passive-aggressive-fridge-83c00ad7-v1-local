// Notes From a Passive-Aggressive Fridge — v1 (local).
// The entry is a single note the fridge leaves on its door screen.
// The joke turns on one word doing two jobs at once: the peas are
// emotionally adopted and physically frozen stuck, and the fridge
// reports that as a proud little domestic victory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I have officially adopted the peas. They have lived in my freezer since March and fused into a single solid block. We are attached.";

// Gate: the note must be 1-200 characters and not only whitespace.
// Count by code point so multi-byte characters count as one each.
function validateEntry(text: string): number {
  const length = [...text].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  return length;
}

validateEntry(line);

// Write the note exactly as validated, with no trailing newline,
// so the file on disk is byte-identical to the validated line.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf-8");
