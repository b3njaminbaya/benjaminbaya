// Case studies — written only from verifiable project information (repositories,
// commit history and live sites). Where an outcome hasn't been measured, it says
// so instead of guessing.
//
// kind: 'client'   → built for a client business
//       'business' → platform built for a business that isn't presented as a client
//       'employer' → product of Buzlin Holdings Inc, where I am the lead software engineer
//       'teevexa'  → product of Teevexa Ltd, the company I founded
//       'personal' → self-initiated product build

export const CASE_STUDIES = [
  {
    slug: 'becof-organic-chemicals',
    shortName: 'Becof Organic Chemicals',
    kind: 'business',
    label: 'Agri-biotech · Kenya',
    client: 'Becof Organic Chemicals Limited',
    title: 'A commerce and operations platform for an agricultural biotech company',
    // Search result title and description (keep under 60 and 155 characters)
    seoTitle: 'Becof Organic Chemicals: E-commerce Platform | Benjamin Baya',
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
      'Ongoing social media management and paid campaigns for the business.',
    ],
    role:
      'Lead developer: architecture, frontend, Supabase backend and serverless functions, M-Pesa integration, SEO and analytics, plus a full bug and UX audit of the platform, closed out item by item. I also manage the company’s social media.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase (Postgres, Auth, RLS)', 'Edge Functions', 'M-Pesa Daraja API', 'Google Analytics'],
    outcome:
      'Live at becoforganicchemicals.com, taking real M-Pesa payments. Sales and traffic figures belong to the company and aren’t published here.',
    links: [{ label: 'Visit the live site', href: 'https://www.becoforganicchemicals.com' }],
  },
  {
    slug: 'buzlin',
    shortName: 'Buzlin',
    kind: 'employer',
    label: 'Buzlin Holdings Inc · Marketplace · Canada',
    client: 'Buzlin Holdings Inc',
    title: 'Modernising a multi-vendor marketplace and service-booking platform',
    // Search result title and description (keep under 60 and 155 characters)
    seoTitle: 'Buzlin Marketplace Modernisation Case Study | Benjamin Baya',
    seoDescription:
      'How seven connected Buzlin apps (customer, seller, courier, POS, admin and API) were modernised, secured and published on three app stores.',
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
      'New capabilities: unified sign-up and login with email and phone OTP, live location tracking for at-location bookings, a shared multi-admin support chat, seller and courier onboarding with document collection and payouts, and shop ad creatives.',
      'Removed features Buzlin doesn’t use (auctions, restaurant tools) to simplify the product.',
      'CI/CD with GitHub Actions, file storage moved to Amazon S3, Android toolchains updated for 2026 Play Store requirements, and the move to the buzlin.ca domain.',
      'Published the four Buzlin mobile apps (customer, seller, courier and POS) on Google Play, the Apple App Store and the Microsoft Store, handling every store submission myself.',
      'Payments built end to end: buyers pay for products and services by mobile money in Kenya and Tanzania (PesaPal), by bank through Stripe, or by PayPal, and sellers and couriers are paid out by bank, mobile money or PayPal.',
    ],
    role:
      'Lead software engineer at Buzlin Holdings Inc: audits, architecture decisions and hands-on development across the Laravel API, Next.js storefront, React admin and four Flutter apps, and sole publisher of those apps on all three app stores.',
    tech: ['Laravel', 'PHP', 'Next.js', 'React', 'Flutter', 'Firebase', 'Stripe', 'PesaPal', 'PayPal', 'Amazon S3', 'GitHub Actions'],
    outcome:
      'Live at buzlin.ca with web and mobile apps. Usage figures are internal to Buzlin Holdings and aren’t published here.',
    links: [{ label: 'Visit buzlin.ca', href: 'https://buzlin.ca' }],
  },
  {
    slug: 'buzryde',
    shortName: 'BuzRyde',
    kind: 'employer',
    label: 'BuzRyde Inc · Ride-hailing · Canada',
    client: 'BuzRyde Inc, a subsidiary of Buzlin Holdings Inc',
    title: 'Rider, driver and operations systems for a Canadian ride-hailing service',
    // Search result title and description (keep under 60 and 155 characters)
    seoTitle: 'BuzRyde Ride-Hailing Apps and Admin Panel | Benjamin Baya',
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
      'Published the rider and driver apps on Google Play and the Apple App Store.',
      'Redesigned the website with English/French localisation, a Sanity-powered blog and promotions CMS, dynamic sitemaps and indexing fixes, plus rider and driver web flows.',
    ],
    role:
      'Lead software engineer at Buzlin Holdings Inc, which operates BuzRyde through its subsidiary BuzRyde Inc: took over and extended the existing mobile apps and control panel, and redesigned and built out the website.',
    tech: ['Flutter', 'Firebase (Firestore, FCM)', 'Stripe', 'Google Maps', 'Laravel', 'React', 'Sanity CMS'],
    outcome:
      'The website is live at buzryde.com in English and French. Ride and user figures are internal to BuzRyde Inc and aren’t published here.',
    links: [{ label: 'Visit buzryde.com', href: 'https://www.buzryde.com' }],
  },
  {
    slug: 'esteric-kitchens',
    shortName: 'Esteric Kitchens & Interiors',
    kind: 'client',
    label: 'Client · Interior design · Kenya',
    client: 'Esteric Kitchens & Interior Designs Ltd',
    title: 'A marketing website and CRM for a kitchen and interior design company',
    // Search result title and description (keep under 60 and 155 characters)
    seoTitle: 'Esteric Kitchens Website and CRM Case Study | Benjamin Baya',
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
      'Search engine optimisation for the website.',
    ],
    role: 'Designed and built the website and CRM end to end, and did the search engine optimisation for the website.',
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
    // Search result title and description (keep under 60 and 155 characters)
    seoTitle: 'Melamart Website and Hire Management System | Benjamin Baya',
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
    slug: 'teevexa-trace',
    shortName: 'Teevexa Trace',
    kind: 'teevexa',
    label: 'Teevexa product · Supply chain',
    client: 'Teevexa Ltd',
    title: 'Teevexa Trace - supply chain traceability from the field to the buyer',
    // Search result title and description (keep under 60 and 155 characters)
    seoTitle: 'Teevexa Trace: Supply Chain Traceability App | Benjamin Baya',
    seoDescription:
      'Two offline-first mobile apps and a public verification page that record each step of a product batch’s journey, from the field to the buyer.',
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
    role: 'Founder and lead software engineer: product design, both mobile apps, the backend and the releases to Google Play.',
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
    // Search result title and description (keep under 60 and 155 characters)
    seoTitle: 'TeeDesk: Open-Source AI Customer Support | Benjamin Baya',
    seoDescription:
      'An open-source AI support platform that answers customers on web chat, WhatsApp and Telegram from a business’s own documents, with human handover.',
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
    role: 'Founder and lead software engineer: architecture, the AI pipeline, backend, dashboard and chat widget.',
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
    // Search result title and description (keep under 60 and 155 characters)
    seoTitle: 'Teevexa Platform: Client Portal and CRM | Benjamin Baya',
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
      'Ongoing social media management and paid campaigns for the company.',
    ],
    role: 'Founder and lead software engineer: product design, architecture, security model and ongoing development, with AI-assisted development. I also manage the company’s social media and advertising.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase (Postgres, Auth, RLS)', 'Edge Functions', 'Zoom API'],
    outcome:
      'Live at teevexa.com and used to run Teevexa’s own client work, including the consultation booking linked from this site. Business figures aren’t published here.',
    links: [{ label: 'Visit teevexa.com', href: 'https://www.teevexa.com' }],
  },
  {
    slug: 'tafsiri-ai',
    shortName: 'Tafsiri AI',
    kind: 'personal',
    label: 'Personal build · AI',
    client: 'Product build',
    title: 'Tafsiri AI - machine translation for Kenya’s languages',
    // Search result title and description (keep under 60 and 155 characters)
    seoTitle: 'Tafsiri AI: Translation for Kenyan Languages | Benjamin Baya',
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

];

export const getCaseStudy = (slug) => CASE_STUDIES.find((c) => c.slug === slug);

export const workImage = (name, width) => `/images/work/${name}-${width}.webp`;

export const KIND_LABEL = {
  client: 'Client project',
  business: 'Business project',
  employer: 'Buzlin Holdings product',
  teevexa: 'Teevexa product',
  personal: 'Personal product build',
};
