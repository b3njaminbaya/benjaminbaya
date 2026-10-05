import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { PERSON } from '../../data/site';
import { PILLARS } from '../../data/services';
import Container from '../ui/Container';

const PROOF = [
  { k: 'Currently', v: 'Software Engineer, Buzlin Holdings (Buzlin & BuzRyde)' },
  { k: 'Founder', v: 'Teevexa Ltd, technology implementation' },
  { k: 'Background', v: 'B.Eng Chemical Engineering + software engineering' },
  { k: 'Clients', v: 'Agriculture, interiors, construction and retail businesses in Kenya' },
];

const Hero = () => (
  <section aria-labelledby="hero-title" className="relative overflow-hidden">
    <Container className="grid items-center gap-12 pb-16 pt-28 sm:pt-32 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-36">
      <div className="lg:col-span-7">
        <p className="eyebrow mb-6">
          {PERSON.name} <span className="mx-1.5 text-line">/</span> Software Engineer &amp; Business Technology Consultant
        </p>

        <h1
          id="hero-title"
          className="text-[2.6rem] font-bold leading-[1.02] tracking-tightest text-ink sm:text-6xl lg:text-[4.25rem]"
        >
          I help businesses <span className="text-accent">build</span>, <span className="text-accent">automate</span>{' '}
          and <span className="text-accent">grow</span> with technology.
        </h1>

        <p className="mt-7 max-w-[38rem] text-lg leading-relaxed text-muted sm:text-xl">
          Bring me the problem: a manual process, a website that doesn’t bring in customers, an idea for a
          product. I’ll help you work out the right solution, then build it: websites, software, AI-powered
          automation and digital growth you can measure.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link to={{ pathname: '/', hash: '#contact' }} className="btn-primary">
            Let’s Work Together <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link to={{ pathname: '/', hash: '#work' }} className="btn-secondary">
            View My Work <ArrowDown size={17} aria-hidden="true" />
          </Link>
        </div>
        <p className="mt-5 text-sm text-muted">
          The first conversation is a free 20-minute call about your business problem. No technical brief needed.
        </p>
      </div>

      {/* Portrait panel */}
      <div className="lg:col-span-5">
        <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border border-line bg-sunken lg:max-w-none">
          <div className="bg-grid absolute inset-0" aria-hidden="true" />
          <div
            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-accent/15 to-transparent"
            aria-hidden="true"
          />
          <img
            src="/images/benjamin-baya.webp"
            srcSet="/images/benjamin-baya-400.webp 400w, /images/benjamin-baya.webp 720w"
            sizes="(min-width: 1024px) 34vw, (min-width: 640px) 380px, 70vw"
            width="720"
            height="1496"
            alt="Portrait of Benjamin Baya, software engineer and business technology consultant"
            fetchPriority="high"
            decoding="async"
            className="absolute bottom-0 left-1/2 h-[94%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
          />

          {/* Client journey card */}
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-line bg-surface/95 p-4 shadow-[0_10px_40px_-12px_rgb(0_0_0/0.25)] backdrop-blur sm:bottom-5 sm:left-5 sm:right-auto sm:w-64">
            <p className="eyebrow mb-3 !text-[0.62rem]">How I help</p>
            <ol className="grid grid-cols-4 gap-1.5 sm:grid-cols-1 sm:gap-2">
              {PILLARS.map((p) => (
                <li key={p.id} className="flex flex-col items-start gap-0.5 sm:flex-row sm:items-center sm:gap-3">
                  <span className="font-mono text-[0.65rem] text-muted">{p.number}</span>
                  <span className="text-sm font-semibold">{p.name}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Container>

    {/* Proof strip */}
    <Container>
      <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {PROOF.map(({ k, v }) => (
          <div key={k} className="bg-paper p-5">
            <dt className="eyebrow mb-1.5">{k}</dt>
            <dd className="text-sm font-medium leading-snug text-ink">{v}</dd>
          </div>
        ))}
      </dl>
    </Container>
  </section>
);

export default Hero;
