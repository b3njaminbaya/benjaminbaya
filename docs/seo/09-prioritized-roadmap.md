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
4. ~~Set up Bing Webmaster Tools by importing from Search Console.~~ Done: benjaminbaya.com imported from Search Console.
5. Check: `curl -I https://benjaminbaya.com/Benjamin_Mweri_Baya_Resume.pdf` shows `x-robots-tag: noindex`.
6. Re-run Lighthouse or PageSpeed Insights on `/` (mobile) to record the post-change baseline.

Resolved on 28 October 2026:
- **Training crawlers:** allow all (no change to robots.txt).
- **`areaServed: Worldwide`:** confirmed; Benjamin works with clients outside Kenya.
- **FAQ:** not wanted anywhere on the site.
- **Results:** internal; case studies keep saying figures aren't published.
- **Project dates:** added as a `period` on every case study, taken from Benjamin's own commits in each repository and confirmed by him (deployed 28 October 2026).
- **Removed case studies** (Nyuzi, Ordo, CyberGuard AI, Morara Home Furniture, Precious Furniture Kenya): they will not return, so their redirects were deleted and the old URLs now return 404, which removes them from search results. The projects stay on GitHub.
- **Production checks after deploy:** new titles, `index.html` redirects, PDF headers, `llms.txt` and IndexNow key verified live; IndexNow submission accepted (HTTP 202).

## Short term

All four short-term items were completed on 28 October 2026:
- **Social images:** dedicated images for Teevexa Trace and TeeDesk; JPG copies for every other case study.
- **Homepage mobile speed:** the right-sized portrait brought it to performance 95–98 and LCP 2.0–2.2 s live (Google's "good" range). Inlining the stylesheet was tried and reverted, because it gave no measurable gain live.
- **ESLint:** working configuration; lint passes.
- **Teevexa service links:** added under Services.

## Longer term

- **Writing:** occasional articles written from real project experience, for example M-Pesa integration lessons or offline-first field apps. Only if you can keep them going; a few strong articles beat many thin ones.
- **Genuine third-party mentions:** client sites linking to their case study, the Jim Leech Fellowship profile, and listings such as Clutch or Google Business Profile for Teevexa. Earned, not bought.
