# 09 · Prioritised roadmap

## Done in this pass

- Titles and descriptions fixed on every indexable page.
- Structured data error fixed; Teevexa entity linked across both sites.
- Sitemap `lastmod` made truthful.
- Duplicate `index.html` URLs redirected.
- Resume PDFs canonicalised or set to noindex.
- Hero image right-sized on phones.
- Accessibility label fixed.
- `llms.txt` added (experiment).
- IndexNow script added.
- Automated SEO check added to every build.

## Immediate (after you push)

1. Push the commit so the changes go live.
2. Run `npm run indexnow --workspace=apps/web` once.
3. Search Console: resubmit `sitemap.xml`; run the Rich Results Test on `/` and one case study.
4. Set up Bing Webmaster Tools by importing from Search Console. It also feeds Copilot and other engines.
5. Check: `curl -I https://benjaminbaya.com/Benjamin_Mweri_Baya_Resume.pdf` shows `x-robots-tag: noindex`.
6. Re-run Lighthouse or PageSpeed Insights on `/` (mobile) to record the post-change baseline.

## Needs your input

| Item | Why it matters | What I need from you |
|---|---|---|
| Removed case studies: 307 or 308 | 308 tells search engines the move is permanent | Which ones will never return |

Resolved on 28 October 2026:
- **Training crawlers:** allow all (no change to robots.txt).
- **`areaServed: Worldwide`:** confirmed; Benjamin works with clients outside Kenya.
- **FAQ:** not wanted anywhere on the site.
- **Results:** internal; case studies keep saying figures aren't published.
- **Project dates:** added as a `period` on every case study, taken from Benjamin's own commits in each repository and confirmed by him (deployed 28 October 2026).
- **Production checks after deploy:** new titles, `index.html` redirects, PDF headers, `llms.txt` and IndexNow key verified live; IndexNow submission accepted (HTTP 202).

## Short term (1–3 months)

- **Social images:** dedicated images for the Teevexa Trace and TeeDesk case studies (currently the default).
- **Home LCP on mobile** (3.1 s lab): consider inlining critical CSS for the hero, or reducing the hero heading's font loading cost. Measure first with field data from Search Console's Core Web Vitals report once available.
- **ESLint:** add `eslint.config.js` so `npm run lint` works again. Code quality, not SEO.
- **Service queries:** link from the portfolio to the matching teevexa.com service pages, keeping service-intent pages on teevexa.com (see `03-keyword-and-content-map.md`).

## Longer term

- **Writing:** occasional articles written from real project experience, for example M-Pesa integration lessons or offline-first field apps. Only if you can keep them going; a few strong articles beat many thin ones.
- **Genuine third-party mentions:** client sites linking to their case study, the Jim Leech Fellowship profile, and listings such as Clutch or Google Business Profile for Teevexa. Earned, not bought.
