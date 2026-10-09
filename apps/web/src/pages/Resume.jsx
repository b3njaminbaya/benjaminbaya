import { Download, ExternalLink } from 'lucide-react';
import { PERSON } from '../data/site';
import Container from '../components/ui/Container';

const PDF = '/resume.pdf';

const Resume = () => (
  <Container className="pb-16 pt-28 sm:pt-32">
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow">Resume</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tightest sm:text-5xl">{PERSON.name}</h1>
        <p className="mt-3 text-lg text-muted">{PERSON.shortTitle}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href={PDF} target="_blank" rel="noopener" className="btn-secondary">
          <ExternalLink size={16} aria-hidden="true" /> Open in new tab
        </a>
        <a href={PDF} download="Benjamin_Mweri_Baya_Resume.pdf" className="btn-primary">
          <Download size={16} aria-hidden="true" /> Download PDF
        </a>
      </div>
    </div>

    <p className="mt-6 text-sm text-muted sm:hidden">
      If the preview doesn’t load on your phone, use Download or Open in new tab.
    </p>

    <div className="mt-8 h-[85vh] overflow-hidden rounded-2xl border border-line bg-surface">
      <iframe src={PDF} title={`${PERSON.name}, resume (PDF)`} loading="lazy" className="h-full w-full border-0" />
    </div>
  </Container>
);

export default Resume;
