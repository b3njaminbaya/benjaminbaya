import { PROCESS } from '../../data/services';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const Process = () => (
  <section id="process" aria-labelledby="process-title" className="border-y border-line bg-sunken py-24 lg:py-32">
    <Container>
      <SectionHeading
        id="process-title"
        eyebrow="How I work"
        title="From a conversation to a working solution."
        intro="A simple, transparent process. You always know what’s being built, why, and what it’s expected to change."
      />
      {/* Why work with one person across the whole journey */}
      <div className="reveal mt-12 grid gap-6 rounded-2xl border border-line bg-surface p-6 sm:p-8 lg:grid-cols-12 lg:items-center lg:gap-10">
        <h3 className="text-2xl font-bold leading-snug tracking-tight lg:col-span-5">
          One partner, from the problem to the result.
        </h3>
        <p className="leading-relaxed text-muted lg:col-span-7">
          Many businesses end up with one vendor for the website, another for advertising and a third for the
          internal system — and nobody responsible for whether it all works together. I work across the whole
          journey: understanding the problem, recommending the right technology, building it, automating the
          workflow and measuring whether it produces results.
        </p>
      </div>

      <ol className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((s, i) => (
          <li
            key={s.step}
            className="reveal flex flex-col bg-surface p-6 sm:p-7"
            style={{ '--reveal-delay': `${i * 80}ms` }}
          >
            <span className="font-mono text-sm font-semibold text-accent">{s.step}</span>
            <h3 className="mt-6 text-lg font-bold tracking-tight">{s.title}</h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
    </Container>
  </section>
);

export default Process;
