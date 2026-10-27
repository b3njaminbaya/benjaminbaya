# 02 · URL inventory

Every public URL on `benjaminbaya.com` as of 28 October 2026, enumerated from the route table (`src/App.jsx`), the case study data (`src/data/caseStudies.js`), the prerender script, `public/`, `vercel.json` and live HTTP checks.

Machine-readable rendered metadata for every HTML page is in [`url-inventory.json`](url-inventory.json).

Character counts are after this work. Word counts are visible text in the raw HTML, without JavaScript.

## Indexable pages (in sitemap)

| URL | Type | Title (chars) | Description (chars) | H1 | Words | Structured data | Main intent |
|---|---|---|---|---|---|---|---|
| `/` | Homepage | 57 | 154 | 1 | ~2,750 | Person, Organization (Teevexa), ProfessionalService, WebSite | Brand ("Benjamin Baya"); who he is and what he offers |
| `/work/becof-organic-chemicals` | Case study (business project) | 60 | 146 | 1 | 432 | CreativeWork, BreadcrumbList, Person, Organization | Becof platform; e-commerce with M-Pesa |
| `/work/buzlin` | Case study (employer product) | 59 | 139 | 1 | 494 | same | Buzlin; marketplace modernisation |
| `/work/buzryde` | Case study (employer product) | 57 | 128 | 1 | 422 | same | BuzRyde; ride-hailing apps |
| `/work/esteric-kitchens` | Case study (client) | 59 | 128 | 1 | 376 | same | Website and CRM for interior design |
| `/work/melamart-enterprises` | Case study (client) | 59 | 127 | 1 | 340 | same | Website and hire management system |
| `/work/teevexa-trace` | Case study (Teevexa product) | 60 | 141 | 1 | 503 | same | "Teevexa Trace"; supply chain traceability |
| `/work/teedesk` | Case study (Teevexa product) | 56 | 146 | 1 | 456 | same | "TeeDesk"; open-source AI customer support |
| `/work/teevexa-platform` | Case study (Teevexa product) | 55 | 101 | 1 | 420 | same | Teevexa client portal and CRM |
| `/work/tafsiri-ai` | Case study (personal build) | 60 | 133 | 1 | 353 | same | "Tafsiri AI"; Swahili/Somali translation |
| `/resume` | Resume | 56 | 126 | 1 | 635 | Person, Organization | "Benjamin Baya resume / CV" |

All 11 pages:
- **Status:** return 200 live.
- **Canonical:** self-referencing, with no trailing slash (except `/`).
- **Robots:** `index, follow, max-image-preview:large`.
- **Social tags:** Open Graph and Twitter tags present.
- **Links:** reachable through crawlable internal links. The homepage links to all 9 case studies, the footer to 6 plus the resume, each case study to the next one, and the navbar to the resume. **No orphan pages.**

## Non-indexable pages (deliberately excluded)

| URL | Status | Why excluded | Controls |
|---|---|---|---|
| `/activity` | 200 | Live coding stats; thin and changing; client-rendered | `noindex, follow` + `Disallow: /activity` |
| `/go/consultation`, `/go/whatsapp`, `/go/quote` | 200 then client redirect | Click-counting redirect pages | `noindex, nofollow` + `Disallow: /go/` |
| any unknown path | 404 | Not found page | `noindex, follow`, real 404 status |

## Redirects

| From | To | Type |
|---|---|---|
| `www.benjaminbaya.com/*` | `benjaminbaya.com/*` | 308 (Vercel domain setting + `vercel.json`) |
| `benjamin-baya.vercel.app/*` | `benjaminbaya.com/*` | 308 |
| `http://benjaminbaya.com/*` | `https://…` | 308 |
| `/work/<slug>/` (trailing slash) | `/work/<slug>` | 308 (`trailingSlash: false`) |
| `/index.html`, `/<path>/index.html` | clean URL | 308 (**new**) |
| `/work/micro-donations-platform` | `/#work` | 308 |

Case variants (for example `/Resume`) return 404, which is correct for a static host. Tracking parameters (`?utm_…`) return 200 with the canonical tag pointing to the clean URL.

## Files and resources

| URL | Purpose | Indexing |
|---|---|---|
| `/sitemap.xml` | 11 indexable URLs | n/a |
| `/robots.txt` | Allows all; blocks `/activity`, `/go/`; sitemap link | n/a |
| `/llms.txt` | Plain-text site summary for AI tools (**new**, experimental) | Plain text |
| `/cce2e65c10b212c4e9a72d1b6363f80d.txt` | IndexNow ownership key (**new**) | Plain text |
| `/resume.pdf` | Resume PDF (view) | Canonical header → `/resume` (**new**) |
| `/Benjamin_Mweri_Baya_Resume.pdf` | Resume PDF (download) | `noindex` header (**new**) |
| `/og-image.png` | Default social image (1200×630) | Image |
| `/images/work/*.webp` | Case study screenshots, 800 and 1600 pixels wide | Image |
| `/images/benjamin-baya*.webp` | Portrait, 400 and 720 pixels wide | Image |

Not on this domain: `portfolio-server-kbti.onrender.com` (chatbot API; JSON only, root returns 404) and `/api/contact` (POST-only function). Neither serves HTML pages.

## Per-page recommendations still open

- **`/work/teevexa-trace` and `/work/teedesk`:** a dedicated social image (they share the default). Needs design work.
- **All case studies:** add an `updated` date when a case study is materially revised, so the sitemap can report a real `lastmod`.
- **`/work/melamart-enterprises` and `/work/tafsiri-ai`** are the thinnest (about 340–350 words). Expand only with real facts, such as measured results, if they become available.
