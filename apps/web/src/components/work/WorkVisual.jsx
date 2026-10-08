import { workImage } from '../../data/caseStudies';

// Stylised preview for projects without a screenshot (the AI assistant).
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

// Stylised preview for the digital-growth engagement (no screenshot to show).
const GrowthMock = () => (
  <div className="bg-grid absolute inset-0 flex items-center justify-center bg-sunken p-6" aria-hidden="true">
    <div className="grid w-full max-w-sm grid-cols-2 gap-2.5">
      {[
        ['Social', 'FB · IG · TikTok'],
        ['Ads', 'Google · Meta'],
        ['Tracking', 'Google tag · Meta Pixel'],
        ['Search', 'SEO · Business Profile'],
      ].map(([k, v]) => (
        <div key={k} className="rounded-xl border border-line bg-surface p-3.5 shadow-sm">
          <p className="font-mono text-[0.6rem] uppercase tracking-wider text-muted">{k}</p>
          <p className="mt-1 text-xs font-semibold">{v}</p>
        </div>
      ))}
    </div>
  </div>
);

// Real app screenshots (from the Google Play listings) in simple phone frames.
const PhonesVisual = ({ phones }) => (
  <div className="bg-grid absolute inset-0 flex items-end justify-center gap-[3.5%] bg-sunken px-[5%] pt-[5%]">
    {phones.map((ph, i) => (
      <div
        key={ph.src}
        className={`aspect-[9/17] w-[26%] overflow-hidden rounded-t-[1.1rem] border-[3px] border-b-0 border-ink/85 bg-night shadow-[0_18px_40px_-18px_rgb(0_0_0/0.5)] ${
          i === 1 ? 'mb-0' : '-mb-[6%]'
        }`}
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

// Illustrative preview for CyberGuard AI.
const SecurityMock = () => (
  <div className="bg-grid absolute inset-0 flex items-center justify-center bg-sunken p-5" aria-hidden="true">
    <div className="w-full max-w-xs rounded-xl border border-line bg-surface p-3 text-[0.62rem] shadow-sm">
      <div className="mb-2 flex items-end gap-1" style={{ height: '2.2rem' }}>
        {[30, 45, 28, 60, 38, 90, 42, 35, 55, 32].map((h, i) => (
          <span key={i} className={`flex-1 rounded-sm ${h > 80 ? 'bg-accent' : 'bg-ink/15'}`} style={{ height: `${h}%` }} />
        ))}
      </div>
      {[
        ['Unusual outbound traffic', 'High'],
        ['Repeated failed logins', 'Medium'],
        ['New device on network', 'Low'],
      ].map(([t, sev]) => (
        <div key={t} className="flex items-center justify-between gap-2 border-t border-line py-1.5">
          <span className="truncate font-medium">{t}</span>
          <span
            className={`shrink-0 rounded-full px-1.5 py-0.5 font-mono text-[0.5rem] uppercase tracking-wider ${
              sev === 'High' ? 'bg-accent text-on-accent' : 'border border-line text-muted'
            }`}
          >
            {sev}
          </span>
        </div>
      ))}
    </div>
  </div>
);

/** Screenshot (responsive WebP), phone screenshots or a mock, inside a fixed-ratio frame. */
const WorkVisual = ({ study, sizes, priority = false, className = '' }) => (
  <div className={`relative aspect-[16/9] overflow-hidden border-line bg-sunken ${className}`}>
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
        className="absolute inset-0 h-full w-full object-cover object-left-top"
      />
    ) : study.visual === 'phones' ? (
      <PhonesVisual phones={study.phones} />
    ) : study.visual === 'support' ? (
      <SupportMock />
    ) : study.visual === 'security' ? (
      <SecurityMock />
    ) : study.visual === 'growth' ? (
      <GrowthMock />
    ) : (
      <AssistantMock />
    )}
  </div>
);

export default WorkVisual;
