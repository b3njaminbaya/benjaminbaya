import { ArrowUpRight } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS, ORGANISATIONS } from '../../data/profile';
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

const CertGroup = ({ group }) => (
  <div>
    <p className="eyebrow mb-3">{group.group}</p>
    <ul className="space-y-3">
      {group.items.map((c) => (
        <li key={c.title} className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
          <span>
            <span className="font-medium">{c.title}</span>
            {c.org && <span className="block text-sm text-muted">{c.org}</span>}
            {c.note && <span className="block text-sm text-muted">{c.note}</span>}
            {(c.href || c.extra) && (
              <span className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
                {c.href && <VerifyLink href={c.href}>Verify</VerifyLink>}
                {c.extra?.map((x) => (
                  <VerifyLink key={x.href} href={x.href}>
                    {x.label}
                  </VerifyLink>
                ))}
              </span>
            )}
          </span>
          <span className="shrink-0 font-mono text-xs text-muted">{c.date}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Credentials = () => (
  <section id="credentials" aria-labelledby="credentials-title" className="py-24 lg:py-32">
    <Container>
      <SectionHeading
        id="credentials-title"
        eyebrow="Background"
        title="Experience, education and credentials."
        intro="The verifiable parts of the story — organisations I’ve worked with, formal education, and a curated set of certifications with links to verify them."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-8">
        <div className="reveal">
          <h3 className="text-lg font-bold tracking-tight">Organisations</h3>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {ORGANISATIONS.map((o) => (
              <li key={o.name} className="py-3.5">
                <p className="font-semibold">{o.name}</p>
                <p className="text-sm text-muted">{o.note}</p>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-lg font-bold tracking-tight">Education</h3>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {EDUCATION.map((e) => (
              <li key={e.title} className="py-3.5">
                <p className="font-semibold">{e.title}</p>
                <p className="text-sm text-muted">{e.org}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal lg:col-span-2" style={{ '--reveal-delay': '80ms' }}>
          <h3 className="text-lg font-bold tracking-tight">Certifications</h3>
          <div className="mt-5 grid gap-8 sm:grid-cols-2">
            <CertGroup group={CERTIFICATIONS[0]} />
            <div className="space-y-8">
              {CERTIFICATIONS.slice(1).map((g) => (
                <CertGroup key={g.group} group={g} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Credentials;
