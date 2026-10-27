import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../../data/caseStudies';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import WorkVisual from '../work/WorkVisual';

const realWorld = CASE_STUDIES.filter((c) => ['business', 'client', 'employer'].includes(c.kind));
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
  <article className="reveal group relative grid overflow-hidden rounded-3xl border border-line bg-surface lg:grid-cols-[5fr_6fr]">
    <WorkVisual
      study={study}
      framed
      sizes="(min-width: 1280px) 620px, (min-width: 1024px) 50vw, 100vw"
      className="border-b lg:order-2 lg:aspect-auto lg:h-full lg:min-h-[340px] lg:border-b-0 lg:border-l"
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
        intro="Business systems, products I engineer at Buzlin Holdings, products shipped by my own company Teevexa, and one personal build, each written up as the problem, what I built, my role, the technology and what changed. Where an outcome hasn’t been measured, I say so."
      />

      <h3 className="eyebrow mb-6 mt-16 flex items-center gap-3">
        <span className="h-px w-8 bg-line" aria-hidden="true" />
        Business projects
      </h3>
      <div className="grid gap-6">
        {featured.map((s) => (
          <FeaturedCard key={s.slug} study={s} />
        ))}
      </div>
      <div className={`mt-6 grid gap-6 sm:grid-cols-2 ${moreRealWorld.length % 3 === 0 ? 'lg:grid-cols-3' : ''}`}>
        {moreRealWorld.map((s, i) => (
          <CompactCard key={s.slug} study={s} index={i} />
        ))}
      </div>
      <p className="reveal mt-6 text-sm leading-relaxed text-muted">
        <span className="font-semibold text-ink">Also built at Buzlin Holdings:</span> the group’s bilingual corporate
        website,{' '}
        <a href="https://www.buzlinholdingsinc.com" target="_blank" rel="noopener" className="link-underline font-semibold text-ink">
          buzlinholdingsinc.com
        </a>
        , with its own content, careers and newsletter system.
      </p>

      <h3 className="eyebrow mb-6 mt-20 flex items-center gap-3">
        <span className="h-px w-8 bg-line" aria-hidden="true" />
        Teevexa products
      </h3>
      <div className="grid gap-6">
        <FeaturedCard study={teevexa[0]} />
      </div>
      <div className={`mt-6 grid gap-6 sm:grid-cols-2 ${(teevexa.length - 1) % 3 === 0 ? 'lg:grid-cols-3' : ''}`}>
        {teevexa.slice(1).map((s, i) => (
          <CompactCard key={s.slug} study={s} index={i} />
        ))}
      </div>
      <p className="reveal mt-6 text-sm leading-relaxed text-muted">
        <span className="font-semibold text-ink">Also built at Teevexa:</span> IoT Custodian, a private device security
        monitoring platform with machine-learning anomaly detection, automatic incident management and vulnerability checks.
      </p>

      <h3 className="eyebrow mb-6 mt-20 flex items-center gap-3">
        <span className="h-px w-8 bg-line" aria-hidden="true" />
        Personal build
      </h3>
      <div className="grid gap-6">
        {personal.map((s) => (
          <FeaturedCard key={s.slug} study={s} />
        ))}
      </div>
    </Container>
  </section>
);

export default Work;
