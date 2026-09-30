/**
 * Consistent section header: mono eyebrow, h2, optional intro paragraph.
 * `tone="dark"` for sections on the night background.
 */
const SectionHeading = ({ eyebrow, title, intro, id, tone = 'light', align = 'left', className = '' }) => {
  const centered = align === 'center';
  return (
    <div className={`reveal ${centered ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && (
        <p className={`eyebrow mb-4 ${tone === 'dark' ? 'text-white/60' : ''}`}>{eyebrow}</p>
      )}
      <h2
        id={id}
        className={`text-3xl font-bold leading-[1.14] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          tone === 'dark' ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            tone === 'dark' ? 'text-white/70' : 'text-muted'
          } ${centered ? 'mx-auto' : ''} max-w-prose`}
        >
          {intro}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
