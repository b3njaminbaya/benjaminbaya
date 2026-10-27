# 05 · AI search strategy

No implementation can guarantee that AI systems cite this site. The aim is that, when they look, they can reach the pages, read the facts, and attribute them correctly.

## Crawler access (verified 28 October 2026)

Live requests to `/work/buzlin` with each crawler's user agent all returned **200 with the full prerendered HTML** (about 26.6 KB). Nothing in Vercel's firewall or `robots.txt` blocks them.

| Crawler | Purpose | Current access |
|---|---|---|
| Googlebot | Google Search, including AI Overviews | Allowed |
| Bingbot | Bing, Copilot; also feeds other engines | Allowed |
| OAI-SearchBot | ChatGPT search results | Allowed |
| PerplexityBot | Perplexity search | Allowed |
| GPTBot | OpenAI **model training** | Allowed |
| ClaudeBot | Anthropic **model training** | Allowed |
| CCBot | Common Crawl (used in many training sets) | Allowed |
| Google-Extended (token) | Opt-out token for Gemini training; does not affect Google Search | Allowed |
| Applebot-Extended (token) | Opt-out token for Apple AI training | Allowed |

**Decision (confirmed by Benjamin, 28 October 2026):** allow all of them, including training crawlers. This is public marketing content about you and your work, so wide exposure, including in training data, works in your favour, and nothing on the site is sensitive.

If you'd rather opt out of **training only** while keeping search visibility, add to `robots.txt` (in `scripts/prerender.mjs`):

```
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: CCBot
User-agent: Google-Extended
User-agent: Applebot-Extended
Disallow: /
```

Never block Googlebot, Bingbot, OAI-SearchBot or PerplexityBot. That would remove the site from those search and answer products.

## Content that is easy to retrieve accurately

Already in place and preserved:
- **Plain HTML:** facts are in the HTML, not behind JavaScript.
- **One fact per field:** each case study states the problem, solution, role, technology and outcome in labelled sections.
- **Honesty:** outcomes say plainly when results aren't measured. That protects against AI tools repeating invented claims.
- **Contact details:** location, booking link and contact details are in plain text and in structured data.

## Entity consistency

| Fact | Where it is stated | Status |
|---|---|---|
| Name: Benjamin Baya (legal: Benjamin Mweri Baya) | Site, resume, LinkedIn, Teevexa, Becof | Consistent; structured data carries the legal name as `alternateName` |
| Lead Software Engineer, Buzlin Holdings Inc | Site, resume, LinkedIn, structured data (`worksFor`) | Consistent |
| Founder & Lead Software Engineer, Teevexa Ltd (founded 3 March 2026) | Site, resume, LinkedIn, teevexa.com, structured data | Consistent |
| Teevexa entity ID | teevexa.com and this site both use `https://www.teevexa.com/#organization` | **Linked** (new) |
| LinkedIn: linkedin.com/in/b3njaminbaya | Site, teevexa.com | Consistent |
| Contact email | Site: b3njaminbaya@gmail.com; Teevexa documents: hello@teevexa.com | Intentional (personal vs company) |

## llms.txt (experiment)

`/llms.txt` is generated at build time from the same data as the pages (`renderLlmsTxt()` in `src/seo.js`), so it cannot drift from the site. It contains:
- a one-paragraph summary
- the services
- every case study with its URL and summary
- the main pages
- the contact routes

Treat it as an inexpensive experiment. It is an emerging convention, not a search engine requirement, and no major search engine has committed to using it. It does not replace the sitemap or the HTML.

## Measurement

| Signal | How | Cadence |
|---|---|---|
| AI referral visits | Vercel Analytics → Referrers: look for chatgpt.com, perplexity.ai, copilot.microsoft.com, gemini.google.com, claude.ai | Monthly |
| Brand answers | Ask ChatGPT (search on), Perplexity, Copilot and Google: "Who is Benjamin Baya?", "Benjamin Baya software engineer Kenya", "What is Teevexa Trace?", "What is TeeDesk?". Record whether the answer is correct and which URL is cited | Monthly, same prompts each time |
| Search visibility | Search Console and Bing Webmaster Tools: impressions and clicks for brand and case study queries | Monthly |

AI answers vary from run to run. A missing citation in one sample proves nothing; look at the trend across months.
