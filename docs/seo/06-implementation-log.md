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
- **Removed case study redirects kept at 307,** as previously chosen.
- **ESLint configuration not created:** fixing lint is outside SEO scope, and enabling it would surface unrelated warnings.

## Preview deployment

A protected Vercel **preview** (not production) was deployed from a local `vercel build` to verify the new redirects and headers. It is behind Vercel login and does not affect benjaminbaya.com.
