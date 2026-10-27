# 06 · Implementation log

All changes made on 28 October 2026. Nothing has been deployed to production yet; it goes live when this commit is pushed.

| File | Change | Finding |
|---|---|---|
| `apps/web/src/data/caseStudies.js` | Added `seoTitle` to all 9 case studies (55–60 characters) and `seoDescription` to Buzlin, Teevexa Trace and TeeDesk (139–146 characters) | F1, F3 |
| `apps/web/src/seo.js` | Homepage title and description shortened; resume title rewritten | F1, F3 |
| `apps/web/src/seo.js` | Case study meta uses `seoTitle` / `seoDescription` with fallbacks; `og:image:alt` uses the screenshot's alt text; image width/height declared for case study images | F1, F3, F9 |
| `apps/web/src/seo.js` | Removed invalid `Person.founder`; added a Teevexa `Organization` node (`@id` matching teevexa.com) with `founder` → Person; Person `worksFor` Buzlin Holdings Inc and Teevexa Ltd | F2 |
| `apps/web/src/seo.js` | CreativeWork: `@id`, `mainEntityOfPage`, `creator`, `isPartOf`, `inLanguage`, optional `dateModified` | F2 |
| `apps/web/src/seo.js` | New `getLastModified()` (real dates only) and `renderLlmsTxt()` | F4, AI |
| `apps/web/src/entry-server.jsx` | Exports the two new functions to the prerender script | |
| `apps/web/scripts/prerender.mjs` | Sitemap without build-date `lastmod` and `priority`; writes `llms.txt`; `/go/quote` already listed | F4, AI |
| `apps/web/scripts/check-seo.mjs` | **New.** Build-time SEO checks (errors fail the build) | F10 |
| `apps/web/scripts/indexnow.mjs` | **New.** Manual IndexNow submission of live sitemap URLs | |
| `apps/web/public/cce2e65c10b212c4e9a72d1b6363f80d.txt` | **New.** IndexNow ownership key (public by design) | |
| `apps/web/package.json` | `build` now ends with `check-seo.mjs`; new scripts `check:seo`, `indexnow` | F10 |
| `apps/web/vercel.json` | 308 redirects for `/index.html` paths; `Link: rel=canonical` header on `/resume.pdf`; `X-Robots-Tag: noindex` on the download PDF | F5, F6 |
| `apps/web/src/components/home/Hero.jsx` | Portrait `sizes` matches the real displayed width; `height` corrected to the file's 1494 pixels | F7 |
| `apps/web/src/components/layout/Navbar.jsx` | Removed mismatched `aria-label` on the logo link | F8 |
| `.gitignore` | Ignores `.vercel` (local Vercel CLI link folder created while testing a preview) | |
| `docs/seo/*` | This documentation set and `url-inventory.json` | |

## Decisions not to change things

- **No framework or rendering change:** prerendering already serves full HTML.
- **No URL changes:** existing URLs are clean and established.
- **No FAQ, reviews, or new service or location pages:** they would need facts not supplied yet (see `09-prioritized-roadmap.md`).
- **robots.txt AI policy unchanged:** it is a business decision (see `05-ai-search-strategy.md`).
- **Removed case study redirects:** kept at 307 in the first pass; deleted in the follow-up below.
- **ESLint configuration:** not created in the first pass; added in the follow-up below.

## Preview deployment

A protected Vercel **preview** (not production) was deployed from a local `vercel build` to verify the new redirects and headers. It is behind Vercel login and does not affect benjaminbaya.com.

## Follow-up changes

| File | Change |
|---|---|
| `apps/web/vercel.json` | Deleted the redirects for `/work/nyuzi`, `/work/ordo`, `/work/cyberguard-ai`, `/work/morara-home-furniture` and `/work/precious-furniture`. Those projects are permanently off the portfolio (they stay on GitHub), so the URLs now return 404 and search engines will drop them |
| `apps/web/src/data/caseStudies.js`, `apps/web/src/pages/CaseStudy.jsx` | Project `period` per case study, from the repositories' commit history, shown on each case study page |
| `apps/web/scripts/prerender.mjs` | Tried inlining the stylesheet into every page; reverted. Locally it improved LCP (2.3 s → 2.1 s), but live there was no measurable gain (performance 93–95 vs 95–98 before; LCP 2.0–2.3 s both ways), and it stopped the stylesheet being cached between pages |
| `apps/web/public/images/og/*` | Social preview images: JPG copies (1200×675) of every case study screenshot, because WebP previews don't show reliably on LinkedIn and some apps; new designed images for Teevexa Trace and TeeDesk (1200×630) |
| `apps/web/scripts/social-image-template.html` | Template for social images of case studies without a screenshot; regenerate with headless Chrome (command in the file) |
| `apps/web/src/seo.js`, `apps/web/src/data/caseStudies.js` | `og:image` uses `/images/og/`; `ogImage` field for studies without a screenshot; correct dimensions and alt text |
| `apps/web/scripts/check-seo.mjs` | New check: every indexable page has an `og:image` that exists in the build; warns if it isn't PNG or JPG |
| `apps/web/eslint.config.mjs`, `apps/web/package.json` | ESLint 9 flat config (React, hooks, Node scripts); `@eslint/js` and `globals` added as dev dependencies; `npm run lint` passes with 0 errors and 0 warnings. `rel="noopener"` without `noreferrer` is allowed on purpose, so destination sites still see the referral |
| `apps/web/src/data/site.js`, `apps/web/src/components/home/Services.jsx` | Line under Services linking to Teevexa's service pages (web development, mobile apps, e-commerce systems, business software, AI agents), so commercial searches are served by teevexa.com |
