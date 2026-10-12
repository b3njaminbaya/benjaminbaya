// Content of the on-page resume. Mirrors resume.pdf (generated from
// ~/Projects/Resume/resume.html) — update both together.

export const RESUME = {
  profile:
    'Software engineer and founder with a chemical engineering background. I help businesses build, automate and grow with technology, from web and mobile applications to AI automation and digital marketing.',

  experience: [
    {
      role: 'Software Engineer',
      dates: 'Aug 2025 - Present',
      org: 'Buzlin Holdings Inc, Canada (remote)',
      points: [
        'Modernised Buzlin, a multi-vendor marketplace, across seven web and mobile apps.',
        'Overhauled the BuzRyde ride-hailing apps and admin panel, including payments and payouts.',
        'Added email OTP login, live booking tracking and a shared support chat.',
        'Set up CI/CD, hardened API security and prepared the apps for Google Play.',
      ],
    },
    {
      role: 'Founder & Lead Developer',
      dates: 'Mar 2026 - Present',
      org: 'Teevexa Ltd, Nairobi, Kenya',
      points: [
        'Built Teevexa Trace, a supply chain traceability product with two apps on Google Play, now in pilot.',
        'Built TeeDesk, an open-source AI customer support platform for web chat, WhatsApp and Telegram.',
        'Built the company platform: quote funnel, consultation booking, client portal and internal CRM.',
        'Built CyberGuard AI, an open-source threat-detection dashboard.',
      ],
    },
    {
      role: 'Social Media & SEO (client engagement)',
      dates: 'Sep 2026 - Present',
      org: 'Precious Furniture Kenya',
      points: [
        'Manage social media content for Facebook, Instagram and TikTok.',
        'Run Google, Meta and TikTok Ads, conversion tracking and search engine optimisation.',
      ],
    },
    {
      role: 'Software Engineer Intern',
      dates: 'Jul - Sep 2025',
      org: 'Sensys Kenya Ltd, Nairobi, Kenya',
      points: [
        'Supported core banking integrations using Java, Spring Boot and Temenos T24/Transact.',
        'Built secure backend APIs for enterprise financial systems.',
        'Automated data pipelines and workflows with Apache NiFi.',
      ],
    },
  ],

  clientProjects: [
    { name: 'Becof Organic Chemicals', to: '/work/becof-organic-chemicals', text: 'commerce platform with M-Pesa payments and distributor portals.' },
    { name: 'Esteric Kitchens & Interior Designs', to: '/work/esteric-kitchens', text: 'marketing website and internal CRM.' },
    { name: 'Melamart Enterprises', to: '/work/melamart-enterprises', text: 'website and equipment-hire management system.' },
    { name: 'Morara Home Furniture', href: 'https://www.morarahomefurniture.com', text: 'online furniture store (co-developed).' },
  ],

  personalProjects: [
    { name: 'Nyuzi', href: 'https://nyuzi.vercel.app', text: 'circular-fashion marketplace with M-Pesa checkout and donation traceability.' },
    { name: 'Tafsiri AI', to: '/work/tafsiri-ai', text: 'machine translation for Kenyan languages.' },
    { name: 'Ordo', href: 'https://ordo-inky.vercel.app', text: 'project management with real-time collaboration.' },
  ],

  skills: [
    ['Web', 'JavaScript, TypeScript, React, Next.js, Tailwind CSS'],
    ['Backend', 'Python (Flask, FastAPI, Django), Node.js, PHP (Laravel), Java (Spring Boot)'],
    ['Mobile', 'Flutter, React Native, Kotlin'],
    ['Data & cloud', 'PostgreSQL, MySQL, MongoDB, Supabase, Firebase, AWS, Docker'],
    ['AI & payments', 'LLM APIs, PyTorch, M-Pesa, PesaPal, Stripe'],
    ['Growth', 'SEO, Google Analytics, Google, Meta and TikTok Ads, conversion tracking'],
    ['Consulting', 'Process analysis, technology strategy, automation and AI adoption'],
  ],

  education: [
    { title: 'B.Eng, Chemical Engineering', dates: '2017 - 2023', org: 'Technical University of Kenya' },
    { title: 'Certificate, Full-Stack Software Engineering', dates: 'Sep 2024 - Jul 2025', org: 'Moringa School' },
  ],

  recognition: [
    'Jim Leech Mastercard Foundation Fellowship on Entrepreneurship, Queen’s University (2025): one of 60 Fellows selected from more than 5,500 applicants',
    'Fellowship Mentor (2025) and Ambassador Team (2025-26), Queen’s University',
  ],

  certifications: [
    'Launch Entrepreneurship, Queen’s University (2025)',
    'Customer Discovery, Design Thinking and High-Performance Teams, Queen’s University (2025)',
    'Generative AI Essentials for Software Developers, Moringa School (2025)',
    'SME Growth Lab Digital Accelerator Program (2024)',
  ],
};
