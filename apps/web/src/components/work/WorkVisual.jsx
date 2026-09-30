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
          Yes — I build AI assistants grounded in your own business information…
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

/** Screenshot (responsive WebP) or a mock, inside a fixed-ratio frame. */
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
    ) : study.visual === 'growth' ? (
      <GrowthMock />
    ) : (
      <AssistantMock />
    )}
  </div>
);

export default WorkVisual;
