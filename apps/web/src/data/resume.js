// Content of the on-page resume. Mirrors resume.pdf (generated from
// ~/Projects/Resume/resume.html) — update both together.

export const RESUME = {
  profile:
    'Software engineer and founder with a chemical engineering background. I help businesses build, automate and grow with technology, from web and mobile applications to AI automation and digital marketing.',

  experience: [
    {
      role: 'Lead Software Engineer',
      dates: 'Aug 2025 - Present',
      org: 'Buzlin Holdings Inc, Canada (remote)',
      points: [
        'Modernised Buzlin, a multi-vendor marketplace, across seven web and mobile apps.',
        'Overhauled the ride-hailing apps and admin panel of BuzRyde Inc, a subsidiary, including payments and payouts.',
        'Added email and phone OTP login, live booking tracking and a shared support chat.',
        'Published the four Buzlin apps on Google Play, the App Store and the Microsoft Store, and both BuzRyde apps on Google Play and the App Store.',
        'Set up CI/CD and hardened API security.',
        'Implemented all Buzlin payments: buyers pay by mobile money in Kenya and Tanzania (PesaPal), bank through Stripe or PayPal; sellers and couriers are paid out by bank, mobile money or PayPal.',
      ],
    },
    {
      role: 'Founder & Lead Software Engineer',
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

  businessProjects: [
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
