import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES, EXPERIMENTS } from '../../data/caseStudies';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import WorkVisual from '../work/WorkVisual';

const realWorld = CASE_STUDIES.filter((c) => c.kind === 'client' || c.kind === 'employer');
const teevexa = CASE_STUDIES.filter((c) => c.kind === 'teevexa');
const featured = realWorld.slice(0, 3);
const moreRealWorld = realWorld.slice(3);
const personal = CASE_STUDIES.filter((c) => c.kind === 'personal');

const Tag = ({ children }) => (
  <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-accent">
    {children}
  </span>
);

const FeaturedCard = ({ study }) => (
  <article className="reveal group relative grid overflow-hidden rounded-3xl border border-line bg-surface md:grid-cols-2">
    <WorkVisual
      study={study}
      sizes="(min-width: 1280px) 620px, (min-width: 768px) 50vw, 100vw"
      className="border-b md:order-2 md:aspect-auto md:h-full md:min-h-[340px] md:border-b-0 md:border-l"
    />
    <div className="flex flex-col p-6 sm:p-8 lg:p-10">
      <div className="flex flex-wrap items-center gap-2">
        <p className="eyebrow">{study.label}</p>
        {study.pillars.map((p) => (
          <Tag key={p}>{p}</Tag>
        ))}
      </div>
      <p className="mt-5 text-sm font-semibold text-muted">{study.client}</p>
      <h4 className="mt-1 text-2xl font-bold leading-tight tracking-tight sm:text-[1.7rem]">{study.title}</h4>
      <p className="mt-4 leading-relaxed text-muted">{study.summary}</p>
      <dl className="mt-6 space-y-3 border-t border-line pt-5 text-sm">
        <div>
          <dt className="eyebrow mb-1">Problem</dt>
          <dd className="line-clamp-3 leading-relaxed">{study.problem}</dd>
        </div>
        <div>
          <dt className="eyebrow mb-1">Technology</dt>
          <dd className="text-muted">{study.tech.join(' · ')}</dd>
        </div>
      </dl>
      <Link
        to={`/work/${study.slug}`}
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent after:absolute after:inset-0 after:content-['']"
      >
        Read the case study
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        <span className="sr-only">: {study.shortName}</span>
      </Link>
    </div>
  </article>
);

const CompactCard = ({ study, index }) => (
  <article
    className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface"
    style={{ '--reveal-delay': `${index * 70}ms` }}
  >
    <WorkVisual study={study} sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="border-b" />
    <div className="flex flex-1 flex-col p-6">
      <div className="flex flex-wrap items-center gap-2">
        <p className="eyebrow">{study.label}</p>
      </div>
      <h4 className="mt-3 text-lg font-bold leading-snug tracking-tight">{study.title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted">{study.summary}</p>
      <Link
        to={`/work/${study.slug}`}
        className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-accent after:absolute after:inset-0 after:content-['']"
      >
        Case study
        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        <span className="sr-only">: {study.shortName}</span>
      </Link>
    </div>
  </article>
);

const Work = () => (
  <section id="work" aria-labelledby="work-title" className="py-24 lg:py-32">
    <Container>
      <SectionHeading
        id="work-title"
        eyebrow="Selected work"
        title="Problems solved, not just things built."
        intro="Client systems, products I engineer at Buzlin Holdings, products shipped by my own company Teevexa, and a few personal builds, each written up as the problem, what I built, my role, the technology and what changed. Where an outcome hasn’t been measured, I say so."
      />

      <h3 className="eyebrow mb-6 mt-16 flex items-center gap-3">
        <span className="h-px w-8 bg-line" aria-hidden="true" />
        Client &amp; employer projects
      </h3>
      <div className="grid gap-6">
        {featured.map((s) => (
          <FeaturedCard key={s.slug} study={s} />
        ))}
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {moreRealWorld.map((s, i) => (
          <CompactCard key={s.slug} study={s} index={i} />
        ))}
      </div>

      <h3 className="eyebrow mb-6 mt-20 flex items-center gap-3">
        <span className="h-px w-8 bg-line" aria-hidden="true" />
        Teevexa products
      </h3>
      <div className="grid gap-6">
        <FeaturedCard study={teevexa[0]} />
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teevexa.slice(1).map((s, i) => (
          <CompactCard key={s.slug} study={s} index={i} />
        ))}
      </div>

      <h3 className="eyebrow mb-6 mt-20 flex items-center gap-3">
        <span className="h-px w-8 bg-line" aria-hidden="true" />
        Personal product builds
      </h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {personal.map((s, i) => (
          <CompactCard key={s.slug} study={s} index={i} />
        ))}
      </div>

      <div className="reveal mt-10 flex flex-col gap-4 rounded-2xl border border-dashed border-line p-6 sm:flex-row sm:items-center sm:gap-8">
        <p className="eyebrow shrink-0">Smaller builds</p>
        <ul className="flex flex-col gap-3 sm:flex-row sm:gap-8">
          {EXPERIMENTS.map((e) => (
            <li key={e.title} className="text-sm">
              <a href={e.href} target="_blank" rel="noopener" className="inline-flex items-center gap-1 font-semibold link-underline">
                {e.title}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <span className="block text-muted">{e.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </section>
);

export default Work;
