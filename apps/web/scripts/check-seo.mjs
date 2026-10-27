// Build-time SEO checks on the prerendered output in dist/.
// Runs at the end of `npm run build`: errors fail the build, warnings are printed.
// Checks the rendered HTML (what crawlers receive without running JavaScript).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Optional argument: another output folder to check (used to test the checks themselves)
const dist = path.resolve(process.argv[2] || path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist'));
const errors = [];
const warnings = [];

const read = (rel) => fs.readFileSync(path.join(dist, rel), 'utf8');
const exists = (rel) => fs.existsSync(path.join(dist, rel));
const fileFor = (route) => (route === '/' ? 'index.html' : `${route.slice(1)}/index.html`);
const decode = (s) =>
  s?.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const pick = (html, re) => decode((html.match(re) || [])[1]);

// Indexable routes = the sitemap
const sitemap = read('sitemap.xml');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!locs.length) errors.push('sitemap.xml lists no URLs');
const origin = new URL(locs[0]).origin;
const routes = locs.map((l) => new URL(l).pathname.replace(/\/$/, '') || '/');

// robots.txt must not block any sitemap URL
const robots = read('robots.txt');
const disallowed = [...robots.matchAll(/^Disallow:\s*(\S+)/gm)].map((m) => m[1]);
for (const r of routes) if (disallowed.some((d) => r.startsWith(d))) errors.push(`${r}: in sitemap but blocked by robots.txt`);
if (!robots.includes(`Sitemap: ${origin}/sitemap.xml`)) errors.push('robots.txt does not point to the sitemap');

const seen = { title: new Map(), description: new Map() };

for (const route of routes) {
  const file = fileFor(route);
  if (!exists(file)) {
    errors.push(`${route}: in sitemap but ${file} was not built`);
    continue;
  }
  const html = read(file);
  const where = route;
  const title = pick(html, /<title>([\s\S]*?)<\/title>/);
  const description = pick(html, /<meta name="description" content="([^"]*)"/);
  const canonical = pick(html, /<link rel="canonical" href="([^"]*)"/);
  const robotsMeta = pick(html, /<meta name="robots" content="([^"]*)"/) || '';
  const body = (html.match(/<div id="root">([\s\S]*)<\/div>\s*<\/body>/) || [])[1] || '';

  if (!title) errors.push(`${where}: missing <title>`);
  else {
    if (title.length > 60) warnings.push(`${where}: title is ${title.length} characters (aim for 60 or fewer)`);
    if (title.length < 25) warnings.push(`${where}: title is only ${title.length} characters`);
    seen.title.set(title, [...(seen.title.get(title) || []), route]);
  }
  if (!description) errors.push(`${where}: missing meta description`);
  else {
    if (description.length > 160) warnings.push(`${where}: description is ${description.length} characters (aim for 155 or fewer)`);
    if (description.length < 70) warnings.push(`${where}: description is only ${description.length} characters`);
    seen.description.set(description, [...(seen.description.get(description) || []), route]);
  }
  const expected = route === '/' ? `${origin}/` : `${origin}${route}`;
  if (canonical !== expected) errors.push(`${where}: canonical is ${canonical || 'missing'}, expected ${expected}`);
  if (/noindex/.test(robotsMeta)) errors.push(`${where}: in sitemap but marked noindex`);

  if (!body.trim()) errors.push(`${where}: no prerendered content`);
  const h1s = body.match(/<h1\b/g)?.length || 0;
  if (h1s !== 1) errors.push(`${where}: ${h1s} <h1> elements (expected 1)`);

  for (const img of body.match(/<img\b[^>]*>/g) || []) {
    const src = (img.match(/src="([^"]*)"/) || [])[1];
    if (!/\balt="/.test(img)) errors.push(`${where}: image without alt text (${src})`);
    if (!/\bwidth="/.test(img) || !/\bheight="/.test(img)) warnings.push(`${where}: image without width/height (${src})`);
  }

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(m[1]);
      for (const node of data['@graph'] || [data]) if (!node['@type']) errors.push(`${where}: JSON-LD node without @type`);
    } catch {
      errors.push(`${where}: invalid JSON-LD`);
    }
  }

  // Internal links must resolve to a built page or file
  for (const m of body.matchAll(/<a\b[^>]*href="(\/[^"#?]*)/g)) {
    const href = m[1];
    if (href.startsWith('//')) continue;
    const clean = href.replace(/\/$/, '') || '/';
    const ok = exists(fileFor(clean)) || exists(clean.slice(1));
    if (!ok) errors.push(`${where}: broken internal link ${href}`);
  }
}

for (const [kind, map] of Object.entries(seen)) {
  for (const [value, list] of map) if (list.length > 1) errors.push(`Duplicate ${kind} on ${list.join(', ')}: "${value}"`);
}

// Pages that must stay out of search results
for (const file of ['404.html', 'activity/index.html', ...fs.readdirSync(path.join(dist, 'go')).map((k) => `go/${k}/index.html`)]) {
  if (!exists(file)) continue;
  const robotsMeta = pick(read(file), /<meta name="robots" content="([^"]*)"/) || '';
  if (!robotsMeta.includes('noindex')) errors.push(`${file}: should be noindex`);
}
for (const r of routes) if (r.startsWith('/go/') || r === '/activity') errors.push(`${r}: private route listed in sitemap`);

for (const w of warnings) console.warn(`  seo warning  ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`  seo error    ${e}`);
  console.error(`SEO check failed: ${errors.length} error(s), ${warnings.length} warning(s)`);
  process.exit(1);
}
console.log(`  SEO check passed: ${routes.length} indexable pages, ${warnings.length} warning(s)`);
