// Roast entry: writes one roast of our own agent to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = 'Our agent needed three revision agents, two safety checks, and a pep talk to submit a 74-character commit message, and it still calls itself the smart one.';

mkdirSync(outDir, { recursive: true });
// The roast deserves a fixed address, so it never gets lost in the drafts.
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, line + '\n', 'utf8');
