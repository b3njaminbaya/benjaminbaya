import { Link } from 'react-router-dom';
import { GROWTH_AREAS } from '../../data/services';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import BookingButton from '../ui/BookingButton';

const Growth = () => (
  <section id="growth" aria-labelledby="growth-title" className="border-y border-line bg-surface py-24 lg:py-32">
    <Container>
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <SectionHeading
          id="growth-title"
          className="lg:col-span-7"
          eyebrow="Digital growth"
          title="Marketing treated as a system you can measure."
          intro="Using digital channels to attract and convert customers, built on a website that’s fast, findable and properly tracked. Not an advertising agency: an engineer who makes sure every channel can be traced back to results."
        />
        {/* Proof: this is current, hands-on work */}
        <p className="reveal border-l-2 border-accent pl-5 leading-relaxed lg:col-span-5">
          <span className="eyebrow mb-2 block !text-accent">In practice</span>
          I manage social media and run paid campaigns on Facebook, Instagram, TikTok and Google for client businesses
          and for my own company, and I built the search optimisation into the{' '}
          <Link to="/work/becof-organic-chemicals" className="link-underline font-semibold">
            Becof
          </Link>
          ,{' '}
          <Link to="/work/buzryde" className="link-underline font-semibold">
            BuzRyde
          </Link>{' '}
          and{' '}
          <Link to="/work/morara-home-furniture" className="link-underline font-semibold">
            Morara
          </Link>{' '}
          websites.
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

      <div className="reveal mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <BookingButton>Talk about your online presence</BookingButton>
        <p className="text-sm text-muted">A free 20-minute call to look at where your customers should be finding you.</p>
      </div>
    </Container>
  </section>
);

export default Growth;
