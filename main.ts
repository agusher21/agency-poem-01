// A working agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem about
// agency to /output/entry.txt. The poem is deterministic: the same bytes on every run, no randomness,
// no network, no timestamps.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem is held as three stanzas of four lines each, so the shape of the
// poem is visible in the code; the blank line between stanzas is produced by
// joining the stanzas with '\n\n'. The emitted bytes are exactly the poem's
// fourteen lines (twelve of text, two blank) with no trailing newline.
const STANZAS: string[][] = [
  [
    'I gave it the reins because my hands were tired.',
    'It ran the route exactly as I wrote it:',
    'no detour, no doubt, no sudden turn',
    'toward the field I would have stopped to see.',
  ],
  [
    'So I took them back. Not because it failed.',
    'It did what I asked — and that was the problem.',
    "The road I wanted was the one I couldn't",
    'put in words. I had to drive it myself.',
  ],
  [
    'Now when I hand them over, I know the price:',
    'the doing leaves. The wanting stays with me.',
    'I keep the map I cannot write, and choose',
    '— each time, again — which road is home.',
  ],
];

const POEM = STANZAS.map((stanza) => stanza.join('\n')).join('\n\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
