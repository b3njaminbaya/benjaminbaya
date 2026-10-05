// Single source of truth for identity, URLs and contact details.
// SITE_URL can be overridden with VITE_SITE_URL (e.g. for a staging domain).

export const SITE_URL = (import.meta.env?.VITE_SITE_URL || 'https://benjaminbaya.com').replace(/\/$/, '');

export const PERSON = {
  name: 'Benjamin Baya',
  fullName: 'Benjamin Mweri Baya',
  title: 'Software Engineer | Digital Product & Business Technology Consultant',
  shortTitle: 'Software Engineer & Business Technology Consultant',
  positioning: 'I help businesses build, automate and grow with technology.',
  location: 'Nairobi, Kenya',
  email: 'b3njaminbaya@gmail.com',
  phoneDisplay: '+254 794 126 508',
  phone: '+254794126508',
  whatsapp: 'https://wa.me/254794126508',
  image: '/images/benjamin-baya.webp',
};

export const BOOKING_URL = 'https://www.teevexa.com/book-consultation';

// Facts from the booking page — keep in step with teevexa.com/book-consultation
export const CONSULTATION = {
  price: 'Free',
  length: '20 minutes',
  format: 'Zoom video call',
  availability: 'Monday – Saturday, East Africa Time (EAT)',
};

// Calls to action go through /go/<key> so each click is counted as a page view
// (see pages/Go.jsx). Use these in links; use BOOKING_URL where the real
// destination is needed (structured data, the chatbot).
export const OUTBOUND = {
  consultation: { url: BOOKING_URL, title: 'Opening the booking page…' },
  whatsapp: { url: PERSON.whatsapp, title: 'Opening WhatsApp…' },
};
export const BOOKING_LINK = '/go/consultation';
export const WHATSAPP_LINK = '/go/whatsapp';

export const TEEVEXA = {
  name: 'Teevexa Ltd',
  url: 'https://www.teevexa.com',
};

export const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/b3njaminbaya' },
  { label: 'GitHub', href: 'https://github.com/b3njaminbaya' },
  { label: 'Instagram', href: 'https://instagram.com/b3njaminbaya' },
  { label: 'Facebook', href: 'https://facebook.com/b3njaminbaya' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@b3njaminbaya' },
  { label: 'YouTube', href: 'https://www.youtube.com/@b3njaminbaya' },
];

// Primary in-page navigation (homepage anchors)
export const NAV = [
  { hash: 'services', label: 'Services' },
  { hash: 'work', label: 'Work' },
  { hash: 'consulting', label: 'Consulting' },
  { hash: 'about', label: 'About' },
  { hash: 'contact', label: 'Contact' },
];
