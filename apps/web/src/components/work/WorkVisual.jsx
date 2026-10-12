import { workImage } from '../../data/caseStudies';

// Stylised fallback preview for projects without a screenshot.
const AssistantMock = () => (
  <div className="bg-grid absolute inset-0 flex items-center justify-center bg-sunken p-6" aria-hidden="true">
    <div className="w-full max-w-xs rounded-xl border border-line bg-surface shadow-sm">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="text-xs font-semibold">Assistant</span>
      </div>
      <div className="space-y-2 p-4 text-[0.7rem] leading-snug">
        <p className="ml-auto w-fit max-w-[80%] rounded-lg rounded-br-sm bg-accent px-3 py-2 text-on-accent">
          Can you help automate our customer enquiries?
        </p>
        <p className="w-fit max-w-[85%] rounded-lg rounded-bl-sm bg-sunken px-3 py-2 text-ink/80">
          Yes, I build AI assistants grounded in your own business information…
        </p>
        <div className="flex gap-1 px-1 pt-1">
          <span className="h-1.5 w-1.5 rounded-full bg-muted/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-muted/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-muted/50" />
        </div>
      </div>
    </div>
  </div>
);

// Real app screenshots (from the Google Play listings) in simple phone frames.
const PhonesVisual = ({ phones, framed }) => (
  <div className="bg-grid absolute inset-0 flex items-center justify-center gap-[4%] bg-sunken p-[5%]">
    {phones.map((ph, i) => (
      <div
        key={ph.src}
        className={`aspect-[480/1000] overflow-hidden rounded-[0.7rem] border-2 border-ink/85 bg-night shadow-[0_18px_40px_-18px_rgb(0_0_0/0.5)] sm:rounded-[1.1rem] sm:border-[3px] ${
          framed ? 'w-[24%] lg:w-[26%]' : 'w-[24%]'
        } ${i === 1 ? '-translate-y-[4%]' : 'translate-y-[4%]'}`}
      >
        <img
          src={`/images/work/${ph.src}.webp`}
          width="480"
          height="1000"
          alt={ph.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
      </div>
    ))}
  </div>
);

// Illustrative preview for TeeDesk (no hosted demo to screenshot).
const SupportMock = () => (
  <div className="bg-grid absolute inset-0 flex items-center justify-center bg-sunken p-5" aria-hidden="true">
    <div className="grid w-full max-w-sm grid-cols-[38%_1fr] overflow-hidden rounded-xl border border-line bg-surface text-[0.62rem] shadow-sm">
      <div className="space-y-1.5 border-r border-line p-2.5">
        {[
          ['Web chat', 'Where is my order?', true],
          ['WhatsApp', 'Do you deliver to…', false],
          ['Telegram', 'Opening hours?', false],
        ].map(([ch, msg, active]) => (
          <div key={ch} className={`rounded-md p-1.5 ${active ? 'bg-accent-soft' : ''}`}>
            <p className={`font-mono text-[0.5rem] uppercase tracking-wider ${active ? 'text-accent' : 'text-muted'}`}>{ch}</p>
            <p className="truncate font-medium">{msg}</p>
          </div>
        ))}
      </div>
      <div className="space-y-1.5 p-2.5 leading-snug">
        <p className="ml-auto w-fit max-w-[85%] rounded-lg rounded-br-sm bg-accent px-2 py-1.5 text-on-accent">Where is my order?</p>
        <p className="w-fit max-w-[90%] rounded-lg rounded-bl-sm bg-sunken px-2 py-1.5 text-ink/80">
          It left our warehouse this morning. Here is your tracking link…
        </p>
        <p className="w-fit rounded-full border border-line px-2 py-0.5 font-mono text-[0.5rem] uppercase tracking-wider text-muted">
          Answered from knowledge base
        </p>
      </div>
    </div>
  </div>
);

// `framed`: on wide screens the visual fills a taller column, so show the
// whole screenshot as a framed image instead of cropping it to fit.
const WorkVisual = ({ study, sizes, priority = false, framed = false, className = '' }) => (
  <div
    className={`relative aspect-[16/9] overflow-hidden border-line bg-sunken ${
      framed && study.image ? 'lg:bg-grid lg:flex lg:items-center lg:justify-center lg:p-7 xl:p-10' : ''
    } ${className}`}
  >
    {study.image ? (
      <img
        src={workImage(study.image, 800)}
        srcSet={`${workImage(study.image, 800)} 800w, ${workImage(study.image, 1600)} 1600w`}
        sizes={sizes}
        width="1600"
        height="900"
        alt={study.imageAlt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover object-left-top ${
          framed ? 'lg:static lg:h-auto lg:rounded-xl lg:border lg:border-line lg:shadow-lg' : ''
        }`}
      />
    ) : study.visual === 'phones' ? (
      <PhonesVisual phones={study.phones} framed={framed} />
    ) : study.visual === 'support' ? (
      <SupportMock />
    ) : (
      <AssistantMock />
    )}
  </div>
);

export default WorkVisual;
