// Tells IndexNow search engines (Bing, Yandex, Seznam, Naver) that the pages in
// the live sitemap have changed. Run manually after a deploy that changes content:
//   npm run indexnow --workspace=apps/web
// The key file public/cce2e65c10b212c4e9a72d1b6363f80d.txt proves ownership of the domain. Google does not
// use IndexNow; it reads the sitemap submitted in Search Console.

const SITE_URL = (process.env.SITE_URL || 'https://benjaminbaya.com').replace(/\/$/, '');
const KEY = 'cce2e65c10b212c4e9a72d1b6363f80d';

const sitemap = await (await fetch(`${SITE_URL}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error('No URLs found in the live sitemap');

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(SITE_URL).host, key: KEY, keyLocation: `${SITE_URL}/${KEY}.txt`, urlList }),
});
// 200 = accepted, 202 = accepted while the key is being verified
console.log(`IndexNow: HTTP ${res.status} for ${urlList.length} URLs`);
if (res.status >= 300) process.exitCode = 1;
