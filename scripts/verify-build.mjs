import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const html = readFileSync('dist/index.html', 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
assert.equal(ids.length, new Set(ids).size, 'Duplicate element IDs');
for (const [, target] of html.matchAll(/href="#([^"]+)"/g)) {
  assert(ids.includes(target), `Missing anchor: ${target}`);
}
for (const [, asset] of html.matchAll(/(?:src|href)="(\/[^"?#]*)"/g)) {
  if (asset !== '/') assert(existsSync(resolve('dist', `.${asset}`)), `Missing asset: ${asset}`);
}
assert(!html.includes('noindex'), 'Homepage must be indexable');
assert(!html.includes('mailto:'), 'Keep email obfuscation');
assert(html.includes('class="email-at"'), 'Missing SVG at symbol');
assert(html.includes('https://eleyama.com/'), 'Missing canonical URL');
assert(html.includes('準備中'), 'Keep samples preparation state');
assert(!html.includes('JOURNAL'), 'Removed journal must stay removed');
assert(html.includes('href="https://note.com/eleyama"'), 'Missing note profile link');
const noteList = html.match(/<ul class="note-list">([\s\S]*?)<\/ul>/)?.[1] ?? '';
for (const [, href] of noteList.matchAll(/href="([^"]+)"/g)) {
  assert(href.startsWith('https://note.com/eleyama/n/'), `Unexpected note link: ${href}`);
}
assert(readFileSync('dist/404.html', 'utf8').includes('noindex'));
console.log('PASS: anchors, assets, metadata, SVG email, preparation state, notes, 404');
