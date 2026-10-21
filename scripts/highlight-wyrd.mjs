import { readFile, writeFile } from 'node:fs/promises';
import { createHighlighter } from 'shiki';
import rider from './rider-theme.mjs';

// Generate at development time; no syntax engine is sent to the browser.
const samples = JSON.parse(await readFile(new URL('../src/data/wyrdSamples.json', import.meta.url)));
const highlighter = await createHighlighter({ themes: [rider], langs: ['csharp'] });
const highlighted = Object.fromEntries(Object.entries(samples).map(([key, code]) => [key,
  highlighter.codeToTokens(code, { lang: 'csharp', theme: 'wyrd-rider' }).tokens.map(line =>
    line.map(({content, color}) => ({content, color})))
]));
await writeFile(new URL('../src/data/wyrdHighlighted.json', import.meta.url), JSON.stringify(highlighted) + '\n');
highlighter.dispose();
