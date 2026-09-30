import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, CornerDownLeft } from 'lucide-react';
import { BOOKING_URL, SOCIALS } from '../data/site';
import { CASE_STUDIES } from '../data/caseStudies';

// Cmd/Ctrl+K quick navigation
const COMMANDS = [
  { id: 'book', label: 'Book a consultation', type: 'link', href: BOOKING_URL },
  { id: 'services', label: 'Services', type: 'route', href: '/#services' },
  { id: 'work', label: 'Selected work', type: 'route', href: '/#work' },
  { id: 'consulting', label: 'Technology consulting', type: 'route', href: '/#consulting' },
  { id: 'growth', label: 'Digital growth', type: 'route', href: '/#growth' },
  { id: 'about', label: 'About & experience', type: 'route', href: '/#about' },
  { id: 'contact', label: 'Contact', type: 'route', href: '/#contact' },
  ...CASE_STUDIES.map((c) => ({ id: c.slug, label: `Case study: ${c.shortName}`, type: 'route', href: `/work/${c.slug}` })),
  { id: 'activity', label: 'Engineering activity', type: 'route', href: '/activity' },
  ...SOCIALS.filter((s) => ['LinkedIn', 'GitHub'].includes(s.label)).map((s) => ({
    id: s.label,
    label: `Open ${s.label}`,
    type: 'link',
    href: s.href,
  })),
];

const CommandPalette = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const q = query.trim().toLowerCase();
  const filtered = q ? COMMANDS.filter((c) => c.label.toLowerCase().includes(q)) : COMMANDS;

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setHighlighted(0);
  }, []);

  const execute = useCallback(
    (cmd) => {
      close();
      if (cmd.type === 'route') navigate(cmd.href);
      else window.open(cmd.href, '_blank', 'noopener');
    },
    [close, navigate],
  );

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => setHighlighted(0), [query]);

  useEffect(() => {
    listRef.current?.children[highlighted]?.scrollIntoView({ block: 'nearest' });
  }, [highlighted]);

  if (!open) return null;

  const onKeyDown = (e) => {
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlighted((h) => Math.min(h + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlighted((h) => Math.max(h - 1, 0));
    } else if (e.key === 'Enter' && filtered[highlighted]) {
      execute(filtered[highlighted]);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[14vh]" onClick={close}>
      <div className="absolute inset-0 bg-night/50" aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface text-ink shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-line px-4 py-3.5">
          <Search size={16} className="shrink-0 text-muted" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Jump to…"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
            role="combobox"
            aria-label="Search pages and actions"
            aria-expanded="true"
            aria-controls="cmd-list"
            aria-activedescendant={filtered[highlighted] ? `cmd-${filtered[highlighted].id}` : undefined}
          />
          <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[0.65rem] text-muted">Esc</kbd>
        </div>
        <ul id="cmd-list" ref={listRef} role="listbox" className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <li className="px-3 py-6 text-center text-sm text-muted">No results</li>
          ) : (
            filtered.map((cmd, i) => (
              <li
                key={cmd.id}
                id={`cmd-${cmd.id}`}
                role="option"
                aria-selected={i === highlighted}
                onMouseEnter={() => setHighlighted(i)}
                onClick={() => execute(cmd)}
                className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm ${
                  i === highlighted ? 'bg-accent-soft text-accent' : ''
                }`}
              >
                {cmd.label}
                {cmd.type === 'link' ? (
                  <span className="text-xs text-muted">↗</span>
                ) : (
                  i === highlighted && <CornerDownLeft size={14} aria-hidden="true" />
                )}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default CommandPalette;
