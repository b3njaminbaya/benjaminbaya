import { Link } from 'react-router-dom';
import { PERSON, SOCIALS, TEEVEXA, BOOKING_LINK, WHATSAPP_LINK } from '../../data/site';
import { PILLARS } from '../../data/services';
import { CASE_STUDIES } from '../../data/caseStudies';
import Container from '../ui/Container';

const heading = 'mb-4 font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white/50';
const link = 'text-sm text-white/75 transition-colors hover:text-white';

const Footer = () => (
  <footer className="bg-night text-white">
    <Container className="grid gap-12 border-t border-white/10 py-16 md:grid-cols-12">
      <div className="md:col-span-4">
        <p className="text-lg font-bold tracking-tight">{PERSON.name}</p>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/60">{PERSON.shortTitle}. {PERSON.positioning}</p>
        <p className="mt-4 text-sm text-white/60">{PERSON.location}</p>
        <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
          Larger projects are delivered through{' '}
          <a href={TEEVEXA.url} target="_blank" rel="noopener" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
            {TEEVEXA.name}
          </a>
          , my technology company.
        </p>
      </div>

      <nav aria-label="Services" className="md:col-span-2">
        <p className={heading}>Services</p>
        <ul className="space-y-2.5">
          {PILLARS.map((p) => (
            <li key={p.id}>
              <Link to={{ pathname: '/', hash: `#${p.id}` }} className={link}>
                {p.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to={{ pathname: '/', hash: '#consulting' }} className={link}>
              Technology consulting
            </Link>
          </li>
          <li>
            <Link to={{ pathname: '/', hash: '#growth' }} className={link}>
              Digital growth
            </Link>
          </li>
        </ul>
      </nav>

      <nav aria-label="Case studies" className="md:col-span-3">
        <p className={heading}>Work</p>
        <ul className="space-y-2.5">
          {CASE_STUDIES.slice(0, 6).map((c) => (
            <li key={c.slug}>
              <Link to={`/work/${c.slug}`} className={link}>
                {c.shortName}
              </Link>
            </li>
          ))}
          <li>
            <Link to={{ pathname: '/', hash: '#work' }} className={link}>
              All work →
            </Link>
          </li>
        </ul>
      </nav>

      <div className="md:col-span-3">
        <p className={heading}>Connect</p>
        <ul className="space-y-2.5">
          <li>
            <a href={BOOKING_LINK} target="_blank" rel="noopener" className={link}>
              Book a consultation
            </a>
          </li>
          <li>
            <a href={`mailto:${PERSON.email}`} className={link}>
              {PERSON.email}
            </a>
          </li>
          <li>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className={link}>
              WhatsApp
            </a>
          </li>
          <li>
            <a href={`tel:${PERSON.phone}`} className={link}>
              {PERSON.phoneDisplay}
            </a>
          </li>
        </ul>
      </div>
    </Container>

    <Container className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
      <p>
        © {new Date().getFullYear()} {PERSON.name}
      </p>
      <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Social profiles">
        {SOCIALS.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noopener me" className="transition-colors hover:text-white">
              {s.label}
            </a>
          </li>
        ))}
        <li>
          <Link to="/activity" className="transition-colors hover:text-white">
            Activity
          </Link>
        </li>
      </ul>
    </Container>
  </footer>
);

export default Footer;
