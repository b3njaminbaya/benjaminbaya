import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES, KIND_LABEL, getCaseStudy } from '../data/caseStudies';
import Container from '../components/ui/Container';
import BookingButton from '../components/ui/BookingButton';
import WorkVisual from '../components/work/WorkVisual';
import NotFound from './NotFound';

const Block = ({ label, children }) => (
  <section className="reveal grid gap-3 border-t border-line py-10 md:grid-cols-12 md:gap-8">
    <h2 className="eyebrow md:col-span-3 md:pt-1.5">{label}</h2>
    <div className="text-lg leading-relaxed md:col-span-9">{children}</div>
  </section>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const study = getCaseStudy(slug);
  if (!study) return <NotFound />;

  const index = CASE_STUDIES.indexOf(study);
  const next = CASE_STUDIES[(index + 1) % CASE_STUDIES.length];

  return (
    <article>
      <Container className="pb-12 pt-28 sm:pt-32">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <li>
              <Link to="/" className="hover:text-ink">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to={{ pathname: '/', hash: '#work' }} className="hover:text-ink">Work</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">{study.shortName}</li>
          </ol>
        </nav>

        <div className="max-w-4xl">
          <p className="eyebrow">
            {study.label}
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tightest sm:text-5xl lg:text-6xl">{study.title}</h1>
          <p className="mt-6 max-w-prose text-xl leading-relaxed text-muted">{study.summary}</p>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {[
            ['For', study.client],
            ['Type', KIND_LABEL[study.kind]],
            ['Services', study.pillars.join(', ')],
            ['Stack', `${study.tech.slice(0, 3).join(', ')}${study.tech.length > 3 ? '…' : ''}`],
          ].map(([k, v]) => (
            <div key={k} className="bg-paper p-5">
              <dt className="eyebrow mb-1">{k}</dt>
              <dd className="text-sm font-semibold [overflow-wrap:anywhere]">{v}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <Container>
        <WorkVisual
          study={study}
          priority
          sizes="(min-width: 1280px) 1216px, 100vw"
          className="rounded-3xl border"
        />
      </Container>

      <Container className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <Block label="The problem">
            <p>{study.problem}</p>
          </Block>
          <Block label="The solution">
            <ul className="space-y-3">
              {study.solution.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </Block>
          <Block label="My role">
            <p>{study.role}</p>
          </Block>
          <Block label="Technology">
            <ul className="flex flex-wrap gap-2">
              {study.tech.map((t) => (
                <li key={t} className="chip text-sm">{t}</li>
              ))}
            </ul>
          </Block>
          <Block label="Outcome">
            <p>{study.outcome}</p>
            {study.links.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-4">
                {study.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-base font-semibold text-accent">
                      {l.label} <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </Block>
        </div>
      </Container>

      <section className="bg-night py-20 text-white" aria-labelledby="cs-cta">
        <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 id="cs-cta" className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Facing a similar problem in your business?
            </h2>
            <p className="mt-4 text-lg text-white/70">Start with a conversation about the problem. We’ll work out the right solution together.</p>
          </div>
          <BookingButton className="btn-on-dark shrink-0" />
        </Container>
      </section>

      <Container className="flex items-center justify-between gap-6 py-10">
        <Link to={{ pathname: '/', hash: '#work' }} className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink">
          <ArrowLeft size={16} aria-hidden="true" /> All work
        </Link>
        <Link to={`/work/${next.slug}`} className="inline-flex items-center gap-2 text-right text-sm font-semibold hover:text-accent">
          <span>
            <span className="block text-xs font-normal text-muted">Next case study</span>
            {next.shortName}
          </span>
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </Container>
    </article>
  );
};

export default CaseStudy;
