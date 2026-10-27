import { SITE_URL, PERSON, TEEVEXA, SOCIALS, BOOKING_URL, QUOTE_URL } from './data/site';
import { CASE_STUDIES, getCaseStudy } from './data/caseStudies';
import { PILLARS } from './data/services';
import { CERTIFICATIONS } from './data/profile';

const DEFAULT_OG = `${SITE_URL}/og-image.png`;

const HOME_TITLE = 'Benjamin Baya | Software Engineer & Technology Consultant';
const HOME_DESCRIPTION =
  'Benjamin Baya helps businesses build, automate and grow with technology: websites, apps, business systems, AI automation and SEO. Based in Nairobi, Kenya.';

const PERSON_ID = `${SITE_URL}/#person`;
const SERVICE_ID = `${SITE_URL}/#service`;
const WEBSITE_ID = `${SITE_URL}/#website`;
// Same @id as the Organization markup on teevexa.com, so both sites describe one entity
const TEEVEXA_ID = `${TEEVEXA.url}/#organization`;

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
  worksFor: [{ '@type': 'Organization', name: 'Buzlin Holdings Inc', url: 'https://buzlin.ca' }, { '@id': TEEVEXA_ID }],
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

// Person has no `founder` property in schema.org; the founding link lives on the organisation
const teevexaSchema = () => ({
  '@type': 'Organization',
  '@id': TEEVEXA_ID,
  name: TEEVEXA.name,
  url: TEEVEXA.url,
  foundingDate: '2026-03-03',
  founder: { '@id': PERSON_ID },
  address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
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
      jsonLd: [personSchema(), teevexaSchema(), serviceSchema(), websiteSchema()],
    };
  }

  const workMatch = path.match(/^\/work\/([^/]+)$/);
  if (workMatch) {
    const study = getCaseStudy(workMatch[1]);
    if (study) {
      const url = `${SITE_URL}/work/${study.slug}`;
      // Social previews use JPG/PNG copies in /images/og: WebP previews don't show reliably on LinkedIn and some apps
      const image = study.image
        ? `${SITE_URL}/images/og/${study.image}.jpg`
        : study.ogImage
          ? `${SITE_URL}${study.ogImage}`
          : DEFAULT_OG;
      return {
        // Short search title and description per study, with safe fallbacks for new entries
        title: study.seoTitle || `${study.shortName} Case Study | ${PERSON.name}`,
        description: study.seoDescription || study.summary,
        canonical: url,
        image,
        imageAlt: study.image ? study.imageAlt : study.ogImage ? `${study.shortName} case study by ${PERSON.name}` : undefined,
        imageWidth: study.image || study.ogImage ? 1200 : undefined,
        imageHeight: study.image ? 675 : study.ogImage ? 630 : undefined,
        type: 'article',
        jsonLd: [
          {
            '@type': 'CreativeWork',
            '@id': `${url}#casestudy`,
            name: study.title,
            headline: study.title,
            description: study.summary,
            url,
            mainEntityOfPage: url,
            image,
            author: { '@id': PERSON_ID },
            creator: { '@id': PERSON_ID },
            isPartOf: { '@id': WEBSITE_ID },
            keywords: study.tech.join(', '),
            about: study.client,
            inLanguage: 'en',
            ...(study.updated ? { dateModified: study.updated } : {}),
          },
          breadcrumb([
            { name: 'Home', url: `${SITE_URL}/` },
            { name: 'Work', url: `${SITE_URL}/#work` },
            { name: study.title, url },
          ]),
          personSchema(),
          teevexaSchema(),
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
      title: `${PERSON.name} Resume | Software Engineer, Nairobi, Kenya`,
      description: `Resume of ${PERSON.name}, ${PERSON.shortTitle} based in Nairobi, Kenya. View or download the PDF.`,
      canonical: `${SITE_URL}/resume`,
      image: DEFAULT_OG,
      type: 'profile',
      jsonLd: [personSchema(), teevexaSchema()],
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

// <lastmod> for the sitemap: only when a real content date is known (a case
// study's `updated` field). A build date on every URL would teach search
// engines to ignore the value.
export function getLastModified(route) {
  const m = route.match(/^\/work\/([^/]+)$/);
  return (m && getCaseStudy(m[1])?.updated) || null;
}

/**
 * /llms.txt: a plain-text summary of the site for AI tools (an emerging,
 * optional convention; search engines do not require it). Generated from the
 * same data as the pages so it never drifts from what the site says.
 */
export function renderLlmsTxt() {
  const lines = [
    `# ${PERSON.name}`,
    '',
    `> ${PERSON.name} is a software engineer and business technology consultant in ${PERSON.location}. He helps businesses build, automate and grow with technology. He is the lead software engineer at Buzlin Holdings Inc and the founder and lead software engineer of ${TEEVEXA.name}, through which larger projects are delivered.`,
    '',
    '## Services',
    '',
    ...PILLARS.map((p) => `- ${p.name}: ${p.what}`),
    '',
    '## Case studies',
    '',
    ...CASE_STUDIES.map((c) => `- [${c.shortName}](${SITE_URL}/work/${c.slug}): ${c.summary}`),
    '',
    '## Pages',
    '',
    `- [Home](${SITE_URL}/): services, selected work, background and contact`,
    `- [Resume](${SITE_URL}/resume): experience, projects, skills and education`,
    '',
    '## Contact',
    '',
    `- Free 20-minute consultation: ${BOOKING_URL}`,
    `- Request a quote: ${QUOTE_URL}`,
    `- Email: ${PERSON.email}`,
    `- Phone and WhatsApp: ${PERSON.phoneDisplay}`,
    '',
  ];
  return lines.join('\n');
}

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
    `<meta property="og:image:alt" content="${esc(meta.imageAlt || `${PERSON.name} - ${PERSON.positioning}`)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${meta.image}" />`,
  );
  if (meta.canonical) tags.push(`<meta property="og:url" content="${meta.canonical}" />`);
  const [w, h] = meta.image === DEFAULT_OG ? [1200, 630] : [meta.imageWidth, meta.imageHeight];
  if (w && h) {
    tags.push(`<meta property="og:image:width" content="${w}" />`, `<meta property="og:image:height" content="${h}" />`);
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
