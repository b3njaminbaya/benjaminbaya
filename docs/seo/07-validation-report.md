# 07 · Validation report

All checks run on 28 October 2026.

## Results

| Check | Method | Result |
|---|---|---|
| Production build | `npm run build` (apps/web) | Passes |
| SEO checks (all indexable pages) | `scripts/check-seo.mjs` | **Passed: 11 pages, 0 errors, 0 warnings** |
| The SEO check catches regressions | Ran it on a copy of `dist/` with injected faults: a noindex page in the sitemap, a duplicate title, missing alt text, a broken link, and a robots.txt block | **All 5 faults reported; exit code 1** |
| Structured data | Schema.org validator (validator.schema.org) on every indexable page | **0 errors, 0 warnings on all 11** (before: a `founder`/Person warning on every page) |
| Titles and descriptions | Rendered HTML audit of every page | All titles 55–60 characters (before: 66–101 on 10 of 11); descriptions 101–154 (before: up to 185); all unique |
| Canonicals | Rendered HTML audit | All 11 self-referencing and correct |
| H1 and headings | Rendered HTML audit | Exactly one H1 per page; no skipped heading levels |
| Images | Rendered HTML audit | All have alt text and width/height |
| Content without JavaScript | Rendered HTML audit | Home about 2,750 words; case studies 340–500; resume 635 |
| Hydration and client navigation | Chrome (Playwright) at 412, 390 and 1440 pixels | No console errors; title and canonical update when navigating home → Buzlin |
| Portrait image selection | Chrome at four device sizes | 412 px @1.75× and 360 px @2× load the 400-pixel file (before: 720); 390 px @3× and tablets load 720 as needed |
| Accessibility label | Lighthouse (local build) | `label-content-name-mismatch` resolved |
| New redirects and headers | Vercel preview via `vercel curl` | `/index.html` → 308 `/`; `/work/buzlin/index.html` → 308 `/work/buzlin`; `/resume.pdf` sends `Link: <https://benjaminbaya.com/resume>; rel="canonical"`; `llms.txt` and the IndexNow key are served; removed case studies still 307 |
| Live status codes (production, before deploy) | `curl` | Indexable pages 200; unknown paths and case variants 404; trailing slash 308; removed case studies 307 |
| Crawler access (production) | `curl` with each crawler's user agent | 200 and full HTML for Googlebot, Bingbot, OAI-SearchBot, GPTBot, PerplexityBot, ClaudeBot, CCBot |
| Live performance baseline (production, before deploy) | Lighthouse 12, simulated mobile and desktop | See `01-initial-audit.md`; SEO, Accessibility and Best Practices 100 on all tested pages |

## Not performed, or limited

- **Live performance after these changes:** they aren't deployed yet. Re-run Lighthouse or PageSpeed Insights after the push. The local server has no compression or CDN, so its score (81) is not comparable to production.
- **Field data (CrUX) and PageSpeed Insights API:** over quota during this work.
- **Google Rich Results Test:** no API. Run it manually on `/` and one case study after deploy.
- **Production `noindex` header on the download PDF:** preview deployments add `noindex` to everything, so check it on production after the push: `curl -I https://benjaminbaya.com/Benjamin_Mweri_Baya_Resume.pdf`.
- **Search Console and Bing data:** no access, so no indexation or query figures are claimed.
- **ESLint:** `npm run lint` fails before and after this work because there is no `eslint.config.js` (pre-existing).
