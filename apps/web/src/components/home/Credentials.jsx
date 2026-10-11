import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/profile';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const VerifyLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener"
    className="inline-flex items-center gap-0.5 text-xs font-semibold text-accent hover:underline"
  >
    {children}
    <ArrowUpRight size={12} aria-hidden="true" />
    <span className="sr-only">(opens verification page in a new tab)</span>
  </a>
);

const CertCard = ({ c }) => (
  <li className="flex flex-col rounded-2xl border border-line bg-surface p-5">
    <p className="font-mono text-xs text-muted">{c.date}</p>
    <h3 className="mt-2 font-bold leading-snug tracking-tight">{c.title}</h3>
    <p className="mt-1 text-sm text-muted">{c.org}</p>
    {c.note && <p className="mt-1 text-sm text-muted">{c.note}</p>}
    {(c.href || c.extra) && (
      <p className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-4">
        {c.href && <VerifyLink href={c.href}>Verify</VerifyLink>}
        {c.extra?.map((x) => (
          <VerifyLink key={x.href} href={x.href}>
            {x.label}
          </VerifyLink>
        ))}
      </p>
    )}
  </li>
);

const allItems = CERTIFICATIONS.flatMap((g) => g.items);
const fellowship = allItems.find((c) => c.featured && c.href);
const recognition = allItems.find((c) => c.featured && !c.href);

// The featured items are shown in the highlight card, so leave them out of the grid
const certificates = allItems.filter((c) => !c.featured);

const Credentials = () => (
  <section id="credentials" aria-labelledby="credentials-title" className="border-t border-line py-24 lg:py-32">
    <Container>
      <SectionHeading
        id="credentials-title"
        eyebrow="Credentials"
        title="Recognition and certifications."
        intro="A curated set, each relevant to the work I do, with links to verify them."
      />

      {/* Highlight: the fellowship */}
      <div className="reveal mt-12 grid gap-6 rounded-3xl border border-line bg-surface p-6 sm:p-9 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-7">
          <p className="eyebrow !text-accent">Fellowship · {fellowship.date}</p>
          <h3 className="mt-3 text-2xl font-bold leading-snug tracking-tight sm:text-[1.7rem]">{fellowship.title}</h3>
          <p className="mt-2 text-muted">{fellowship.org}</p>
          <p className="mt-4 max-w-prose font-medium leading-relaxed">{fellowship.fact}</p>
          <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            <VerifyLink href={fellowship.href}>Verify this credential</VerifyLink>
            <VerifyLink href={fellowship.factSource}>2025 Impact Report</VerifyLink>
          </p>
        </div>
        <div className="border-t border-line pt-5 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <p className="eyebrow">Also recognised · {recognition.date}</p>
          <p className="mt-2 font-semibold">{recognition.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted">Recognised for mentoring founders and outreach.</p>
          <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
            {recognition.extra.map((x) => (
              <VerifyLink key={x.href} href={x.href}>
                {x.label}
              </VerifyLink>
            ))}
          </p>
        </div>
      </div>

      {/* Certifications */}
      <ul className="reveal mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" style={{ '--reveal-delay': '80ms' }}>
        {certificates.map((c) => (
          <CertCard key={c.title} c={c} />
        ))}
      </ul>

      <p className="reveal mt-10 text-sm text-muted">
        The full picture is in my{' '}
        <Link to="/resume" className="link-underline font-semibold text-ink">
          resume
        </Link>
        .
      </p>
    </Container>
  </section>
);

export default Credentials;
