import { SITE_URL, PERSON, TEEVEXA, SOCIALS, BOOKING_URL } from './data/site';
import { CASE_STUDIES, getCaseStudy, workImage } from './data/caseStudies';
import { PILLARS } from './data/services';
import { CERTIFICATIONS } from './data/profile';

const DEFAULT_OG = `${SITE_URL}/og-image.png`;

const HOME_TITLE = 'Benjamin Baya - Software Engineer & Business Technology Consultant';
const HOME_DESCRIPTION =
  'Benjamin Baya helps businesses build, automate and grow with technology: websites, web and mobile apps, business systems, AI automation, SEO and digital growth. Based in Nairobi, Kenya.';

const PERSON_ID = `${SITE_URL}/#person`;
const SERVICE_ID = `${SITE_URL}/#service`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const personSchema = () => ({
  '@type': 'Person',
  '@id': PERSON_ID,
  name: PERSON.name,
  alternateName: PERSON.fullName,
  url: SITE_URL,
  image: `${SITE_URL}${PERSON.image}`,
  jobTitle: PERSON.shortTitle,
  description: PERSON.positioning,
  email: `mailto:${PERSON.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
  sameAs: [...SOCIALS.map((s) => s.href), TEEVEXA.url],
  founder: { '@type': 'Organization', name: TEEVEXA.name, url: TEEVEXA.url },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Technical University of Kenya' },
    { '@type': 'EducationalOrganization', name: 'Moringa School' },
  ],
  award: ['Jim Leech Mastercard Foundation Fellowship on Entrepreneurship (Queen’s University, 2025)'],
  hasCredential: CERTIFICATIONS.flatMap((g) => g.items)
    .filter((c) => c.href)
    .map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.title,
      url: c.href,
      recognizedBy: { '@type': 'Organization', name: c.org },
    })),
  knowsAbout: [
    'Software engineering',
    'Custom software development',
    'Web application development',
    'Mobile app development',
    'Business automation',
    'AI automation',
    'Digital transformation',
    'Search engine optimisation',
    'Digital marketing',
  ],
});

const serviceSchema = () => ({
  '@type': 'ProfessionalService',
  '@id': SERVICE_ID,
  name: `${PERSON.name} - Business Technology Consulting & Software Development`,
  url: SITE_URL,
  image: DEFAULT_OG,
  description: HOME_DESCRIPTION,
  founder: { '@id': PERSON_ID },
  employee: { '@id': PERSON_ID },
  address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
  areaServed: 'Worldwide',
  potentialAction: { '@type': 'ReserveAction', target: BOOKING_URL, name: 'Book a consultation' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: PILLARS.map((p) => ({
      '@type': 'OfferCatalog',
      name: p.name,
      description: p.what,
      itemListElement: p.offerings.map((o) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: o },
      })),
    })),
  },
});

const websiteSchema = () => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: PERSON.name,
  description: HOME_DESCRIPTION,
  publisher: { '@id': PERSON_ID },
  inLanguage: 'en',
});

const breadcrumb = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

/**
 * Returns head metadata for a pathname. Used at build time (prerender) and
 * at runtime (document.title updates on client-side navigation).
 */
export function getRouteMeta(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';

  if (path === '/') {
    return {
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      canonical: `${SITE_URL}/`,
      image: DEFAULT_OG,
      type: 'profile',
      jsonLd: [personSchema(), serviceSchema(), websiteSchema()],
    };
  }

  const workMatch = path.match(/^\/work\/([^/]+)$/);
  if (workMatch) {
    const study = getCaseStudy(workMatch[1]);
    if (study) {
      const url = `${SITE_URL}/work/${study.slug}`;
      const image = study.image ? `${SITE_URL}${workImage(study.image, 1600)}` : DEFAULT_OG;
      return {
        title: `${study.title} - Case Study | ${PERSON.name}`,
        description: study.summary,
        canonical: url,
        image,
        type: 'article',
        jsonLd: [
          {
            '@type': 'CreativeWork',
            name: study.title,
            headline: study.title,
            description: study.summary,
            url,
            image,
            author: { '@id': PERSON_ID },
            keywords: study.tech.join(', '),
            about: study.client,
          },
          breadcrumb([
            { name: 'Home', url: `${SITE_URL}/` },
            { name: 'Work', url: `${SITE_URL}/#work` },
            { name: study.title, url },
          ]),
          personSchema(),
        ],
      };
    }
  }

  if (path.startsWith('/go/')) {
    return {
      title: `Redirecting… - ${PERSON.name}`,
      description: 'Redirecting.',
      canonical: null,
      image: DEFAULT_OG,
      type: 'website',
      robots: 'noindex, nofollow',
      jsonLd: [],
    };
  }

  if (path === '/resume') {
    return {
      title: `Resume - ${PERSON.name}`,
      description: `Resume of ${PERSON.name}, ${PERSON.shortTitle} based in Nairobi, Kenya. View or download the PDF.`,
      canonical: `${SITE_URL}/resume`,
      image: DEFAULT_OG,
      type: 'profile',
      jsonLd: [personSchema()],
    };
  }

  if (path === '/activity') {
    return {
      title: `Engineering Activity - ${PERSON.name}`,
      description: 'Live coding activity and GitHub contributions.',
      canonical: `${SITE_URL}/activity`,
      image: DEFAULT_OG,
      type: 'website',
      robots: 'noindex, follow',
      jsonLd: [],
    };
  }

  return {
    title: `Page not found - ${PERSON.name}`,
    description: 'This page doesn’t exist.',
    canonical: null,
    image: DEFAULT_OG,
    type: 'website',
    robots: 'noindex, follow',
    jsonLd: [],
  };
}

// Indexable routes — drives prerendering and sitemap.xml
export const PRERENDER_ROUTES = ['/', ...CASE_STUDIES.map((c) => `/work/${c.slug}`), '/resume'];

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Serialises route metadata into <head> tags (build time). */
export function renderHeadTags(meta) {
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<meta name="author" content="${esc(PERSON.name)}" />`,
    `<meta name="robots" content="${meta.robots || 'index, follow, max-image-preview:large'}" />`,
  ];
  if (meta.canonical) tags.push(`<link rel="canonical" href="${meta.canonical}" />`);
  tags.push(
    `<meta property="og:type" content="${meta.type}" />`,
    `<meta property="og:site_name" content="${esc(PERSON.name)}" />`,
    `<meta property="og:locale" content="en_GB" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:image" content="${meta.image}" />`,
    `<meta property="og:image:alt" content="${esc(`${PERSON.name} - ${PERSON.positioning}`)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${meta.image}" />`,
  );
  if (meta.canonical) tags.push(`<meta property="og:url" content="${meta.canonical}" />`);
  if (meta.image === DEFAULT_OG) {
    tags.push(
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
    );
  }
  if (meta.jsonLd?.length) {
    const graph = { '@context': 'https://schema.org', '@graph': meta.jsonLd };
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(graph).replace(/</g, '\\u003c')}</script>`,
    );
  }
  return tags.join('\n    ');
}

export { SITE_URL };
