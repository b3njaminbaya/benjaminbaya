import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV, PERSON } from '../../data/site';
import { useTheme } from '../../hooks/useTheme';
import BookingButton from '../ui/BookingButton';
import Container from '../ui/Container';

const Navbar = () => {
  const { toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in view (homepage only)
  useEffect(() => {
    setActive('');
    if (pathname !== '/') return undefined;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -60% 0px' },
    );
    NAV.forEach(({ hash }) => {
      const el = document.getElementById(hash);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  // Close the mobile menu on navigation / Escape, and keep focus inside it
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    if (!menuOpen) return undefined;
    const focusable = menuRef.current?.querySelectorAll('a, button');
    focusable?.[0]?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        solid ? 'border-b border-line bg-paper/90 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to="/" className="group flex items-center gap-2.5" aria-label={`${PERSON.name}, home`}>
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-[0.72rem] font-bold tracking-tight text-paper"
          >
            BB
          </span>
          <span className="text-[0.95rem] font-bold tracking-tight">{PERSON.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map(({ hash, label }) => (
              <li key={hash}>
                <Link
                  to={{ pathname: '/', hash: `#${hash}` }}
                  aria-current={active === hash ? 'location' : undefined}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    active === hash ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <Moon size={18} className="dark:hidden" aria-hidden="true" />
            <Sun size={18} className="hidden dark:block" aria-hidden="true" />
          </button>
          <BookingButton className="btn-primary hidden !px-5 !py-2.5 !text-sm sm:inline-flex" />
          <button
            ref={toggleRef}
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-ink/5 lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!menuOpen}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper lg:hidden"
      >
        <Container as="nav" className="flex flex-col py-6" aria-label="Mobile">
          {NAV.map(({ hash, label }) => (
            <Link
              key={hash}
              to={{ pathname: '/', hash: `#${hash}` }}
              onClick={() => setMenuOpen(false)}
              className="border-b border-line py-4 text-2xl font-semibold tracking-tight"
            >
              {label}
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <BookingButton className="btn-primary w-full" />
            <Link to={{ pathname: '/', hash: '#contact' }} onClick={() => setMenuOpen(false)} className="btn-secondary w-full">
              Contact
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
