import { CONSULTING_AREAS } from '../../data/services';
import Container from '../ui/Container';
import BookingButton from '../ui/BookingButton';

const Consulting = () => (
  <section id="consulting" aria-labelledby="consulting-title" className="py-24 lg:py-32">
    <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
      <div className="reveal lg:col-span-5">
        <p className="eyebrow mb-4">Business technology consulting</p>
        <h2 id="consulting-title" className="text-3xl font-bold leading-[1.14] tracking-tight sm:text-4xl lg:text-[2.75rem]">
          Advice from someone who also builds it.
        </h2>
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted">
          Consulting focused specifically on technology, digital transformation, automation and digital growth —
          grounded in what’s realistic to build, maintain and afford.
        </p>

        <figure className="mt-10 border-l-2 border-accent pl-6">
          <blockquote className="text-2xl font-semibold leading-snug tracking-tight sm:text-[1.7rem]">
            You don’t need to know what technology you need. You need to explain the business problem.
          </blockquote>
          <figcaption className="mt-4 text-sm text-muted">
            Then I’ll help determine the appropriate solution — including when that’s not new software.
          </figcaption>
        </figure>

        <div className="mt-10">
          <BookingButton />
        </div>
      </div>

      <ul className="lg:col-span-7" aria-label="Consulting areas">
        {CONSULTING_AREAS.map((a, i) => (
          <li
            key={a.title}
            className="reveal grid gap-2 border-b border-line py-7 first:border-t sm:grid-cols-[3rem_14rem_1fr] sm:gap-6"
            style={{ '--reveal-delay': `${i * 50}ms` }}
          >
            <span className="font-mono text-xs text-muted sm:pt-1">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="text-lg font-bold leading-snug tracking-tight">{a.title}</h3>
            <p className="leading-relaxed text-muted">{a.body}</p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default Consulting;
