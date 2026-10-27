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
const { render, getRouteMeta, renderHeadTags, getLastModified, renderLlmsTxt, PRERENDER_ROUTES, SITE_URL } = await import(
  pathToFileURL(path.join(ssrDir, entry)).href
);

// Inline the stylesheet into every page. It is small (about 9 KB compressed),
// and inlining removes a render-blocking request, so the first paint (and the
// hero headline, the homepage's largest paint) no longer waits for it.
const stylesheetTag = /<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/;
let template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const cssMatch = template.match(stylesheetTag);
if (cssMatch) {
  const css = fs.readFileSync(path.join(dist, cssMatch[1]), 'utf8');
  template = template.replace(stylesheetTag, () => `<style>${css}</style>`);
}
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

// Outbound redirect pages — client-rendered, not indexed
for (const key of ['consultation', 'whatsapp', 'quote']) {
  write(`go/${key}/index.html`, page(`/go/${key}`, { ssr: false }));
}

// Served by Vercel with a real 404 status for unknown URLs
write('404.html', page('/__not-found__'));

// sitemap.xml
const urls = PRERENDER_ROUTES.map((r) => {
  const loc = r === '/' ? `${SITE_URL}/` : `${SITE_URL}${r}`;
  const lastmod = getLastModified(r);
  return `  <url>\n    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n  </url>`;
}).join('\n');
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

// robots.txt (generated so the sitemap URL always matches SITE_URL)
fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\nDisallow: /activity\nDisallow: /go/\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);
// llms.txt: optional plain-text summary for AI tools (see renderLlmsTxt)
fs.writeFileSync(path.join(dist, 'llms.txt'), renderLlmsTxt());
console.log('  wrote        dist/sitemap.xml, dist/robots.txt, dist/llms.txt');

fs.rmSync(ssrDir, { recursive: true, force: true });
