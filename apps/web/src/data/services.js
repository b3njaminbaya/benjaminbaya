// The four capability pillars, in client-journey order: Consult → Build → Automate → Grow.

export const PILLARS = [
  {
    id: 'consult',
    number: '01',
    name: 'Consult',
    tagline: 'Work out what to build before spending money building it.',
    what: 'Digital transformation, technology strategy, automation strategy and digital growth consulting.',
    who: 'Owners and teams who know something needs to change but are unsure which technology, if any, is the right answer.',
    problem: 'Money and months lost on the wrong system, the wrong tool or a project with no clear business case.',
    offerings: [
      'Digital transformation',
      'Business process analysis',
      'Technology strategy & roadmaps',
      'Automation consulting',
      'AI adoption consulting',
      'Digital presence audits',
      'Business systems consulting',
    ],
  },
  {
    id: 'build',
    number: '02',
    name: 'Build',
    tagline: 'Websites, applications and systems that your business actually runs on.',
    what: 'Websites, web and mobile applications, e-commerce, SaaS and custom business systems.',
    who: 'Businesses that need to sell online, serve customers digitally or replace spreadsheets with a proper system.',
    problem: 'Operations scattered across tools and paperwork, customers who can’t transact easily, and ideas that stay ideas.',
    offerings: [
      'Business websites & landing pages',
      'E-commerce platforms',
      'Web applications',
      'Mobile applications',
      'SaaS platforms',
      'Business management & CRM systems',
      'Dashboards',
      'APIs & integrations',
    ],
  },
  {
    id: 'automate',
    number: '03',
    name: 'Automate',
    tagline: 'Hand repetitive work to software, and use AI where it genuinely helps.',
    what: 'AI agents, workflow and CRM automation, integrations and business process automation.',
    who: 'Teams losing hours to data entry, copy-pasting between tools, chasing follow-ups or answering the same questions.',
    problem: 'Repetitive manual work that slows the team down, introduces errors and doesn’t scale as you grow.',
    offerings: [
      'Business process & workflow automation',
      'CRM automation',
      'AI agents & AI-powered workflows',
      'AI customer support',
      'WhatsApp automation',
      'Business integrations',
      'Internal tools',
      'Reporting automation',
    ],
  },
  {
    id: 'grow',
    number: '04',
    name: 'Grow',
    tagline: 'Get found, turn visitors into leads, and measure what’s working.',
    what: 'SEO, social media, advertising and conversion tracking, run by an engineer rather than an advertising agency, so every channel can be traced back to results.',
    who: 'Businesses whose customers can’t find them online, or whose website and ads aren’t producing enquiries.',
    problem: 'Marketing spend with no clear return, and a website that looks fine but doesn’t generate business.',
    // Shown as labelled rows in place of the tag list
    stages: [
      { name: 'Attract', items: 'SEO, Google Business Profile, social media' },
      { name: 'Advertise', items: 'Meta, Google and TikTok ads' },
      { name: 'Convert', items: 'Landing pages, lead generation' },
      { name: 'Measure', items: 'Conversion tracking, analytics' },
    ],
    // Used for the structured data only
    offerings: [
      'SEO & local SEO',
      'Google Business Profile',
      'Social media strategy & management',
      'Content strategy',
      'Meta, Google & TikTok Ads',
      'Conversion tracking & analytics',
      'Landing-page optimisation',
      'Lead-generation systems',
    ],
  },
];

// "Have a business problem?" — each maps to the pillar that usually answers it.
export const PROBLEMS = [
  { text: 'Your business still runs on spreadsheets and manual processes.', pillar: 'Automate' },
  { text: 'Customers can’t easily find you online.', pillar: 'Grow' },
  { text: 'Your website looks fine but isn’t generating leads.', pillar: 'Grow' },
  { text: 'You need a custom system for how your business actually works.', pillar: 'Build' },
  { text: 'Your team spends too much time on repetitive work.', pillar: 'Automate' },
  { text: 'You want to use AI but don’t know where to start.', pillar: 'Consult' },
  { text: 'Your digital marketing isn’t producing measurable results.', pillar: 'Grow' },
  { text: 'You need software but aren’t sure what you actually need.', pillar: 'Consult' },
];

export const PROCESS = [
  {
    step: '01',
    title: 'Understand the problem',
    body: 'A conversation about your business: how it works today, where it’s stuck, and what a good outcome looks like. No technical brief required.',
  },
  {
    step: '02',
    title: 'Recommend the right solution',
    body: 'A clear recommendation: what to build, what to automate, what to buy off the shelf, and what not to do at all. Scoped to your budget and stage.',
  },
  {
    step: '03',
    title: 'Build and implement',
    body: 'I design and build the solution. Larger projects are delivered through Teevexa, my technology company, so you get a team without losing a single point of contact.',
  },
  {
    step: '04',
    title: 'Launch, measure, improve',
    body: 'Tracking is set up from day one so you can see what the investment is doing. Then we iterate on what the numbers show.',
  },
];
