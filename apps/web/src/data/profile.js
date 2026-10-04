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
  { group: 'Frontend', items: ['JavaScript / TypeScript', 'React', 'Next.js', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Python (Flask, FastAPI, Django)', 'Node.js', 'PHP (Laravel)', 'Java (Spring Boot)'] },
  { group: 'Mobile', items: ['Flutter (Dart)', 'React Native', 'Kotlin'] },
  { group: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Firebase'] },
  { group: 'Cloud & DevOps', items: ['Vercel', 'Render', 'AWS', 'Docker', 'GitHub Actions'] },
  { group: 'AI', items: ['LLM APIs', 'Hugging Face Transformers', 'PyTorch'] },
  { group: 'Payments', items: ['M-Pesa (Daraja API)', 'PesaPal', 'Stripe'] },
  {
    group: 'Analytics & Marketing',
    items: ['Google Analytics', 'Google Search Console', 'Google Business Profile', 'Meta, Google & TikTok Ads', 'Conversion tracking'],
  },
];

export const EDUCATION = [
  { title: 'Bachelor of Engineering, Chemical Engineering', org: 'Technical University of Kenya' },
  { title: 'Certificate, Full-Stack Software Engineering', org: 'Moringa School' },
];

const QUEENS = 'Dunin-Deshpande Innovation Centre, Queen’s University';
const qc = (id) => `https://credentials.innovationcentre.queensu.ca/${id}`;

// Curated for relevance to the services offered. `href` links to the issuer's
// verification page; `extra` holds additional verifiable credentials on one line.
export const CERTIFICATIONS = [
  {
    group: 'Entrepreneurship & innovation',
    items: [
      {
        title: 'Jim Leech Mastercard Foundation Fellowship on Entrepreneurship',
        org: QUEENS,
        date: '2025',
        href: qc('4de6607d-39bb-460d-b597-a5347c149af6#acc.wrPA8zVZ'),
      },
      {
        title: 'Launch Entrepreneurship',
        org: QUEENS,
        date: '2025',
        note: 'Completed the full Explore → Ignite → Launch track',
        href: qc('236cf376-ba21-409d-94da-bd6aa75eef6b#acc.G2BnRkXA'),
        extra: [
          { label: 'Ignite', href: qc('b485cdf9-c7c9-4185-b85b-f873ae1e05c5#acc.Dhk1FlQS') },
          { label: 'Explore', href: qc('fc950b5f-2eed-4785-a4e2-f997a6a0f34c#acc.mWw6HEuL') },
        ],
      },
      {
        title: 'Introduction to Customer Discovery',
        org: QUEENS,
        date: '2025',
        href: qc('3a84c624-edd2-47c4-a3ba-7644101ed0fd#acc.YgbHf6LM'),
      },
      {
        title: 'Introduction to Design Thinking',
        org: QUEENS,
        date: '2025',
        href: qc('dc5d0b23-f4d5-4384-9c92-59e18e321e3c#acc.xOmDBlPn'),
      },
      {
        title: 'High-Performance Teams',
        org: QUEENS,
        date: '2025',
        href: qc('49c0457e-07ba-43be-8f4d-3646d2859d45#acc.uPpLJXQd'),
      },
      {
        title: 'Fellowship Mentor & Ambassador Team',
        org: `${QUEENS} — recognised for mentoring founders and outreach`,
        date: '2025–26',
        extra: [
          { label: 'Mentor 2025', href: qc('a23e600c-7fc4-4017-8f11-4d45f8cf6e65#acc.ehOTdo3b') },
          { label: 'Ambassador 2025–26', href: qc('59f907fe-35d3-4388-9413-c87c1c03980d#acc.0TlP893s') },
        ],
      },
    ],
  },
  {
    group: 'Business growth',
    items: [
      { title: 'SME Growth Lab Digital Accelerator Program', org: 'SME Growth Lab Africa', date: '2024' },
      { title: 'Founders Factory Africa Academy — Explore Program', org: '54 Collective', date: '2023' },
    ],
  },
  {
    group: 'Artificial intelligence',
    items: [
      { title: 'Artificial Intelligence', org: 'Moringa School', date: '2025' },
      {
        title: 'Generative AI Overview for Project Managers',
        org: 'Project Management Institute',
        date: '2024',
        href: 'https://www.credly.com/badges/08ba081b-8a05-472b-a705-52fd5fcc2efe',
      },
    ],
  },
  {
    group: 'Delivery & process improvement',
    items: [
      {
        title: 'Scrum, Disciplined Agile & Predictive Project Management',
        org: 'Project Management Institute',
        date: '2024',
        extra: [{ label: 'Predictive PM', href: 'https://www.credly.com/badges/70fb3374-fad7-40b8-ab4f-79eaf152a9cc' }],
      },
      { title: 'Lean Six Sigma White Belt', org: 'The Council for Six Sigma Certification', date: '2024' },
    ],
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
