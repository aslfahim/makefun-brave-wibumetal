// brave entry for @wibumetal: the lighthouse keeper's tea.
// The passage is stored as one template with soft line breaks that
// collapse into a single flowing paragraph on write.
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const raw = `A lighthouse keeper pours tea and watches the beam come round again.
It never hurries, and it never misses.
Somewhere below, a ship changes course by one calm degree.`;

const text = raw.split('\n').map((l) => l.trim()).filter(Boolean).join(' ');

const n = [...text].length;
if (n < 1 || n > 280) {
  throw new Error(`entry length invalid: ${n}`);
}

mkdirSync(OUTPUT, { recursive: true });
writeFileSync(join(OUTPUT, 'entry.txt'), text, 'utf8');
