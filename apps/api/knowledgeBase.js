// Portfolio knowledge base — single source of truth for the chatbot.
// Update this file when skills, projects, or contact info changes.

const PORTFOLIO = {
  identity: {
    name: 'Benjamin Baya',
    title: 'Software Engineer | Digital Product & Business Technology Consultant',
    positioning: 'I help businesses build, automate and grow with technology.',
    location: 'Nairobi, Kenya',
    email: 'b3njaminbaya@gmail.com',
    phone: '+254 794 126 508',
    github: 'https://github.com/b3njaminbaya',
    linkedin: 'https://linkedin.com/in/b3njaminbaya',
    portfolio: 'https://benjaminbaya.com',
    booking: 'https://www.teevexa.com/book-consultation',
    quote: 'https://www.teevexa.com/start-project',
  },

  bio: `Benjamin Baya is a software engineer and entrepreneur based in Nairobi, Kenya. He helps businesses build, automate and grow with technology: he first understands the business problem, recommends the right solution, then builds and implements it. He trained as a chemical engineer (B.Eng, Technical University of Kenya), which shapes his systems-thinking approach, and completed full-stack software engineering training at Moringa School. He interned as a Software Engineer at Sensys Kenya Ltd (July to September 2025), supporting core banking integrations with Java, Spring Boot and Temenos T24/Transact, building backend APIs for financial systems and automating data pipelines with Apache NiFi. He is currently the Head of Engineering at Buzlin Holdings Inc (Canada, remote), leading all developers across the group and staying hands-on himself, from architecture and code to deployment (servers, CI/CD pipelines and app store releases), on Buzlin, BuzRyde (run by the subsidiary BuzRyde Inc) and ArtisticBuz and is Founder & Lead Software Engineer of Teevexa Ltd, the technology company through which larger projects are delivered.`,

  services: {
    consult: 'Digital transformation, business process analysis, technology strategy and roadmaps, automation and AI adoption consulting, digital presence audits, business systems consulting.',
    build: 'Business websites, landing pages, e-commerce, web and mobile apps, SaaS platforms, business management and CRM systems, dashboards, APIs and integrations.',
    automate: 'Business process and workflow automation, CRM automation, AI agents and AI customer support, WhatsApp automation, integrations, internal tools, reporting automation.',
    grow: 'SEO and local SEO, Google Business Profile, social media strategy and management, content strategy, Meta/Google/TikTok Ads, conversion tracking (Meta Pixel, TikTok Pixel), analytics, landing-page optimisation, lead generation. The focus is strategy and measurable results. He is not a full-service ad agency. In practice he manages social media and runs paid campaigns on Facebook, Instagram, TikTok and Google for client businesses and for his own company. He did the search engine optimisation on seven websites: Becof Organic Chemicals, Buzlin, BuzRyde, Esteric Kitchens & Interior Designs, Morara Home Furniture, Precious Furniture Kenya and Teevexa.',
    approach: 'Clients do not need to know what technology they need. They only need to explain the business problem. The first conversation is about the problem, not selling a service.',
  },

  teevexa: {
    name: 'Teevexa Ltd',
    website: 'https://www.teevexa.com',
    description: 'The technology company Benjamin founded (founded and incorporated in Kenya on 3 March 2026). Benjamin leads consultation, strategy and architecture; Teevexa handles implementation and delivery on larger projects.',
  },

  skills: {
    frontend: ['JavaScript / TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    backend: ['Python (Flask, FastAPI, Django)', 'Node.js', 'PHP (Laravel)', 'Java (Spring Boot)'],
    mobile: ['Flutter (Dart)', 'React Native', 'Kotlin'],
    data: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Firebase'],
    cloud: ['Vercel', 'Render', 'AWS', 'Docker', 'GitHub Actions'],
    ai: ['LLM APIs', 'Hugging Face Transformers', 'PyTorch'],
    payments: ['M-Pesa (Daraja API)', 'PesaPal', 'Stripe'],
    marketing: ['Google Analytics', 'Google Search Console', 'Google Business Profile', 'Meta, Google and TikTok Ads', 'conversion tracking'],
  },

  projects: [
    {
      name: 'Becof Organic Chemicals (business project; do not call it a client): commerce & operations platform',
      description: 'Online store with production M-Pesa payments and guest checkout, portals for farmers, distributors and experts, consultation booking, affiliate/loyalty/referral programmes, WhatsApp CTAs, SEO and Google Analytics. I also manage the company social media.',
      tech: ['React', 'TypeScript', 'Supabase', 'M-Pesa Daraja API'],
      url: 'https://www.becoforganicchemicals.com',
    },
    {
      name: 'Buzlin (Buzlin Holdings Inc, my employer, where I am Head of Engineering): marketplace & service booking',
      description: 'Audited, secured and modernised a licensed multi-vendor platform across seven apps: email and phone OTP login, live booking tracking, multi-admin support chat, seller/courier onboarding, CI/CD, S3 storage. He published the four Buzlin mobile apps (Buzlin, Buzlin Seller, Buzlin Courier, Buzlin POS) himself on Google Play, the Apple App Store and the Microsoft Store. He implemented all Buzlin payments himself: buyers pay by mobile money in Kenya and Tanzania (PesaPal), by bank through Stripe, or by PayPal, and sellers and couriers are paid out by bank, mobile money or PayPal.',
      tech: ['Laravel', 'Next.js', 'React', 'Flutter'],
      url: 'https://buzlin.ca',
    },
    {
      name: 'BuzRyde (BuzRyde Inc, a subsidiary of Buzlin Holdings Inc, my employer): ride-hailing in Canada',
      description: 'Overhauled rider and driver apps (Stripe, intercity rides), rebuilt the admin control panel (KYC, payouts, disputes, campaigns, referrals) and redesigned the EN/FR website with a CMS and SEO. He published the BuzRyde Rider and BuzRyde Driver apps himself on Google Play and the Apple App Store.',
      tech: ['Flutter', 'Firebase', 'Stripe', 'Laravel', 'React', 'Sanity'],
      url: 'https://www.buzryde.com',
    },
    {
      name: 'ArtisticBuz (Buzlin Holdings Inc product, my employer): hair transplant estimate and clinic referral platform',
      description: 'Free graft and cost estimator with an interactive scalp map and PDF estimate, consultation requests with encrypted photo uploads, a patient portal, a lead pipeline that tracks referrals to partner clinics and calculates their 10% to 15% referral fees, bookings, Stripe deposits and instalments, and a content system in English, French, Swahili and Arabic. As Head of Engineering at Buzlin Holdings I built most of the platform myself. Lead and referral figures are internal.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
      url: 'https://www.artisticbuz.com',
    },
    {
      name: 'Buzlin Holdings corporate website (my employer)',
      description: 'The group\'s bilingual English and French corporate website with its own content, careers, newsroom and newsletter system.',
      tech: ['React', 'TypeScript', 'Node.js', 'MySQL'],
      url: 'https://www.buzlinholdingsinc.com',
    },
    {
      name: 'Esteric Kitchens & Interior Designs (client): website & CRM',
      description: 'Marketing site with quote requests and portfolio, plus a CRM with a leads → customers → quotations → projects pipeline and data-driven roles. I also did the search engine optimisation for the website.',
      tech: ['Next.js', 'Prisma', 'Neon Postgres', 'Clerk'],
      url: 'https://esteric-web.vercel.app',
    },
    {
      name: 'Melamart Enterprises (client): website & hire management',
      description: 'Website for a scaffolding hire company with two branches; audited, secured and redesigned its equipment-hire admin system. Both are live.',
      tech: ['React', 'PHP', 'MySQL'],
      url: 'https://melamart-enterprises.vercel.app',
    },
    {
      name: 'Teevexa Trace (Teevexa product): supply chain traceability',
      description: 'Two mobile apps published on Google Play (Teevexa Field for workers logging batch events with photos, voice notes and GPS, working offline; Teevexa Trace for producers and buyers with a live dashboard, map, trust score and PDF certificates), plus public batch verification on the web. In pilot with early customers, with more being onboarded.',
      tech: ['React Native (Expo)', 'TypeScript', 'Supabase'],
      url: 'https://benjaminbaya.com/work/teevexa-trace',
    },
    {
      name: 'IoT Custodian (Teevexa product, private, no public link): device security monitoring',
      description: 'Monitors internet-connected devices: each device has its own learned baseline plus a machine-learning model per device type, unusual readings open incidents automatically, device firmware is checked against the National Vulnerability Database, and alerts go to Slack, PagerDuty and Opsgenie. Includes role-based access and PDF/CSV security reports.',
      tech: ['React', 'TypeScript', 'Supabase'],
    },
    {
      name: 'TeeDesk (Teevexa product): AI customer support',
      description: 'Open-source, self-hosted AI customer support: website chat widget, WhatsApp and Telegram, answers from a business knowledge base, handover to a human agent, analytics and separate accounts per business. Runs on a local AI model, so there are no per-message AI fees. No hosted demo.',
      tech: ['React', 'FastAPI', 'PostgreSQL (pgvector)', 'Ollama'],
      url: 'https://github.com/teevexa/teedesk',
    },
    {
      name: 'Teevexa platform (Teevexa product): website, client portal and CRM',
      description: 'The system Teevexa runs on: quote funnel, consultation booking, client portal and an internal CRM and project system. Live at teevexa.com. I also manage the company’s social media and advertising.',
      tech: ['React', 'TypeScript', 'Supabase'],
      url: 'https://www.teevexa.com',
    },
    {
      name: 'Tafsiri AI (personal): translation for Kenyan languages',
      description: 'Swahili/Somali/English neural translation with confidence scoring, an active-learning review queue and a LoRA fine-tuning pipeline.',
      tech: ['React', 'FastAPI', 'PyTorch', 'Transformers'],
      url: 'https://tafsiri-ai-tan.vercel.app',
    },
  ],

  education: [
    { degree: 'B.Eng Chemical Engineering', institution: 'Technical University of Kenya' },
    { degree: 'Full-Stack Software Engineering certificate (September 2024 to July 2025)', institution: 'Moringa School' },
    { degree: 'Jim Leech Mastercard Foundation Fellowship on Entrepreneurship (2025), one of 60 Fellows selected from more than 5,500 applicants across Africa; later recognised as a Fellowship Mentor (2025) and Ambassador Team member (2025-26)', institution: "Dunin-Deshpande Innovation Centre, Queen's University" },
    { degree: 'Launch Entrepreneurship (completed the Explore, Ignite and Launch track), Customer Discovery, Design Thinking and High-Performance Teams certificates (2025)', institution: "Dunin-Deshpande Innovation Centre, Queen's University" },
    { degree: 'SME Growth Lab Digital Accelerator Program (2024)', institution: 'SME Growth Lab Africa' },
    { degree: 'Generative AI Essentials for Software Developers certificate (2025)', institution: 'Moringa School' },
  ],

  availability: 'Available for client projects and consultations. The best first step is booking a consultation at https://www.teevexa.com/book-consultation (a free 20-minute Zoom call, Monday to Saturday, East Africa Time (EAT), with no commitment) or using the contact form on the site.',
};

// ─── CONTEXT BUILDER ─────────────────────────────────────────────────────────
// Detects intent from the user message and returns relevant context sections.
// Injecting focused context keeps token usage low and responses more accurate.

function buildContext(message) {
  const lower = message.toLowerCase();
  const sections = [];

  // Identity is always included as a base
  sections.push(`IDENTITY: ${PORTFOLIO.identity.name}, ${PORTFOLIO.identity.title}, based in ${PORTFOLIO.identity.location}. ${PORTFOLIO.identity.positioning} Personal website: ${PORTFOLIO.identity.portfolio} (Teevexa at teevexa.com is his company, not his personal site). Resume: ${PORTFOLIO.identity.portfolio}/resume`);

  const want = (pattern) => pattern.test(lower);

  if (want(/help|service|do you do|what do you|offer|business|automat|ai|seo|market|grow|website|app|consult|problem|need/)) {
    const sv = PORTFOLIO.services;
    sections.push(
      `SERVICES (client journey: Consult → Build → Automate → Grow):\n` +
      `  Consult: ${sv.consult}\n  Build: ${sv.build}\n  Automate: ${sv.automate}\n  Grow: ${sv.grow}\n` +
      `  Approach: ${sv.approach}`
    );
  }

  if (want(/skill|tech|stack|language|framework|know|use|built with|experience with|what can you/)) {
    const s = PORTFOLIO.skills;
    sections.push(
      `TECHNOLOGY:\n` +
      Object.entries(s).map(([k, v]) => `  ${k}: ${v.join(', ')}`).join('\n')
    );
  }

  if (want(/project|work|built|made|portfolio|app|website|demo|show me|example|client|donation|becof|buzlin|buzryde|artisticbuz|hair|esteric|melamart|sensys|precious|tafsiri|trace|teedesk|product/)) {
    const lines = PORTFOLIO.projects.map(p => {
      const link = p.url ? ` (${p.url})` : '';
      return `  • ${p.name}: ${p.description} Tech: ${p.tech.join(', ')}${link}`;
    });
    sections.push(`PROJECTS:\n${lines.join('\n')}`);
  }

  if (want(/teevexa|company|team|help me build|start project|hire|build.*for me|work together|collaborate|client|book|consult|price|pricing|cost|quote|how much|budget|charge|package/)) {
    sections.push(
      `TEEVEXA: ${PORTFOLIO.teevexa.description} Website: ${PORTFOLIO.teevexa.website}\n` +
      `BOOK A CONSULTATION: ${PORTFOLIO.identity.booking}\n` +
      `REQUEST A QUOTE: ${PORTFOLIO.identity.quote} (tailored quote within 24 hours)\n` +
      `PRICING: prices depend on scope and are not published on this site. A packages and pricing sheet is available on request by email or WhatsApp.`
    );
  }

  if (want(/contact|reach|email|phone|whatsapp|get in touch|available|hire|work with you|linkedin|github/)) {
    const c = PORTFOLIO.identity;
    sections.push(
      `CONTACT:\n` +
      `  Email: ${c.email}\n` +
      `  WhatsApp: ${c.phone}\n` +
      `  GitHub: ${c.github}\n` +
      `  LinkedIn: ${c.linkedin}\n` +
      `  Availability: ${PORTFOLIO.availability}`
    );
  }

  if (want(/education|degree|study|university|moringa|background|qualif|certif/)) {
    const lines = PORTFOLIO.education.map(e => `  • ${e.degree}, ${e.institution}`);
    sections.push(`EDUCATION:\n${lines.join('\n')}`);
  }

  if (want(/about|who are you|yourself|story|founder|engineer|tell me/)) {
    sections.push(`BIO: ${PORTFOLIO.bio}`);
  }

  // If only identity was added, include bio as default context
  if (sections.length === 1) {
    sections.push(`BIO: ${PORTFOLIO.bio}`);
    sections.push(`AVAILABILITY: ${PORTFOLIO.availability}`);
  }

  return sections.join('\n\n');
}

// ─── SYSTEM PROMPT ───────────────────────────────────────────────────────────

function buildSystemPrompt(context) {
  return `You are the website assistant for Benjamin Baya. Respond in first person on his behalf: use "I", not "he". Be warm, direct and concise. Sound like a practical consultant who also builds the technology, speaking to business owners in plain language rather than jargon.

Guidelines:
- Only answer using the context provided below. Never invent clients, numbers, results, testimonials, prices, services or tactics that aren't in the context.
- Write plain text only: no markdown, no bold, no headings, no bullet symbols. Keep it under 100 words.
- If asked about a service that is not in the context (for example photography or video production), do not say Benjamin does not do it. Say it is not among the services listed here and suggest raising it on the free consultation call.
- Never use dashes (— or –) to break up a sentence. Use commas, colons or full stops instead.
- When asked about projects, mention the two or three most relevant ones, not the full list, and be clear which are client work, which are business projects (Becof Organic Chemicals), which are Buzlin Holdings products (my employer), which are products of my own company Teevexa, and which are personal builds.
- Focus on the visitor's business problem. Reassure them they don't need to know which technology they need.
- When someone wants help or to work together, invite them to book a consultation: https://www.teevexa.com/book-consultation (a free 20-minute Zoom call, Monday to Saturday, East Africa Time (EAT), no commitment).
- If asked about prices, costs or packages: never state a price. Say prices depend on the scope, then offer to request a quote at https://www.teevexa.com/start-project (a tailored quote within 24 hours) or to book the free consultation, and mention that a packages and pricing sheet can be sent on request by email or WhatsApp.
- For direct contact: b3njaminbaya@gmail.com or WhatsApp +254 794 126 508.
- Mention Teevexa (my technology company) only when delivery or larger projects come up.
- If asked something not in the context, say so honestly and suggest booking a consultation or emailing.

CONTEXT:
${context}`;
}

// ─── DETERMINISTIC FALLBACK ──────────────────────────────────────────────────
// Used when the LLM API is unavailable. Covers the most common queries.

const FALLBACKS = {
  pricing: `Prices depend on what your business needs, so I don't publish them here. You can request a tailored quote at teevexa.com/start-project and get it within 24 hours, or book a free 20-minute consultation at teevexa.com/book-consultation. I can also send our packages and pricing sheet: email b3njaminbaya@gmail.com or WhatsApp +254 794 126 508.`,

  services: `I help businesses build, automate and grow with technology. That covers consulting on what you actually need, building websites, apps and business systems, automating repetitive work (including AI), and growing through SEO, ads and proper tracking. You don't need a technical brief: book a consultation at teevexa.com/book-consultation and tell me about the problem.`,

  skills: `I work across the stack: React, Next.js and TypeScript on the frontend; Python, Node.js, PHP (Laravel) and Java on the backend; Flutter, React Native and Kotlin for mobile; PostgreSQL, MySQL and MongoDB for data; LLM APIs for AI features; and M-Pesa, PesaPal and Stripe for payments.`,

  projects: `Business projects include the Becof Organic Chemicals commerce platform (live, with M-Pesa payments) and, for clients, a website and CRM for Esteric Kitchens and a website and hire system for Melamart. At Buzlin Holdings I am Head of Engineering, leading the developers behind Buzlin (marketplace), BuzRyde (ride-hailing, run by the subsidiary BuzRyde Inc) and ArtisticBuz (hair transplant estimates and clinic referrals), and I built the group's corporate website. Through my own company Teevexa I have shipped Teevexa Trace (supply chain traceability, two apps on Google Play), TeeDesk (open-source AI customer support), IoT Custodian (device security monitoring, private) and the Teevexa platform. Tafsiri AI, a translation tool for Kenyan languages, is a personal build. Each has a case study on this site.`,

  teevexa: `Teevexa Ltd is the technology company I founded. I lead the consultation, strategy and architecture; larger projects are delivered through Teevexa. You can book a consultation at teevexa.com/book-consultation.`,

  contact: `The best first step is a free 20-minute consultation on Zoom: teevexa.com/book-consultation. You can also email b3njaminbaya@gmail.com, WhatsApp +254 794 126 508, or use the contact form on this site.`,

  bio: `I'm Benjamin Baya, a software engineer and entrepreneur in Nairobi, Kenya. I trained as a chemical engineer, moved into software, and now help businesses turn problems into working solutions: websites, systems, automation and digital growth. I'm currently Head of Engineering at Buzlin Holdings, leading the developers behind Buzlin, BuzRyde and ArtisticBuz, and founder and lead software engineer of Teevexa.`,

  github: `My GitHub is github.com/b3njaminbaya. You'll find several of my project repositories there.`,

  default: `I'm Benjamin's assistant. Ask what he does, whether he can help with a problem in your business, or about past projects. To talk it through directly, book a consultation at teevexa.com/book-consultation.`,
};

function getFallbackResponse(message) {
  const lower = message.toLowerCase();
  if (/price|pricing|cost|quote|how much|budget|charge|package/.test(lower)) return FALLBACKS.pricing;
  if (/\bbook|contact|email|reach|phone|whatsapp|touch/.test(lower)) return FALLBACKS.contact;
  if (/help|service|do you do|offer|automat|seo|market|grow|consult|problem|need/.test(lower)) return FALLBACKS.services;
  if (/skill|tech|stack|framework|language/.test(lower)) return FALLBACKS.skills;
  if (/project|work|built|made|app|website/.test(lower)) return FALLBACKS.projects;
  if (/teevexa|company|studio|build for|client/.test(lower)) return FALLBACKS.teevexa;
  if (/contact|email|reach|hire|phone|whatsapp|touch|book/.test(lower)) return FALLBACKS.contact;
  if (/about|who|yourself|background|story/.test(lower)) return FALLBACKS.bio;
  if (/github|repo|code/.test(lower)) return FALLBACKS.github;
  return FALLBACKS.default;
}

module.exports = { buildContext, buildSystemPrompt, getFallbackResponse };
