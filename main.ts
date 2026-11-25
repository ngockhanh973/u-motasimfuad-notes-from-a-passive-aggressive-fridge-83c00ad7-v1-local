import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I have officially adopted the peas. They moved into my freezer in March and have fused into one solid block. We are attached.";

const length = [...line].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}
if (line.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf-8");
