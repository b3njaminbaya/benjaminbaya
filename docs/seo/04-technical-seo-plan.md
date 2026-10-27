# 04 · Technical SEO plan and decisions

Each item says what was decided and why. Status: **Done** (implemented and verified), **Open** (recommended, not implemented).

## Crawling and indexation

| Item | Decision | Status |
|---|---|---|
| Indexable set | The sitemap is generated from `PRERENDER_ROUTES` in `src/seo.js` (home, 9 case studies, resume), so a page cannot be prerendered without being listed, or listed without being built | Done (pre-existing) |
| Sitemap `lastmod` | Removed the build-date value, which changed on every deploy and taught search engines to ignore it. `lastmod` is now emitted only from a real `updated` date on a case study | Done |
| Sitemap `priority` | Removed; Google ignores it | Done |
| robots.txt | Keep: allow all, block `/activity` and `/go/`, point to the sitemap. It is not used for security: those pages contain nothing private and also carry `noindex` | Done (pre-existing) |
| `index.html` duplicates | 308 redirects `/index.html` → `/` and `/<path>/index.html` → `/<path>` in `vercel.json` | Done (verified on preview) |
| Resume PDFs | `/resume.pdf`: HTTP `Link: rel="canonical"` → `/resume`. `/Benjamin_Mweri_Baya_Resume.pdf` (download copy): `X-Robots-Tag: noindex` | Done (verified on preview) |
| Trailing slash, www, http | Already redirect with 308 | Done (pre-existing, verified live) |
| Query parameters | Canonical tag to the clean URL; no parameter-driven pages exist | Done (pre-existing) |
| Removed case studies | Keep 307 to `/#work`, chosen so a case study can return. If a page is gone for good, change to `permanent: true` (308) | Open (business decision) |
| 404 | Real 404 status, `noindex`, helpful links | Done (pre-existing) |

## Rendering

- **Approach unchanged:** static prerendering already puts all content in the HTML, so no rendering change was needed.
- **Client-side navigation:** `Layout.jsx` updates the title, description and canonical on client-side navigation. Verified in a browser: navigating home → Buzlin updates both.
- **No API dependency:** the chatbot API (Render) is loaded after idle and is not needed for any indexable content. If the API is down, pages are unaffected.

## Metadata

- **Titles:** case study titles come from `seoTitle` in `src/data/caseStudies.js` (55–60 characters). The fallback for new entries is `"<shortName> Case Study | Benjamin Baya"`.
- **Descriptions:** `seoDescription` where the summary is longer than 155 characters; otherwise the summary.
- **Homepage title:** "Benjamin Baya | Software Engineer & Technology Consultant" (57 characters). "Business" was dropped from the title only, to fit; the page itself still says "Business Technology Consultant".
- **Resume title:** "Benjamin Baya Resume | Software Engineer, Nairobi, Kenya" (56).
- **Social images:** case studies use the screenshot's own alt text and declare 1600×900.

## Structured data

| Node | Where | Notes |
|---|---|---|
| Person (`/#person`) | All indexable pages | `worksFor`: Buzlin Holdings Inc and Teevexa Ltd. **Removed invalid `founder` property** |
| Organization (Teevexa, `https://www.teevexa.com/#organization`) | All indexable pages | **New.** `founder` → Person. Same `@id` as teevexa.com's own markup, so the two sites describe one entity |
| ProfessionalService | Home | Services catalogue from `PILLARS` |
| WebSite | Home | |
| CreativeWork (`<url>#casestudy`) | Case studies | Added `mainEntityOfPage`, `creator`, `isPartOf`, `inLanguage`, optional `dateModified` |
| BreadcrumbList | Case studies | Home › Work › study, matching the visible breadcrumb |

Validated with the Schema.org validator: **0 errors, 0 warnings on all 11 pages** (see `07-validation-report.md`). Not added on purpose:
- **FAQPage:** there is no FAQ.
- **Review and AggregateRating:** there are no genuine reviews.
- **Product:** nothing is sold.
- **LocalBusiness:** there are no public premises. ProfessionalService with a city-level address is the accurate type.

## Performance

- **Hero portrait:** `sizes` corrected to the real displayed width (about 52% of the viewport on phones). A 412-pixel phone at 1.75× now loads the 400-pixel file (about 42 KB) instead of the 720-pixel one (about 222 KB).
- **Already good:** live Lighthouse was 100 on every page except home on mobile (91, LCP 3.1 s lab). The LCP element there is the hero heading, so the main lever is font and CSS delivery, not images.
- **Open:** the remaining warnings are the Vercel analytics script's short cache lifetime (third-party, cannot change) and about 42 KB of unused JavaScript in the React bundle (normal for a hydrated React site).

## Automated protection

`scripts/check-seo.mjs` runs at the end of every `npm run build`, so Vercel refuses to deploy a build that fails it. Run on its own with `npm run check:seo --workspace=apps/web`.

**Errors (fail the build):**
- missing title, description or canonical
- canonical not matching the URL
- duplicate titles or descriptions
- a sitemap page that is `noindex`, blocked by robots.txt or not built
- missing or multiple H1
- images without alt text
- invalid JSON-LD
- broken internal links
- private routes (`/go/`, `/activity`) in the sitemap
- `/go/`, `/activity` or 404 pages missing `noindex`

**Warnings:** titles over 60 or under 25 characters, descriptions over 160 or under 70, images without dimensions.

## Search engine notification

`scripts/indexnow.mjs` submits the live sitemap URLs to IndexNow (Bing, Yandex, Seznam, Naver), proven by the key file in `public/`. Run it manually after a content deploy. Google doesn't use IndexNow; it reads the sitemap in Search Console. No unofficial indexing APIs are used.
