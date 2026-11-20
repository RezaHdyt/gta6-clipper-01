// gta6-clipper-01 entrypoint: hands VIDEO.json to the grader.
// Reads VIDEO.json from the bot directory, checks it actually names a
// video URL, and writes it to the output directory, byte for byte.
// No network, no clock, no other files.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "VIDEO.json");
const parsed = JSON.parse(readFileSync(source, "utf8")) as unknown;
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string" ||
  (parsed as { url: string }).url.length === 0
) {
  throw new Error("VIDEO.json must be a JSON object with a non-empty url string");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "VIDEO.json"));
