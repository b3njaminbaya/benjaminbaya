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
      <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
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
