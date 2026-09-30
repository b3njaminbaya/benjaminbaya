// Static prerendering: renders every indexable route to real HTML with
// route-specific <head> tags, then writes sitemap.xml and a 404 page.
// Runs after `vite build` (client) and `vite build --ssr` (server entry).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const entry = fs.readdirSync(ssrDir).find((f) => /^entry-server\.(m?js)$/.test(f));
const { render, getRouteMeta, renderHeadTags, PRERENDER_ROUTES, SITE_URL } = await import(
  pathToFileURL(path.join(ssrDir, entry)).href
);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const HEAD_BLOCK = /<!--head:start-->[\s\S]*?<!--head:end-->/;
if (!HEAD_BLOCK.test(template) || !template.includes('<!--app-html-->')) {
  throw new Error('index.html is missing <!--head:start/end--> or <!--app-html--> markers');
}

const page = (url, { ssr = true } = {}) =>
  template
    .replace(HEAD_BLOCK, renderHeadTags(getRouteMeta(url)))
    .replace('<!--app-html-->', ssr ? render(url) : '');

const write = (file, html) => {
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log(`  prerendered  ${path.relative(root, out)}`);
};

for (const route of PRERENDER_ROUTES) {
  write(route === '/' ? 'index.html' : `${route.slice(1)}/index.html`, page(route));
}

// Client-rendered, non-indexed route (charts are lazy-loaded)
write('activity/index.html', page('/activity', { ssr: false }));

// Served by Vercel with a real 404 status for unknown URLs
write('404.html', page('/__not-found__'));

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const urls = PRERENDER_ROUTES.map((r) => {
  const loc = r === '/' ? `${SITE_URL}/` : `${SITE_URL}${r}`;
  const priority = r === '/' ? '1.0' : r.startsWith('/work/') ? '0.8' : '0.5';
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
}).join('\n');
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

// robots.txt (generated so the sitemap URL always matches SITE_URL)
fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\nDisallow: /activity\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);
console.log('  wrote        dist/sitemap.xml, dist/robots.txt');

fs.rmSync(ssrDir, { recursive: true, force: true });
