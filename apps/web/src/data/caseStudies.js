// Case studies — written only from verifiable project information (repositories,
// commit history and live sites). Where an outcome hasn't been measured, it says
// so instead of guessing.
//
// kind: 'client'   → built for a client business
//       'employer' → product of Buzlin Holdings Inc, where I work as a software engineer
//       'teevexa'  → product of Teevexa Ltd, the company I founded
//       'personal' → self-initiated product build

export const CASE_STUDIES = [
  {
    slug: 'becof-organic-chemicals',
    shortName: 'Becof Organic Chemicals',
    kind: 'client',
    label: 'Client · Agriculture · Kenya',
    client: 'Becof Organic Chemicals Limited',
    title: 'A commerce and operations platform for an agricultural biotech company',
    summary:
      'Online sales with M-Pesa, distributor and farmer portals, expert consultations and growth tools: the digital backbone of an agricultural business.',
    pillars: ['Build', 'Automate', 'Grow'],
    image: 'becof',
    imageAlt: 'Becof Organic Chemicals homepage: “Transforming Agriculture with Eco-Friendly Innovation”, with the SoilFix product spotlight',
    liveUrl: 'https://www.becoforganicchemicals.com',
    problem:
      'Becof Organic Chemicals sells biotechnology products that protect crops and restore soil. It needed more than a shop: farmers, distributors, agronomy experts and internal staff all interact with the business differently, and orders, payments, consultations and partner relationships were not in one place.',
    solution: [
      'Online store with production M-Pesa STK Push payments, payment retries, guest checkout and recovery of abandoned checkouts.',
      'Role-based portals for super admins, admins, experts, distributors and farmers, with a granular, database-driven permission system.',
      'Expert consultation booking, a distributor self-service dashboard, careers, impact reporting and a learning hub.',
      'Growth features: an affiliate programme, loyalty points and referrals, coupon management, and WhatsApp buttons on products and orders.',
      'Automated transactional emails for orders, partners, affiliates and contact enquiries.',
      'SEO and measurement: dynamic sitemap, product-rating structured data, noindex on private pages, Google Analytics behind cookie consent.',
    ],
    role:
      'Lead developer: architecture, frontend, Supabase backend and serverless functions, M-Pesa integration, SEO and analytics, plus a full bug and UX audit of the platform, closed out item by item.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase (Postgres, Auth, RLS)', 'Edge Functions', 'M-Pesa Daraja API', 'Google Analytics'],
    outcome:
      'Live at becoforganicchemicals.com, taking real M-Pesa payments. Sales and traffic figures belong to the client and aren’t published here.',
    links: [{ label: 'Visit the live site', href: 'https://www.becoforganicchemicals.com' }],
  },
  {
    slug: 'buzlin',
    shortName: 'Buzlin',
    kind: 'employer',
    label: 'Buzlin Holdings Inc · Marketplace · Canada',
    client: 'Buzlin Holdings Inc',
    title: 'Modernising a multi-vendor marketplace and service-booking platform',
    summary:
      'Seven connected apps (customer web and mobile, seller, courier, POS, admin and API) taken from a licensed codebase to a hardened, rebranded production platform.',
    pillars: ['Build', 'Automate', 'Consult'],
    image: 'buzlin',
    imageAlt: 'Buzlin homepage: “Discover services & shops near you” with service and location search',
    liveUrl: 'https://buzlin.ca',
    problem:
      'Buzlin combines a multi-vendor marketplace with professional service booking. It was built on a licensed platform that had been partly customised: outdated dependencies, template leftovers, unused features, security gaps and apps that weren’t ready for app-store requirements.',
    solution: [
      'Phased engineering, UX and security audits of every app, followed by a written modernisation roadmap.',
      'Security hardening: closed unauthenticated install endpoints, stopped leaking server paths in API errors, and tightened validation across the API.',
      'New capabilities: unified sign-up and login with email OTP, live location tracking for at-location bookings, a shared multi-admin support chat, seller and courier onboarding with document collection and payouts, and shop ad creatives.',
      'Removed features Buzlin doesn’t use (auctions, restaurant tools) to simplify the product.',
      'CI/CD with GitHub Actions, file storage moved to Amazon S3, Android toolchains updated for 2026 Play Store requirements, and the move to the buzlin.ca domain.',
    ],
    role:
      'Software engineer at Buzlin Holdings Inc: audits, architecture decisions and hands-on development across the Laravel API, Next.js storefront, React admin and four Flutter apps.',
    tech: ['Laravel', 'PHP', 'Next.js', 'React', 'Flutter', 'Firebase', 'Amazon S3', 'GitHub Actions'],
    outcome:
      'Live at buzlin.ca with web and mobile apps. Usage figures are internal to Buzlin Holdings and aren’t published here.',
    links: [{ label: 'Visit buzlin.ca', href: 'https://buzlin.ca' }],
  },
  {
    slug: 'buzryde',
    shortName: 'BuzRyde',
    kind: 'employer',
    label: 'Buzlin Holdings Inc · Ride-hailing · Canada',
    client: 'Buzlin Holdings Inc',
    title: 'Rider, driver and operations systems for a Canadian ride-hailing service',
    summary:
      'Rider and driver apps, an admin control panel with trust, support and growth tooling, and a bilingual, search-optimised website.',
    pillars: ['Build', 'Automate', 'Grow'],
    image: 'buzryde',
    imageAlt: 'BuzRyde website: “Ride Smarter. Earn Better. Move Canada.”',
    liveUrl: 'https://www.buzryde.com',
    problem:
      'A ride-hailing service needs far more than a booking app: drivers must be verified and paid, riders supported, disputes resolved and growth campaigns run. In Canada, the public website also has to work in English and French.',
    solution: [
      'Overhauled the existing rider and driver apps: navigation rewrite, payments hardened across ride types, intercity rides with Stripe pre-authorisation, in-app support and inbox.',
      'Rebuilt the admin control panel: driver KYC and bans, payouts and wallet adjustments, disputes and support chat, audit logging, and intercity tooling.',
      'Growth tooling: campaign management, a rider referral programme with analytics, and complaint tracking.',
      'Redesigned the website with English/French localisation, a Sanity-powered blog and promotions CMS, dynamic sitemaps and indexing fixes, plus rider and driver web flows.',
    ],
    role:
      'Software engineer at Buzlin Holdings Inc: took over and extended the existing mobile apps and control panel, and redesigned and built out the website.',
    tech: ['Flutter', 'Firebase (Firestore, FCM)', 'Stripe', 'Google Maps', 'Laravel', 'React', 'Sanity CMS'],
    outcome:
      'The website is live at buzryde.com in English and French. Ride and user figures are internal to Buzlin Holdings and aren’t published here.',
    links: [{ label: 'Visit buzryde.com', href: 'https://www.buzryde.com' }],
  },
  {
    slug: 'esteric-kitchens',
    shortName: 'Esteric Kitchens & Interiors',
    kind: 'client',
    label: 'Client · Interior design · Kenya',
    client: 'Esteric Kitchens & Interior Designs Ltd',
    title: 'A marketing website and CRM for a kitchen and interior design company',
    summary:
      'A public site that turns visitors into quote requests, and an internal CRM that tracks every lead through to a finished project.',
    pillars: ['Build', 'Automate', 'Grow'],
    image: 'esteric',
    imageAlt: 'Esteric Kitchens website: “Bespoke kitchens & interiors, crafted around the way you live”',
    liveUrl: 'https://esteric-web.vercel.app',
    problem:
      'Esteric designs kitchens, interiors, wardrobes and landscapes. Enquiries, quotations and projects were tracked informally, and the business needed a professional online presence that staff could keep up to date themselves.',
    solution: [
      'Marketing site with service pages, portfolio with before/after showcases, blog, careers, quote requests and appointment booking.',
      'Internal CRM with a leads → customers → quotations → projects pipeline.',
      'Role-based access where admins create roles and permissions without a code change, and an activity log on every change.',
      'Staff manage the portfolio, gallery, blog, testimonials and FAQs from the CRM, with automatic photo watermarking.',
      'Staff invitations and transactional email.',
    ],
    role: 'Designed and built the website and CRM end to end.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Neon Postgres', 'Clerk', 'Vercel Blob', 'Resend'],
    outcome:
      'The website and the staff CRM are both live. Business results haven’t been measured yet, so none are claimed here.',
    links: [{ label: 'Visit the website', href: 'https://esteric-web.vercel.app' }],
  },
  {
    slug: 'melamart-enterprises',
    shortName: 'Melamart Enterprises',
    kind: 'client',
    label: 'Client · Construction equipment · Kenya',
    client: 'Melamart Enterprises Limited',
    title: 'Website and hire-management system for a scaffolding company',
    summary:
      'A lead-focused website for two branches, and a secured, redesigned admin system for equipment hire, orders and overdue returns.',
    pillars: ['Build', 'Automate'],
    image: 'melamart',
    imageAlt: 'Melamart Enterprises website: “Reliable Scaffolding & Construction Equipment for Hire and Sale”',
    liveUrl: 'https://melamart-enterprises.vercel.app',
    problem:
      'Melamart hires out and sells scaffolding and construction equipment from branches in Ruiru and Kikuyu. It needed customers to find it and request quotes easily, and a dependable way to manage hires, payments and late returns.',
    solution: [
      'Public website with call and quote-request actions, multi-branch contacts and map pins.',
      'Audit, security hardening and brand redesign of the existing inventory and hire admin system.',
      'The admin covers products and daily hire rates, hire orders and payments, PDF receipts, revenue reports, and overdue tracking with SMS reminders.',
    ],
    role: 'Built the public website; audited, secured and redesigned the existing admin system.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'PHP', 'MySQL'],
    outcome: 'The website and the admin system are both live. Business results haven’t been measured, so none are claimed here.',
    links: [
      { label: 'Visit the website', href: 'https://melamart-enterprises.vercel.app' },
      { label: 'Website source', href: 'https://github.com/b3njaminbaya/melamart-enterprises-web' },
      { label: 'Admin system source', href: 'https://github.com/b3njaminbaya/melamart-enterprises-admin' },
    ],
  },
  {
    slug: 'precious-furniture',
    shortName: 'Precious Furniture Kenya',
    kind: 'client',
    label: 'Client · Digital marketing · Current',
    client: 'Precious Furniture Kenya',
    title: 'Social media, advertising and SEO for a furniture business',
    summary:
      'An ongoing digital-growth engagement: content, paid ads, tracking and search visibility, working together as one system.',
    pillars: ['Grow'],
    image: null,
    visual: 'growth',
    problem:
      'A furniture business that sells visually needs to be discovered on social media and search, and to know which channels actually bring in customers.',
    solution: [
      'Social media management and content creation for Facebook, Instagram and TikTok.',
      'Running Google Ads and Meta Ads campaigns.',
      'Connecting the Google tag and Meta Pixel to the website so campaigns can be measured.',
      'Search engine optimisation for the website and product pages.',
      'Keeping the Google Business Profile current with the best photos and linked social accounts, and linking the social accounts in Google Search Console.',
    ],
    role: 'Social media management and SEO. Engagement started 19 September 2026.',
    tech: ['Meta Ads', 'Google Ads', 'Meta Pixel', 'Google tag', 'Google Business Profile', 'Google Search Console'],
    outcome: 'In progress. Results will be reported here once there is enough data to measure honestly.',
    links: [],
  },
  {
    slug: 'teevexa-trace',
    shortName: 'Teevexa Trace',
    kind: 'teevexa',
    label: 'Teevexa product · Supply chain',
    client: 'Teevexa Ltd',
    title: 'Teevexa Trace - supply chain traceability from the field to the buyer',
    summary:
      'Two mobile apps and a public verification page that record what happens to a product batch at every step, even with no signal, and let anyone check its journey.',
    pillars: ['Build', 'Automate'],
    image: null,
    visual: 'phones',
    phones: [
      { src: 'teevexa-trace-phone-1', alt: 'Teevexa Field home screen with quick actions: Scan QR, Log Event, Route Tracker and Generate QR' },
      { src: 'teevexa-trace-phone-2', alt: 'Teevexa Field log event screen with event types, location and photo evidence' },
      { src: 'teevexa-trace-phone-3', alt: 'Teevexa Trace dashboard showing batches, events and recent activity' },
    ],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.teevexa.trace',
    problem:
      'Producers and exporters are increasingly asked to prove where a product came from and what happened to it along the way. The evidence is usually created in the field, on farms, in warehouses and on the road, where there is often no connection, and it ends up on paper or in chat messages that nobody can verify.',
    solution: [
      'Teevexa Field, for workers on the ground: scan or generate a batch QR code, then log each event (harvest, processing, quality check, transport, delivery) with photos, a voice note and GPS location.',
      'Offline first: everything is saved on the phone and synced automatically when a connection returns, so work never stops for lack of signal.',
      'Teevexa Trace, for producers, exporters and buyers: a live dashboard of batches and events, supplier performance, a shipment map, a trust score per batch, and downloadable PDF certificates.',
      'Public verification with no app or account: anyone can look up a batch on the web by scanning its QR code, and third parties can check batches through an API.',
      'Compliance reports generated from the recorded events, and optional anchoring of events to a public blockchain so records can’t be quietly changed (built, switched off by default).',
      'Biometric login, push notifications and self-service account deletion in both apps.',
    ],
    role: 'Founder and lead developer: product design, both mobile apps, the backend and the releases to Google Play.',
    tech: ['React Native (Expo)', 'TypeScript', 'Supabase (Postgres, Auth, Realtime)', 'Edge Functions', 'Google Maps', 'Polygon (optional)'],
    outcome:
      'Both apps are published on Google Play. The product is in pilot with early customers, with more being onboarded. Usage figures aren’t published here.',
    links: [
      { label: 'Teevexa Trace on Google Play', href: 'https://play.google.com/store/apps/details?id=com.teevexa.trace' },
      { label: 'Teevexa Field on Google Play', href: 'https://play.google.com/store/apps/details?id=com.teevexa.field' },
      { label: 'Public batch verification', href: 'https://www.teevexa.com/verify' },
    ],
  },
  {
    slug: 'teedesk',
    shortName: 'TeeDesk',
    kind: 'teevexa',
    label: 'Teevexa product · AI support',
    client: 'Teevexa Ltd',
    title: 'TeeDesk - AI customer support a business can run on its own servers',
    summary:
      'An open-source support platform that answers customers on a website, WhatsApp and Telegram from the business’s own documents, and hands over to a person when it isn’t sure.',
    pillars: ['Automate', 'Build'],
    image: null,
    visual: 'support',
    problem:
      'Small support teams answer the same questions all day, and most AI chat tools mean sending customer conversations to a third-party AI service and paying for every message.',
    solution: [
      'A chat widget that can be embedded on any website, plus WhatsApp Business and Telegram channels, all feeding one conversation system.',
      'Answers grounded in the business’s own knowledge base: upload PDF or Word documents and the assistant uses them to reply.',
      'Automatic handover to a human agent when the AI’s confidence is low or the customer is unhappy, with an agent queue to claim and resolve conversations.',
      'The AI model runs locally, so customer data stays on the business’s own servers and there are no per-message AI fees.',
      'Separate, isolated accounts for multiple businesses, each with its own branding, channels and settings.',
      'Analytics on conversation volume, sentiment and common questions, and a nightly job that improves intent recognition from agent feedback.',
    ],
    role: 'Founder and lead developer: architecture, the AI pipeline, backend, dashboard and chat widget.',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL (pgvector)', 'Redis', 'Ollama (local LLM)', 'Docker', 'WhatsApp Cloud API'],
    outcome:
      'Released as open source under the MIT licence, built to be self-hosted. There is no hosted demo and no usage figures are claimed.',
    links: [{ label: 'Source on GitHub', href: 'https://github.com/teevexa/teedesk' }],
  },
  {
    slug: 'teevexa-platform',
    shortName: 'Teevexa platform',
    kind: 'teevexa',
    label: 'Teevexa product · Business system',
    client: 'Teevexa Ltd',
    title: 'The Teevexa platform - one system to win and deliver client work',
    summary:
      'The website, quote funnel, consultation booking, client portal and internal CRM that Teevexa runs on.',
    pillars: ['Build', 'Automate', 'Grow'],
    image: 'teevexa-platform',
    imageAlt: 'Teevexa homepage: “Building Digital Infrastructure for Ambitious Businesses”',
    liveUrl: 'https://www.teevexa.com',
    problem:
      'A services company needs to turn website visitors into well-described projects, then run those projects with clients without losing track across email, chat and spreadsheets.',
    solution: [
      'A quote funnel where a visitor describes a project in plain words, answers five quick questions and gets a tailored quote by email, with no account needed.',
      'Consultation booking in 20-minute slots that converts to the visitor’s time zone, prevents double booking and creates the meeting invite.',
      'A client portal for projects, milestones, proposals, deliverables, invoices, files and messages.',
      'An internal CRM and project system for the team: lead pipeline, tasks and Kanban, time tracking, invoicing, reports and an audit log.',
      'A content system for the blog, portfolio and job listings, with pages prerendered for search engines.',
      'Seven user roles enforced in the database, so each person sees only what they should.',
    ],
    role: 'Founder and lead developer: product design, architecture, security model and ongoing development, with AI-assisted development.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase (Postgres, Auth, RLS)', 'Edge Functions', 'Zoom API'],
    outcome:
      'Live at teevexa.com and used to run Teevexa’s own client work, including the consultation booking linked from this site. Business figures aren’t published here.',
    links: [{ label: 'Visit teevexa.com', href: 'https://www.teevexa.com' }],
  },
  {
    slug: 'cyberguard-ai',
    shortName: 'CyberGuard AI',
    kind: 'teevexa',
    label: 'Teevexa product · Security',
    client: 'Teevexa Ltd',
    title: 'CyberGuard AI - threat detection for teams without a security department',
    summary:
      'An open-source dashboard that watches network activity, flags unusual behaviour, sends alerts and explains each threat in plain language.',
    pillars: ['Build', 'Automate'],
    image: null,
    visual: 'security',
    problem:
      'Enterprise security monitoring tools are priced and built for large companies. Smaller teams still get attacked, but have nobody watching.',
    solution: [
      'Collects network and system log data and scores it with a trained machine-learning model to flag unusual activity.',
      'Shows why something was flagged, not only that it was, so a non-specialist can judge it.',
      'Sends alerts automatically by Slack, email or webhook, and tracks each incident from detection to resolution.',
      'A built-in AI assistant explains a threat and suggests next steps, running locally with no paid AI service.',
      'Separate accounts per organisation, role-based access, API keys and an audit log, with exportable evidence for compliance reviews.',
      'Covered by 127 backend and 15 frontend automated tests that run on every change.',
    ],
    role: 'Founder and lead developer. Started as a solo project and is now maintained by Teevexa.',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL (Neon)', 'scikit-learn', 'Ollama (local LLM)', 'GitHub Actions'],
    outcome:
      'Released as open source under the Apache 2.0 licence. No usage figures are claimed.',
    links: [{ label: 'Source on GitHub', href: 'https://github.com/teevexa/cyberguard-ai' }],
  },
  {
    slug: 'nyuzi',
    shortName: 'Nyuzi',
    kind: 'personal',
    label: 'Personal build · Marketplace',
    client: 'Product build',
    title: 'Nyuzi - a circular-fashion marketplace with donation-to-product traceability',
    summary:
      'A three-sided marketplace where people donate clothing they no longer need, partners upcycle it, and buyers can see exactly which donations a product was made from.',
    pillars: ['Build', 'Automate'],
    image: 'nyuzi',
    imageAlt: 'Nyuzi homepage: “Circular fashion, rewoven for the everyday”',
    liveUrl: 'https://nyuzi.vercel.app',
    problem:
      'Kenya imports large volumes of second-hand clothing, and much of what doesn’t sell ends up burned or dumped because there’s no simple, trusted channel to give it a second life.',
    solution: [
      'Donations from signed-in or guest donors, with photos and optional pickup requests.',
      'A marketplace with server-side search and filtering, and checkout for guests or account holders with M-Pesa (STK Push) payments.',
      'Donation-to-product traceability: a product page shows which donations an item was made from, without exposing who donated.',
      'Inventory that can’t be oversold: stock is reserved inside a single database transaction and returned automatically if a payment fails.',
      'Order fulfilment with shipping and tracking, reviews and ratings, transactional email and an admin panel.',
      'A security audit of the whole system, which found and fixed a client-side pricing loophole, a payment-callback gap and a way for users to make themselves admins.',
    ],
    role: 'Designed and built end to end: product, database, security and deployment.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase (Postgres, Auth, RLS, Storage)', 'Edge Functions', 'M-Pesa Daraja API', 'Capacitor'],
    outcome:
      'Live and feature-complete against its roadmap, but not yet trading: M-Pesa payments are built and not yet switched on in production. A personal product, so there are no commercial figures.',
    links: [
      { label: 'Visit the live product', href: 'https://nyuzi.vercel.app' },
      { label: 'Source on GitHub', href: 'https://github.com/b3njaminbaya/nyuzi' },
    ],
  },
  {
    slug: 'tafsiri-ai',
    shortName: 'Tafsiri AI',
    kind: 'personal',
    label: 'Personal build · AI',
    client: 'Product build',
    title: 'Tafsiri AI - machine translation for Kenya’s languages',
    summary:
      'Swahili, Somali and English translation on a fine-tunable neural model, with an active-learning loop that improves quality over time.',
    pillars: ['Build', 'Automate'],
    image: 'tafsiri',
    imageAlt: 'Tafsiri AI homepage: “Neural machine translation for Kenya’s languages”',
    liveUrl: 'https://tafsiri-ai-tan.vercel.app',
    problem:
      'Most of Kenya’s ~68 languages are poorly served by mainstream translation tools, and general-purpose AI translators rarely say where they’re unreliable.',
    solution: [
      'Translation between Swahili, Somali and English on a multilingual M2M100 model, with other Kenyan languages listed honestly as a roadmap.',
      'Domain glossaries (medical, legal, technical) that guarantee chosen terms appear in translations.',
      'Every translation gets a confidence score; low-confidence results go to a review queue where corrections feed future model improvement.',
      'A LoRA fine-tuning pipeline for adding new languages from community-contributed parallel text.',
      'Accounts, history and analytics, a community forum, blog, GDPR data export and erasure, and optional billing.',
    ],
    role: 'Designed and built end to end: frontend, API, translation microservice and training pipeline.',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'PyTorch', 'Hugging Face Transformers', 'Docker'],
    outcome: 'Live as a public demo. A personal product, so there are no commercial figures.',
    links: [
      { label: 'Try the live demo', href: 'https://tafsiri-ai-tan.vercel.app' },
      { label: 'Source on GitHub', href: 'https://github.com/b3njaminbaya/tafsiri-ai' },
    ],
  },
  {
    slug: 'ordo',
    shortName: 'Ordo',
    kind: 'personal',
    label: 'Personal build · Business tool',
    client: 'Product build',
    title: 'Ordo - project management with real-time collaboration',
    summary:
      'Tasks, Kanban, calendar, time tracking and team workspaces, with careful security and a 150+ test API suite.',
    pillars: ['Build'],
    image: 'ordo',
    imageAlt: 'Ordo homepage: “Project management, built end to end.”',
    liveUrl: 'https://ordo-inky.vercel.app',
    problem:
      'Small teams need one place for tasks, deadlines and time spent, and a multi-user tool has to keep each team’s data strictly separate and in sync.',
    solution: [
      'Task lists, subtasks, recurring tasks, Kanban boards, a calendar and live time tracking with CSV export.',
      'Workspaces with expiring invites, role-based access and real-time sync between teammates over WebSockets.',
      'Deadline reminders and assignment and comment notifications.',
      'Careful authentication: hashed passwords, token revocation, hashed single-use reset links and rate limiting.',
      'CI/CD with GitHub Actions deploying to Vercel and Render.',
    ],
    role:
      'Specified, directed, reviewed, tested and deployed the product; much of the code was written with an AI coding assistant under my direction.',
    tech: ['React', 'Flask', 'Socket.IO', 'PostgreSQL', 'GitHub Actions'],
    outcome: 'Live as a public demo and open source. A personal product, so there are no commercial figures.',
    links: [
      { label: 'Try the live demo', href: 'https://ordo-inky.vercel.app' },
      { label: 'Source on GitHub', href: 'https://github.com/b3njaminbaya/ordo' },
    ],
  },
];

// Smaller builds — listed briefly, not presented as case studies.
export const EXPERIMENTS = [
  {
    title: 'Micro-Donations Platform',
    body: 'Small donations to community causes with M-Pesa, recurring giving and payouts.',
    href: 'https://micro-donations-platform.vercel.app',
  },
  {
    title: 'Aptigraph',
    body: 'Coding-practice tracker with spaced repetition, analytics and database-enforced security.',
    href: 'https://aptigraph.vercel.app',
  },
  {
    title: 'This site’s AI assistant',
    body: 'LLM assistant grounded in a curated knowledge base, with a fallback when the AI provider is down.',
    href: 'https://github.com/b3njaminbaya/Benjamin-Baya',
  },
];

export const getCaseStudy = (slug) => CASE_STUDIES.find((c) => c.slug === slug);

export const workImage = (name, width) => `/images/work/${name}-${width}.webp`;

export const KIND_LABEL = {
  client: 'Client project',
  employer: 'Buzlin Holdings product',
  teevexa: 'Teevexa product',
  personal: 'Personal product build',
};
