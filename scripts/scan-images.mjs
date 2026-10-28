// Rebuilds src/data/images.json from the WebP files in public/images/projects and public/images/moments
// (and the portrait), reading each file's real pixel size. No dependencies.
//
// Naming rule: <key>-<width>.webp, e.g. bader-villa-720.webp and bader-villa-1400.webp.
// Run: npm run images
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function webpSize(file) {
  const b = fs.readFileSync(file);
  if (b.toString('ascii', 0, 4) !== 'RIFF' || b.toString('ascii', 8, 12) !== 'WEBP') throw new Error(`Not a WebP file: ${file}`);
  const chunk = b.toString('ascii', 12, 16);
  if (chunk === 'VP8X') return { w: 1 + b.readUIntLE(24, 3), h: 1 + b.readUIntLE(27, 3) };
  if (chunk === 'VP8L') {
    const bits = b.readUInt32LE(21);
    return { w: (bits & 0x3fff) + 1, h: ((bits >> 14) & 0x3fff) + 1 };
  }
  if (chunk === 'VP8 ') return { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff };
  throw new Error(`Unknown WebP chunk in ${file}`);
}

const out = {};
for (const folder of ['projects', 'moments']) {
  const dir = path.join(root, 'public/images', folder);
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.webp')).sort()) {
    const m = f.match(/^(.*)-(\d+)\.webp$/);
    if (!m) {
      console.warn(`Skipped ${f}: name it <key>-<width>.webp`);
      continue;
    }
    const { w, h } = webpSize(path.join(dir, f));
    (out[m[1]] ??= { variants: [] }).variants.push({ src: `/images/${folder}/${f}`, w, h });
  }
}
const portrait = ['portrait-480.webp', 'portrait-900.webp'].map((f) => ({ src: `/images/${f}`, ...webpSize(path.join(root, 'public/images', f)) }));
out.portrait = { variants: portrait };

for (const e of Object.values(out)) {
  const seen = new Map();
  for (const v of e.variants.sort((a, b) => a.w - b.w)) seen.set(v.w, v);
  e.variants = [...seen.values()];
  const big = e.variants[e.variants.length - 1];
  e.w = big.w;
  e.h = big.h;
}
fs.writeFileSync(path.join(root, 'src/data/images.json'), JSON.stringify(out, null, 1) + '\n');
console.log(`images.json: ${Object.keys(out).length} images`);
