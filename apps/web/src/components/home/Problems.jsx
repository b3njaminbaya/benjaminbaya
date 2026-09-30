import { PROBLEMS } from '../../data/services';
import Container from '../ui/Container';
import BookingButton from '../ui/BookingButton';

const Problems = () => (
  <section id="problems" aria-labelledby="problems-title" className="py-24 lg:py-32">
    <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="reveal lg:sticky lg:top-28">
          <p className="eyebrow mb-4">For business owners</p>
          <h2 id="problems-title" className="text-3xl font-bold leading-[1.14] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Have a business problem that technology could solve?
          </h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted">
            You don’t need to know the technical solution before you get in touch. Most good projects start with
            a plain description of what’s getting in the way.
          </p>
          <ol className="mt-8 space-y-3 text-sm">
            {['I understand the problem first', 'I recommend the right solution — which might be small', 'Then I build and implement it'].map(
              (t, i) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-soft font-mono text-[0.7rem] font-semibold text-accent">
                    {i + 1}
                  </span>
                  <span className="font-medium">{t}</span>
                </li>
              ),
            )}
          </ol>
          <div className="mt-9">
            <BookingButton>Talk through your problem</BookingButton>
          </div>
        </div>
      </div>

      <ul className="lg:col-span-7" aria-label="Common business problems">
        {PROBLEMS.map((p, i) => (
          <li
            key={p.text}
            className="reveal group flex items-start justify-between gap-6 border-b border-line py-6 first:border-t"
            style={{ '--reveal-delay': `${i * 40}ms` }}
          >
            <div className="flex gap-5">
              <span className="pt-1 font-mono text-xs text-muted">{String(i + 1).padStart(2, '0')}</span>
              <p className="text-lg font-medium leading-snug sm:text-xl">“{p.text}”</p>
            </div>
            <span className="mt-1 shrink-0 rounded-full border border-line px-3 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-muted transition-colors group-hover:border-accent group-hover:text-accent">
              {p.pillar}
            </span>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default Problems;
