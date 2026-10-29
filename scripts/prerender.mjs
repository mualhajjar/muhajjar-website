// Renders every route to static HTML in dist/, plus 404.html, sitemap.xml and robots.txt.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const SITE = 'https://muhajjar.com';

const { render, allRoutes, pathFor, META_PIXEL_ID, META_PIXEL_INVALID, GOOGLE_SITE_VERIFICATION } = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href);
let template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

// Inline the stylesheet (about 7 KB gzipped) so first paint does not wait on a request.
template = template.replace(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/, (_, href) => {
  const css = fs.readFileSync(path.join(dist, href), 'utf8');
  return `<style>${css}</style>`;
});

function page(route) {
  const r = render(route);
  return template
    .replace('<!--lang-->', r.lang)
    .replace('<!--dir-->', r.dir)
    .replace('<!--app-head-->', r.head)
    .replace('<!--app-route-->', JSON.stringify(route))
    .replace('<!--app-html-->', r.html);
}

const routes = allRoutes();
for (const route of routes) {
  const url = pathFor(route.lang, route.page, route.slug);
  const file = path.join(dist, url, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(route));
}
fs.writeFileSync(path.join(dist, '404.html'), page({ lang: 'ar', page: 'notfound' }));
fs.mkdirSync(path.join(dist, 'en'), { recursive: true });
fs.writeFileSync(path.join(dist, 'en', '404.html'), page({ lang: 'en', page: 'notfound' }));

const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .filter((r) => r.lang === 'ar')
  .map((r) => {
    const ar = SITE + pathFor('ar', r.page, r.slug);
    const en = SITE + pathFor('en', r.page, r.slug);
    const alts = `\n    <xhtml:link rel="alternate" hreflang="ar" href="${ar}"/>\n    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="${ar}"/>`;
    return [ar, en].map((loc) => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>${alts}\n  </url>`).join('\n');
  })
  .join('\n');
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`Prerendered ${routes.length} pages + 404 pages, sitemap.xml, robots.txt`);
console.log(`Meta Pixel: ${META_PIXEL_ID ? 'on (' + META_PIXEL_ID + '), consent required' : 'off'} · Search Console meta tag: ${GOOGLE_SITE_VERIFICATION ? 'on' : 'off'}`);
if (META_PIXEL_INVALID) console.warn('WARNING: META_PIXEL_ID is set but is not a numeric Pixel ID, so the Pixel stays off. Check src/config.ts or the build variable.');
