# 03 · Keyword and content map

**Status of the data.** No Search Console, Bing or keyword-tool data was available for this work. Everything below is a **research hypothesis** based on the site's real offerings. Validate it against Search Console queries after 4–8 weeks of data (see `08-seo-maintenance-guide.md`).

## The most important decision: portfolio vs Teevexa

benjaminbaya.com and teevexa.com describe the same services. If both pages chase "e-commerce website developer Kenya", they compete with each other.

Recommended division (no content change needed, just a rule for future pages):

| Query type | Owner | Why |
|---|---|---|
| Personal brand: "Benjamin Baya", "Benjamin Mweri Baya", "Benjamin Baya software engineer" | **benjaminbaya.com** | The site is the canonical source about the person |
| Proof: client and product names ("Becof platform", "BuzRyde app", "Teevexa Trace", "TeeDesk", "Tafsiri AI") | **benjaminbaya.com** case studies | Unique first-hand write-ups |
| Commercial service queries ("website design Nairobi", "e-commerce website Kenya price", "POS system Kenya") | **teevexa.com** | It has the quote funnel, pricing and service pages |

So the portfolio should **not** grow separate service landing pages. New service-intent pages belong on teevexa.com, linked from the portfolio.

## Page targets

| Page | Primary query (hypothesis) | Related queries and entities | Intent | Notes |
|---|---|---|---|---|
| `/` | Benjamin Baya | software engineer Nairobi Kenya; business technology consultant Kenya; Teevexa founder; lead software engineer Buzlin | Navigational and brand | Title now leads with the name; description names services and location |
| `/resume` | Benjamin Baya resume | Benjamin Baya CV; software engineer resume Nairobi | Navigational | Title changed from "Resume - Benjamin Baya" to include role and location |
| `/work/becof-organic-chemicals` | Becof Organic Chemicals platform | e-commerce website with M-Pesa; distributor portal; agri-biotech Kenya | Proof / informational | Entity: Becof Organic Chemicals Limited |
| `/work/buzlin` | Buzlin marketplace | multi-vendor marketplace modernisation; Laravel Flutter marketplace; Buzlin apps | Proof | Entity: Buzlin Holdings Inc |
| `/work/buzryde` | BuzRyde app | ride-hailing app Canada; rider and driver app admin panel | Proof | Entity: BuzRyde Inc |
| `/work/esteric-kitchens` | Esteric Kitchens website | kitchen and interior design website; CRM for interior designers Kenya | Proof | Client |
| `/work/melamart-enterprises` | Melamart Enterprises | scaffolding hire system; equipment hire management software | Proof | Client |
| `/work/teevexa-trace` | Teevexa Trace | supply chain traceability app; offline field data app; batch verification | Product / informational | Also linked from Google Play listings |
| `/work/teedesk` | TeeDesk | open-source AI customer support; self-hosted AI chatbot WhatsApp Telegram | Product / informational | GitHub repo is public |
| `/work/teevexa-platform` | Teevexa platform | client portal and CRM; quote funnel and consultation booking | Proof | |
| `/work/tafsiri-ai` | Tafsiri AI | Swahili translation AI; Somali English machine translation; Kenyan languages NLP | Product / informational | |

## Content gaps (ranked, nothing fabricated)

1. **Measured outcomes.** Every case study says results aren't measured. Real figures (orders, bookings, time saved, ranking changes) would make the strongest content improvement. *Needs business input.*
2. **Client-approved quotes.** None exist. Only add genuine, attributable quotes, and only then consider review markup.
3. **Dates.** Case studies have no "when" (project period). Adding real dates helps both readers and the `updated` sitemap field. *Needs business input.*
4. **A short FAQ** on the homepage, answering what clients actually ask (cost of a consultation, remote work, timelines, who delivers). Only worth adding if the answers are confirmed; FAQ rich results are no longer shown for most sites, so the value is clarity for readers and AI answers, not a rich snippet. *Needs business input.*

## Not recommended

- Location doorway pages (for example "Software engineer Mombasa"). There is one real location.
- Keyword variations of the same page, or a blog started only for SEO. A blog only pays off if it is written and maintained regularly from real experience.
