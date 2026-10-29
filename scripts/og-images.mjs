// Builds 1200 × 630 JPEG share images (Open Graph) for projects that have a cover photo.
// LinkedIn and WhatsApp previews do not reliably show WebP, so these are JPEG.
// Needs ImageMagick (`magick` or `convert`). Run after changing a project cover: npm run og
// Output: public/og/<slug>.jpg and src/data/og.json (the list the page head reads).
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const images = JSON.parse(fs.readFileSync(path.join(root, 'src/data/images.json'), 'utf8'));
const src = fs.readFileSync(path.join(root, 'src/data/projects.ts'), 'utf8');

// Read slug → cover key pairs straight from the data file (each project lists slug before cover).
const pairs = [];
const re = /slug:\s*'([^']+)'|cover:\s*\{\s*key:\s*'([^']+)'/g;
let slug = null;
for (const m of src.matchAll(re)) {
  if (m[1]) slug = m[1];
  else if (slug) {
    pairs.push([slug, m[2]]);
    slug = null;
  }
}

const tool = (() => {
  for (const t of ['magick', 'convert']) {
    try {
      execFileSync(t, ['-version'], { stdio: 'ignore' });
      return t;
    } catch {
      /* try the next one */
    }
  }
  throw new Error('ImageMagick is required (magick or convert).');
})();

const outDir = path.join(root, 'public/og');
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });
const list = {};
for (const [s, key] of pairs) {
  const e = images[key];
  if (!e) continue;
  const big = e.variants[e.variants.length - 1];
  // Below 900 px the card would be a visible upscale; those projects keep the site card.
  if (big.w < 900) continue;
  const out = path.join(outDir, `${s}.jpg`);
  execFileSync(tool, [path.join(root, 'public', big.src), '-resize', '1200x630^', '-gravity', 'center', '-extent', '1200x630', '-strip', '-interlace', 'Plane', '-quality', '82', out]);
  list[s] = { src: `/og/${s}.jpg`, w: 1200, h: 630 };
}
fs.writeFileSync(path.join(root, 'src/data/og.json'), JSON.stringify(list, null, 1) + '\n');
console.log(`og images: ${Object.keys(list).length}`);
