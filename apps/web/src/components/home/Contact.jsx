import { useState } from 'react';
import { CheckCircle, AlertCircle, Mail, MessageCircle } from 'lucide-react';
import { PERSON } from '../../data/site';
import Container from '../ui/Container';
import BookingButton from '../ui/BookingButton';

const MAX_WORDS = 800;
const MAX_FILE_BYTES = 10 * 1024 * 1024;

const inputClass =
  'w-full rounded-xl border border-line bg-paper px-4 py-3 text-[0.95rem] text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25';
const labelClass = 'mb-1.5 block text-sm font-semibold';

// Contact form posts to FormSubmit (unchanged endpoint); booking is the primary action.
const ContactForm = () => {
  const [wordCount, setWordCount] = useState(0);
  const [fileError, setFileError] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fileError || wordCount > MAX_WORDS) return;
    setStatus('submitting');
    const form = e.currentTarget;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('success');
      form.reset();
      setWordCount(0);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center py-16 text-center" role="status">
        <CheckCircle className="text-accent" size={44} aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-bold tracking-tight">Message sent</h3>
        <p className="mt-2 max-w-sm text-muted">Thanks — I’ll read it properly and reply by email.</p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-6 text-sm font-semibold text-accent">
          Send another message
        </button>
      </div>
    );
  }

  const blocked = !!fileError || wordCount > MAX_WORDS || status === 'submitting';

  return (
    <form
      action={`https://formsubmit.co/${PERSON.email}`}
      method="POST"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="space-y-5"
      aria-labelledby="form-title"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="box" />
      <input type="hidden" name="_subject" value="New enquiry from benjamin-baya portfolio" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="business" className={labelClass}>
          Business or organisation <span className="font-normal text-muted">(optional)</span>
        </label>
        <input id="business" name="business" type="text" autoComplete="organization" className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>What’s the challenge?</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe the problem in plain language — no technical brief needed."
          onChange={(e) => setWordCount(e.target.value.trim().split(/\s+/).filter(Boolean).length)}
          aria-describedby="message-count"
          className={inputClass}
        />
        <p id="message-count" className={`mt-1.5 text-xs ${wordCount > MAX_WORDS ? 'text-red-600' : 'text-muted'}`}>
          {wordCount} / {MAX_WORDS} words
        </p>
      </div>

      <div>
        <label htmlFor="attachment" className={labelClass}>
          Attachment <span className="font-normal text-muted">(optional, max 10 MB)</span>
        </label>
        <input
          id="attachment"
          type="file"
          name="attachment"
          onChange={(e) => {
            const tooBig = Array.from(e.target.files).find((f) => f.size > MAX_FILE_BYTES);
            setFileError(tooBig ? `${tooBig.name} is larger than 10 MB.` : null);
          }}
          className="w-full text-sm text-muted file:mr-3 file:rounded-full file:border-0 file:bg-accent-soft file:px-4 file:py-2 file:text-sm file:font-semibold file:text-accent"
        />
        {fileError && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600" role="alert">
            <AlertCircle size={12} aria-hidden="true" /> {fileError}
          </p>
        )}
      </div>

      {status === 'error' && (
        <p className="flex items-center gap-1.5 text-sm text-red-600" role="alert">
          <AlertCircle size={14} aria-hidden="true" /> Something went wrong. Please try again or email me directly.
        </p>
      )}

      <button type="submit" disabled={blocked} className="btn-primary w-full">
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
};

const Contact = () => (
  <section id="contact" aria-labelledby="contact-title" className="bg-night py-24 text-white lg:py-32">
    <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
      <div className="reveal lg:col-span-5">
        <p className="eyebrow mb-4 text-white/60">Let’s work together</p>
        <h2 id="contact-title" className="text-3xl font-bold leading-[1.14] tracking-tight sm:text-4xl lg:text-5xl">
          Have a business challenge you’d like to solve with technology?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/70">
          Let’s talk about it. The first conversation is about your business and the problem — not about selling you
          a particular service. If technology isn’t the answer, I’ll tell you.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <BookingButton className="btn-on-dark" />
          <a href={PERSON.whatsapp} target="_blank" rel="noopener" className="btn-ghost-dark">
            <MessageCircle size={17} aria-hidden="true" /> WhatsApp
          </a>
        </div>
        <p className="mt-4 text-sm text-white/50">Consultations are scheduled through Teevexa’s booking calendar.</p>

        <a
          href={`mailto:${PERSON.email}`}
          className="mt-10 inline-flex items-center gap-2 text-white/80 underline decoration-white/30 underline-offset-4 hover:decoration-white"
        >
          <Mail size={16} aria-hidden="true" /> {PERSON.email}
        </a>
      </div>

      <div className="reveal lg:col-span-7" style={{ '--reveal-delay': '100ms' }}>
        <div className="rounded-3xl bg-surface p-6 text-ink sm:p-10">
          <h3 id="form-title" className="text-xl font-bold tracking-tight">Prefer to write it down?</h3>
          <p className="mb-8 mt-1 text-sm text-muted">Tell me what’s happening in your business and I’ll reply by email.</p>
          <ContactForm />
        </div>
      </div>
    </Container>
  </section>
);

export default Contact;
