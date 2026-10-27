# 08 · SEO maintenance guide

The site has no CMS. Content and SEO settings live in data files, and every build checks them automatically. This guide is the publishing workflow.

## Adding or editing a case study

Edit `apps/web/src/data/caseStudies.js`. Each entry automatically gets:
- its page at `/work/<slug>`
- a sitemap entry
- canonical, Open Graph and Twitter tags
- CreativeWork and breadcrumb structured data
- a line in `llms.txt`

The fields that matter for search:

| Field | Rule |
|---|---|
| `slug` | Lowercase words with hyphens. Never change it once published; if you must, add a redirect in `apps/web/vercel.json` |
| `title` | The H1 on the page; can be long and descriptive |
| `seoTitle` | The search result title. **60 characters or fewer**, ending `\| Benjamin Baya`. If left out: `"<shortName> Case Study \| Benjamin Baya"` |
| `summary` | Card text and default description |
| `seoDescription` | Only needed when `summary` is longer than 155 characters |
| `imageAlt` | Describe what the screenshot shows, not keywords |
| `updated` | Optional `YYYY-MM-DD`. Set it when you materially revise the case study; it becomes the sitemap `lastmod` and the structured data `dateModified`. Don't set it for typo fixes |

Never add numbers, quotes, ratings or claims that aren't real. The pages and the chatbot both repeat this data.

**Screenshots:** add `<name>-800.webp` and `<name>-1600.webp` (16:9) to `apps/web/public/images/work/` and set `image: '<name>'`.

## Removing a case study

1. Delete the entry from `caseStudies.js`.
2. Add a redirect in `vercel.json`: `permanent: false` if it may come back, `true` if it is gone for good.
3. Update the chatbot (`apps/api/knowledgeBase.js`) and the resume if they mention it.

## Every build checks SEO automatically

`npm run build` fails if a page loses its title, description, canonical or H1, if titles or descriptions are duplicated, if an image has no alt text, if an internal link breaks, or if a private page reaches the sitemap. Fix what it reports; don't bypass it. To run it alone after a build: `npm run check:seo --workspace=apps/web`.

## After deploying a content change

1. `npm run indexnow --workspace=apps/web` to notify Bing and other IndexNow engines.
2. For an important new page: Search Console → URL Inspection → Request indexing.

## Monthly routine (about 30 minutes)

1. **Search Console:** Pages report (indexed vs not, and why), Performance (queries, clicks, CTR for brand and case study names), Core Web Vitals.
2. **Bing Webmaster Tools:** the same reports, once set up.
3. **Vercel Analytics:** visits, top pages, referrers (including AI referrers), and clicks on `/go/consultation`, `/go/quote` and `/go/whatsapp` as the conversion count.
4. **AI sampling:** the fixed prompts in `05-ai-search-strategy.md`.
5. Note anything that changed in a dated line at the end of this file.

## Setting up Bing Webmaster Tools (one-time, manual)

1. Go to bing.com/webmasters and sign in.
2. Choose **Import from Google Search Console**. This verifies the site and imports the sitemap with no code change.
3. Confirm `https://benjaminbaya.com/sitemap.xml` is listed.

## Who owns what

| Task | Owner |
|---|---|
| Content accuracy, new case studies, business facts | Benjamin |
| Build checks, redirects, structured data code | Whoever maintains `apps/web` |
