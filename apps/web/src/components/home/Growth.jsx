import { Link } from 'react-router-dom';
import { GROWTH_AREAS } from '../../data/services';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const Growth = () => (
  <section id="growth" aria-labelledby="growth-title" className="border-y border-line bg-surface py-24 lg:py-32">
    <Container>
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <SectionHeading
          id="growth-title"
          className="lg:col-span-7"
          eyebrow="Digital growth"
          title="Marketing treated as a system you can measure."
          intro="Using digital channels to attract, convert and retain customers — built on a website that’s fast, findable and properly tracked. Not an advertising agency: an engineer who makes sure every channel can be traced back to results."
        />
        <p className="reveal text-[0.95rem] leading-relaxed text-muted lg:col-span-5">
          Creative production — photography, graphic design and short-form video — supports campaigns where it’s
          needed. The strategic focus stays on the channels, the funnel and the numbers.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {GROWTH_AREAS.map((a, i) => (
          <article
            key={a.title}
            className="reveal flex flex-col rounded-2xl border border-line bg-paper p-6"
            style={{ '--reveal-delay': `${i * 70}ms` }}
          >
            <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-4 text-xl font-bold tracking-tight">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{a.body}</p>
            <ul className="mt-6 space-y-2 border-t border-line pt-5">
              {a.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="reveal mt-10 max-w-3xl text-sm leading-relaxed text-muted">
        <span className="font-semibold text-ink">In practice:</span> I currently run social media, Google and Meta
        Ads, pixel tracking and SEO for{' '}
        <Link to="/work/precious-furniture" className="link-underline font-semibold text-ink">
          Precious Furniture Kenya
        </Link>
        , and built the SEO foundations for the Becof and BuzRyde websites. This site is built the same
        way — prerendered pages, structured data, responsive images and accessible markup.
      </p>
    </Container>
  </section>
);

export default Growth;
