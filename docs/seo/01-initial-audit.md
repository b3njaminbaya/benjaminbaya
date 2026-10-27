# 01 · Initial SEO audit

Audit date: 28 October 2026. Scope: this repository (`benjaminbaya.com`) and its live deployment.

## Summary

The site was already in good technical shape before this work. Every indexable page is prerendered to static HTML with its own title, description, canonical URL and structured data. Live Lighthouse scored 100 for SEO, Accessibility and Best Practices on all pages tested.

The problems found were specific rather than structural:

- Titles too long for search results.
- Three descriptions too long.
- A structured-data error (`Person.founder`).
- Sitemap dates that changed on every build.
- Duplicate URLs (`index.html` paths and two resume PDFs).
- An oversized hero image on phones.
- One accessibility label mismatch.

There are no products, blog, CMS or database-backed content, so those parts of the brief do not apply. See "Not applicable" below.

## Workspace architecture

| Part | Path | What it is | Indexable |
|---|---|---|---|
| Website | `apps/web` | Vite 6 + React 19 + React Router 7, hosted on Vercel (project `benjamin-baya`, root `apps/web`) | Yes |
| Contact form function | `apps/web/api/contact.mjs` | Vercel Function, `POST` only (Resend email) | No (not a page) |
| Chatbot API | `apps/api/server.js` | Express on Render: `/api/chat`, `/api/github-stats`, `/api/wakatime-stats`, `/health` | No (JSON API on a separate domain) |
| Shared config | `packages/tsconfig` | TypeScript base configs | n/a |

**Rendering.** Static prerendering at build time.
- `npm run build` runs a client build, then an SSR build of `src/entry-server.jsx`.
- `scripts/prerender.mjs` then renders each route to `dist/<route>/index.html` with route-specific `<head>` tags from `src/seo.js`.
- The browser hydrates the HTML (`src/main.jsx`).
- Content is therefore present without JavaScript. Verified: home has about 2,750 words in raw HTML, case studies 340–500.

**Content storage.** All content is in version-controlled JavaScript data files:
- `src/data/caseStudies.js`: 9 case studies
- `src/data/services.js`: services
- `src/data/profile.js`: timeline, stack, credentials
- `src/data/resume.js`
- `src/data/site.js`: identity, URLs, contact

There is no CMS or database. Publishing means editing these files and deploying.

**Metadata.** Generated centrally by `getRouteMeta()` and `renderHeadTags()` in `src/seo.js`, and kept in sync on client-side navigation by `src/components/layout/Layout.jsx`.

## Existing SEO implementation (preserved)

- Per-route `<title>`, description, canonical, robots meta, Open Graph and Twitter tags.
- JSON-LD `@graph`: Person, ProfessionalService (with service catalogue) and WebSite on the homepage; CreativeWork, BreadcrumbList and Person on case studies; Person on the resume.
- `sitemap.xml` and `robots.txt` generated from the route list (`PRERENDER_ROUTES`).
- Real 404 status for unknown URLs (`404.html`), `noindex` on `/activity`, `/go/*` and the 404 page.
- Permanent redirects for `www` and the old Vercel domain; trailing slashes redirect (308) to the clean URL.
- Removed case studies redirect (307) to `/#work`.
- Images in WebP with `srcset`, `width`/`height` and alt text; self-hosted font with preload; HSTS and `nosniff` headers.
- Cookieless Vercel Web Analytics, with CTA clicks counted through `/go/*` pages.
- Google Search Console verified; sitemap read successfully (11 pages discovered).

## Findings

| # | Severity | Finding | Evidence | Fix |
|---|---|---|---|---|
| F1 | High | Case study titles were 83–101 characters; Google shows about 60, so every result was cut off | `seo.js` built titles as `${study.title} - Case Study \| Benjamin Baya`; audit: 83–101 characters on all 9 | Per-study `seoTitle` (55–60 characters) with a safe fallback |
| F2 | High | Invalid structured data: `founder` used on `Person` (only valid on Organization) | Schema.org validator: `UNKNOWN_FIELD founder, Person` on every page | Teevexa modelled as `Organization` with `founder → Person`, same `@id` as teevexa.com |
| F3 | Medium | Homepage description 185 characters; TeeDesk 172; Buzlin and Trace 160 | rendered `<meta name="description">` | Shortened to 154 / 146 / 139 / 141 |
| F4 | Medium | Sitemap `<lastmod>` was the build date on every URL, so it changed on every deploy | `prerender.mjs`: `new Date()` | Removed; optional real `updated` date per case study |
| F5 | Medium | Duplicate URLs: `/index.html` and `/work/<slug>/index.html` returned 200 | live `curl` | 308 redirects to clean URLs (`vercel.json`) |
| F6 | Medium | Two resume PDFs (`/resume.pdf`, `/Benjamin_Mweri_Baya_Resume.pdf`) indexable alongside the `/resume` page | live `curl`, no headers | Canonical header on `/resume.pdf` → `/resume`; `noindex` on the download copy |
| F7 | Medium | Hero portrait served at 720 pixels to most phones (Lighthouse: about 160 KB wasted) | `sizes="… 70vw"` vs about 52% actual width | Corrected `sizes`; phones at about 2× now get the 400-pixel file |
| F8 | Low | Navbar logo link: `aria-label` did not match visible text (Lighthouse `label-content-name-mismatch`) | `Navbar.jsx` | Removed the redundant `aria-label` |
| F9 | Low | Case study `og:image:alt` always described the person, not the screenshot; no image dimensions for case study images | rendered tags | Uses each study's `imageAlt`; 1600×900 dimensions added |
| F10 | Low | No automated guard against SEO regressions (duplicate titles, noindex in sitemap, broken links) | no tests in repo | `scripts/check-seo.mjs` runs in every build |
| F11 | Low | ESLint 9 installed but no `eslint.config.js`, so `npm run lint` fails | `npx eslint` error | Not changed; listed in roadmap |
| F12 | Info | Trace and TeeDesk case studies share the default social image | `seo.js` falls back to `og-image.png` when no screenshot | Roadmap (needs a designed image) |
| F13 | Info | The portfolio and teevexa.com could compete for the same service queries | both describe the same services | Strategy decision, see `03-keyword-and-content-map.md` |

Performance baseline (live, Lighthouse 12 run locally, simulated throttling):

| Page | Mobile | Desktop |
|---|---|---|
| Home | Perf 91 · LCP 3.1 s · CLS 0 · TBT 40 ms | Perf 100 · LCP 0.6 s |
| Becof case study | Perf 100 · LCP 1.5 s | Perf 100 · LCP 0.5 s |
| Resume | Perf 100 · LCP 1.2 s | Perf 100 · LCP 0.4 s |

The PageSpeed Insights API was over its daily quota, and no field (CrUX) data was retrieved. These are lab figures only.

## AI-search accessibility (baseline)

- **Crawler access:** `robots.txt` allows all crawlers. Live tests returned 200 with full HTML for Googlebot, Bingbot, OAI-SearchBot, GPTBot, PerplexityBot, ClaudeBot and CCBot. No firewall or bot blocking was found.
- **No JavaScript needed:** all key facts (services, case studies, location, contact) are in server-rendered HTML.
- **`llms.txt`:** did not exist.

## Not applicable to this site

- **Products, product categories, Product/Offer schema, Merchant feeds:** the site sells no products.
- **Blog, articles, tags, pagination, Article schema, author pages:** there is no blog.
- **CMS SEO fields and editorial workflow:** there is no CMS; content lives in data files (see `08-seo-maintenance-guide.md`).
- **Reviews and AggregateRating:** there are no genuine reviews on the site, so none are marked up.
- **Location pages:** one genuine location (Nairobi, Kenya); no others are warranted.
- **Search or filter URLs:** none exist.

## Limits of this audit

- **No Search Console or Bing Webmaster data:** no account access, so there are no query, impression or click figures and no indexation reports.
- **No field performance data:** no CrUX data, and PageSpeed Insights was over quota.
- **Other domains not edited here:** teevexa.com and becoforganicchemicals.com are separate repositories and are not part of this deployment.
