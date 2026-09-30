import { ArrowRight } from 'lucide-react';
import { PILLARS } from '../../data/services';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const Row = ({ label, children }) => (
  <div className="grid gap-1 border-t border-white/10 py-3.5 sm:grid-cols-[8.5rem_1fr] sm:gap-4">
    <dt className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-white/45 sm:pt-0.5">{label}</dt>
    <dd className="text-[0.95rem] leading-relaxed text-white/80">{children}</dd>
  </div>
);

const Services = () => (
  <section id="services" aria-labelledby="services-title" className="bg-night py-24 text-white lg:py-32">
    <Container>
      <SectionHeading
        id="services-title"
        tone="dark"
        eyebrow="Services"
        title="Consult, build, automate, grow."
        intro="Four connected capabilities that follow how businesses actually adopt technology: decide what’s worth doing, build it properly, remove the manual work, then use it to win and keep customers."
      />

      {/* Client journey */}
      <ol
        className="reveal mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4"
        aria-label="Client journey"
      >
        {PILLARS.map((p, i) => (
          <li key={p.id} className="relative bg-night p-5 sm:p-6">
            <span className="font-mono text-xs text-white/45">{p.number}</span>
            <p className="mt-2 flex items-center gap-2 text-xl font-bold tracking-tight sm:text-2xl">
              {p.name}
              {i < PILLARS.length - 1 && (
                <ArrowRight size={18} className="hidden text-white/35 md:block" aria-hidden="true" />
              )}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {PILLARS.map((p, i) => (
          <article
            key={p.id}
            id={p.id}
            aria-labelledby={`${p.id}-title`}
            className="reveal flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            style={{ '--reveal-delay': `${(i % 2) * 80}ms` }}
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 id={`${p.id}-title`} className="text-2xl font-bold tracking-tight">
                {p.name}
              </h3>
              <span className="font-mono text-xs text-white/40">{p.number}</span>
            </div>
            <p className="mt-3 text-lg font-medium leading-snug text-white">{p.tagline}</p>

            <dl className="mt-6">
              <Row label="What it is">{p.what}</Row>
              <Row label="Who it’s for">{p.who}</Row>
              <Row label="Solves">{p.problem}</Row>
            </dl>

            <ul className="mt-auto flex flex-wrap gap-2 border-t border-white/10 pt-5" aria-label={`${p.name} services`}>
              {p.offerings.map((o) => (
                <li key={o} className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/75">
                  {o}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Container>
  </section>
);

export default Services;
