import { ArrowUpRight } from 'lucide-react';
import { TIMELINE } from '../../data/profile';
import { TEEVEXA } from '../../data/site';
import Container from '../ui/Container';

const PRINCIPLES = [
  { title: 'Problem before technology', body: 'Understand how the business works before proposing anything.' },
  { title: 'Honest scope', body: 'Recommend the smallest thing that solves the problem, or nothing.' },
  { title: 'Measure the outcome', body: 'Decide up front what success looks like, and track it.' },
  { title: 'Built to be maintained', body: 'Software that’s still useful and fixable a year after launch.' },
];

const About = () => (
  <section id="about" aria-labelledby="about-title" className="py-24 lg:py-32">
    <Container className="grid gap-16 lg:grid-cols-12">
      <div className="lg:col-span-6">
        <div className="reveal">
          <p className="eyebrow mb-4">About</p>
          <h2 id="about-title" className="text-3xl font-bold leading-[1.14] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            An engineer’s way of looking at a business.
          </h2>
        </div>

        <div className="reveal mt-8 space-y-5 text-lg leading-relaxed text-ink/85">
          <p>
            I’m Benjamin Baya, a software engineer and entrepreneur based in Nairobi, Kenya. I trained as a chemical
            engineer, which taught me to look at an operation the way you’d look at a process plant: inputs,
            outputs, bottlenecks, and the points where things quietly go wrong.
          </p>
          <p>
            I moved into software because it’s the most direct way I know to fix those bottlenecks. Today I work as
            a software engineer at Buzlin Holdings on its marketplace and ride-hailing products, and I help
            businesses directly with technology strategy, custom software, AI-powered automation and digital growth.
          </p>
          <p>
            What I care about is practical value: understanding the business first, being honest about what
            technology will and won’t fix, and building things that keep working after launch.
          </p>
        </div>

        <ul className="reveal mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <li key={p.title} className="bg-paper p-5">
              <h3 className="font-bold tracking-tight">{p.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ul>

        {/* Brand architecture: Benjamin = expertise & strategy, Teevexa = delivery */}
        <aside className="reveal mt-8 rounded-2xl border border-line bg-surface p-6" aria-labelledby="teevexa-title">
          <p className="eyebrow mb-2">Delivery partner</p>
          <h3 id="teevexa-title" className="text-lg font-bold tracking-tight">
            {TEEVEXA.name}
          </h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
            I lead the consultation, strategy and architecture personally. When a project needs a delivery team,
            it’s implemented through Teevexa, the technology company I founded, incorporated in Kenya in 2026.
          </p>
          <a
            href={TEEVEXA.url}
            target="_blank"
            rel="noopener"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent"
          >
            teevexa.com <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </aside>
      </div>

      {/* Experience timeline */}
      <div className="lg:col-span-5 lg:col-start-8">
        <h3 className="eyebrow reveal mb-8">Experience &amp; education</h3>
        <ol className="relative border-l border-line">
          {TIMELINE.slice()
            .reverse()
            .map((t, i) => (
              <li key={t.title} className="reveal relative pb-10 pl-8 last:pb-0" style={{ '--reveal-delay': `${i * 60}ms` }}>
                <span
                  className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-paper ${
                    t.current ? 'bg-accent' : 'bg-muted/60'
                  }`}
                  aria-hidden="true"
                />
                <p className="font-mono text-xs text-muted">
                  {t.period}
                  {t.current && <span className="ml-2 font-semibold text-accent">· Current</span>}
                </p>
                <h4 className="mt-1.5 text-lg font-bold leading-snug tracking-tight">{t.title}</h4>
                <p className="text-sm font-medium text-ink/70">
                  {t.href ? (
                    <a href={t.href} target="_blank" rel="noopener" className="link-underline">
                      {t.org}
                    </a>
                  ) : (
                    t.org
                  )}
                </p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{t.body}</p>
              </li>
            ))}
        </ol>
      </div>
    </Container>
  </section>
);

export default About;
