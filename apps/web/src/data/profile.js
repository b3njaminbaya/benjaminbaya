// Experience, technology and credentials — sourced from the existing site, resume and project repositories.

export const TIMELINE = [
  {
    period: '2017 – 2023',
    title: 'B.Eng Chemical Engineering',
    org: 'Technical University of Kenya',
    body: 'Process design, mass and energy balances, systems that must run reliably. The habit it left: understand the whole system before changing any part of it.',
  },
  {
    period: 'Sep 2024 – Mar 2025',
    title: 'Full-Stack Software Engineering',
    org: 'Moringa School · graduated July 2025',
    body: 'Professional training in React, Python, Flask, PostgreSQL and REST APIs, shipping several complete applications.',
  },
  {
    period: 'Jul – Sep 2025',
    title: 'Software Engineer Intern',
    org: 'Sensys Kenya Ltd · Nairobi',
    body: 'First professional role: production systems, team workflows and client-facing engineering deliverables.',
  },
  {
    period: '2025 – Present',
    title: 'Founder',
    org: 'Teevexa Ltd',
    href: 'https://www.teevexa.com',
    body: 'Founded Teevexa to deliver software, AI and digital products for businesses. Incorporated as a private limited company in Kenya in March 2026.',
  },
  {
    period: 'Aug 2025 – Present',
    title: 'Software Engineer',
    org: 'Buzlin Holdings Inc · Canada (remote)',
    current: true,
    body: 'Engineering on the company’s two products: Buzlin, a marketplace and service-booking platform, and BuzRyde, a ride-hailing service — web, mobile, admin and API.',
  },
  {
    period: 'Sep 2026 – Present',
    title: 'Social Media & SEO',
    org: 'Precious Furniture Kenya · client engagement',
    current: true,
    body: 'Social content for Facebook, Instagram and TikTok, Google and Meta Ads, pixel tracking, SEO and Google Business Profile.',
  },
];

// Grouped by what it's for; only tools actually used.
export const STACK = [
  { group: 'Frontend', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'shadcn/ui'] },
  { group: 'Backend', items: ['Python', 'Flask', 'FastAPI', 'Django', 'Node.js', 'Laravel / PHP', 'REST & GraphQL APIs', 'WebSockets'] },
  { group: 'Mobile', items: ['Flutter', 'Dart', 'React Native', 'Kotlin'] },
  { group: 'Data', items: ['PostgreSQL', 'MySQL', 'Supabase', 'Firebase / Firestore', 'Prisma', 'Redis', 'MongoDB'] },
  { group: 'Cloud & DevOps', items: ['Vercel', 'Render', 'AWS (S3)', 'Docker', 'GitHub Actions', 'Neon'] },
  { group: 'AI & Integrations', items: ['LLM APIs (Groq / Llama)', 'Hugging Face Transformers', 'PyTorch', 'M-Pesa Daraja API', 'Stripe', 'Google Maps'] },
  { group: 'Analytics & Marketing', items: ['Google Analytics', 'Google tag & Meta Pixel', 'TikTok Pixel', 'Google Search Console', 'Google Business Profile', 'Meta, Google & TikTok Ads'] },
  { group: 'Product & Tools', items: ['Figma', 'Sanity CMS', 'Clerk', 'Git & GitHub', 'Scrum / Agile'] },
];

export const EDUCATION = [
  { title: 'Bachelor of Engineering, Chemical Engineering', org: 'Technical University of Kenya' },
  { title: 'Certificate, Full-Stack Software Engineering', org: 'Moringa School' },
];

export const CERTIFICATIONS = [
  {
    group: 'Entrepreneurship & product',
    items: [
      { title: 'Ignite Entrepreneurship', org: 'Queen’s University', date: '2025' },
      { title: 'Explore Entrepreneurship', org: 'Queen’s University', date: '2025' },
      { title: 'Introduction to Customer Discovery', org: 'Queen’s University', date: '2025' },
      { title: 'Introduction to Design Thinking', org: 'Queen’s University', date: '2025' },
      { title: 'Founders Factory Africa Academy — Explore Program', org: 'Founders Factory Africa', date: '2023' },
    ],
  },
  {
    group: 'Delivery & teams',
    items: [
      { title: 'High-Performance Teams', org: 'Queen’s University', date: '2025' },
      { title: 'The Basics of Scrum', date: '2024' },
      { title: 'Basics of Disciplined Agile', date: '2024' },
      { title: 'Fundamentals of Predictive Project Management', date: '2024' },
    ],
  },
  {
    group: 'Emerging technology',
    items: [{ title: 'Generative AI Overview for Project Managers', date: '2024' }],
  },
];

export const ORGANISATIONS = [
  { name: 'Buzlin Holdings Inc', note: 'Software Engineer — Buzlin & BuzRyde · current' },
  { name: 'Becof Organic Chemicals Limited', note: 'Client — commerce & operations platform' },
  { name: 'Esteric Kitchens & Interior Designs Ltd', note: 'Client — website & CRM' },
  { name: 'Melamart Enterprises Limited', note: 'Client — website & hire management' },
  { name: 'Precious Furniture Kenya', note: 'Client — social media & SEO · current' },
  { name: 'Sensys Kenya Ltd', note: 'Software Engineer Intern' },
  { name: 'Teevexa Ltd', note: 'Founder' },
];
