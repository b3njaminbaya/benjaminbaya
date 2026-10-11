import { Link } from 'react-router-dom';
import { Download, ExternalLink } from 'lucide-react';
import { PERSON } from '../data/site';
import { RESUME } from '../data/resume';
import Container from '../components/ui/Container';

// The resume is rendered as real page content so it reflows on any screen.
// The PDF is offered as a download: phones handle embedded PDFs poorly.
const PDF_VIEW = '/resume.pdf';
// Same file, served with a "save as attachment" header (see vercel.json) so
// mobile browsers download it instead of trying to display it.
const PDF_DOWNLOAD = '/Benjamin_Mweri_Baya_Resume.pdf';

const Section = ({ title, children }) => (
  <section className="mt-8 first:mt-0">
    <h2 className="border-b border-ink pb-1 text-sm font-bold uppercase tracking-wide">{title}</h2>
    <div className="mt-3">{children}</div>
  </section>
);

const Bullets = ({ items }) => (
  <ul className="mt-1.5 list-disc space-y-1 pl-5 marker:text-muted">
    {items.map((t) => (
      <li key={t}>{t}</li>
    ))}
  </ul>
);

const ProjectList = ({ items }) => (
  <ul className="list-disc space-y-1.5 pl-5 marker:text-muted">
    {items.map((p) => (
      <li key={p.name}>
        <Link to={p.to} className="font-bold link-underline">
          {p.name}
        </Link>
        : {p.text}
      </li>
    ))}
  </ul>
);

const Resume = () => (
  <Container className="pb-16 pt-28 sm:pt-32">
    <div className="mx-auto max-w-3xl">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Resume</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tightest sm:text-5xl">{PERSON.name}</h1>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={PDF_DOWNLOAD} download="Benjamin_Mweri_Baya_Resume.pdf" className="btn-primary">
            <Download size={16} aria-hidden="true" /> Download PDF
          </a>
          <a href={PDF_VIEW} target="_blank" rel="noopener" className="btn-secondary">
            <ExternalLink size={16} aria-hidden="true" /> Open PDF
          </a>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted sm:hidden">
        Opened this from Facebook or Instagram? If the download doesn’t start, open this page in Chrome or Safari.
      </p>

      {/* The resume itself */}
      <article className="mt-8 rounded-2xl border border-line bg-surface p-5 text-[0.95rem] leading-relaxed sm:p-10">
        <header className="text-center">
          <p className="text-2xl font-bold uppercase tracking-wide sm:text-3xl">{PERSON.fullName}</p>
          <p className="mt-1">{PERSON.shortTitle}</p>
          <p className="mt-2 text-sm text-muted">
            {PERSON.location} ·{' '}
            <a href={`mailto:${PERSON.email}`} className="link-underline">
              {PERSON.email}
            </a>{' '}
            ·{' '}
            <a href={`tel:${PERSON.phone}`} className="whitespace-nowrap link-underline">
              {PERSON.phoneDisplay}
            </a>
          </p>
        </header>

        <div className="mt-8">
          <Section title="Profile">
            <p>{RESUME.profile}</p>
          </Section>

          <Section title="Experience">
            <div className="space-y-5">
              {RESUME.experience.map((job) => (
                <div key={job.role}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h3 className="font-bold">{job.role}</h3>
                    <p className="shrink-0 text-sm text-muted sm:text-[0.95rem] sm:text-ink">{job.dates}</p>
                  </div>
                  <p className="italic text-ink/80">{job.org}</p>
                  <Bullets items={job.points} />
                </div>
              ))}
            </div>
          </Section>

          <Section title="Client projects">
            <ProjectList items={RESUME.clientProjects} />
          </Section>

          <Section title="Personal projects">
            <ProjectList items={RESUME.personalProjects} />
          </Section>

          <Section title="Skills">
            <dl className="space-y-2 sm:space-y-1.5">
              {RESUME.skills.map(([k, v]) => (
                <div key={k} className="sm:grid sm:grid-cols-[9rem_1fr] sm:gap-3">
                  <dt className="font-bold">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section title="Education">
            <div className="space-y-3">
              {RESUME.education.map((e) => (
                <div key={e.title}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h3 className="font-bold">{e.title}</h3>
                    <p className="shrink-0 text-sm text-muted sm:text-[0.95rem] sm:text-ink">{e.dates}</p>
                  </div>
                  <p className="italic text-ink/80">{e.org}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Recognition">
            <Bullets items={RESUME.recognition} />
          </Section>

          <Section title="Certifications">
            <Bullets items={RESUME.certifications} />
          </Section>

          <p className="mt-8 italic text-muted">Referees available on request.</p>
        </div>
      </article>
    </div>
  </Container>
);

export default Resume;
