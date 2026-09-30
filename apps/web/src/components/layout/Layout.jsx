import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CommandPalette from '../CommandPalette';
import { useReveal } from '../../hooks/useReveal';
import { getRouteMeta } from '../../seo';

// Scroll to the hash target (or top) on navigation, and keep <title> and the
// meta description in sync for client-side route changes.
function useRouteEffects() {
  const { pathname, hash } = useLocation();
  const firstRun = useRef(true);
  const prevPath = useRef(pathname);

  useEffect(() => {
    const samePage = prevPath.current === pathname;
    prevPath.current = pathname;
    // On the initial load, leave scroll position to the browser (restoration / native hash jump)
    if (firstRun.current) {
      firstRun.current = false;
      if (!hash) return undefined;
    }
    // Smooth within a page; instant when arriving from another route
    const behavior = samePage ? 'smooth' : 'instant';
    const frame = requestAnimationFrame(() => {
      const el = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) el.scrollIntoView({ behavior });
      else window.scrollTo({ top: 0, behavior: 'instant' });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  useEffect(() => {
    const meta = getRouteMeta(pathname);
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && meta.canonical) canonical.setAttribute('href', meta.canonical);
  }, [pathname]);
}

// The AI assistant is non-critical: load it after the page is idle so it
// never competes with the first render.
function useDeferredChatbot() {
  const [Chatbot, setChatbot] = useState(null);
  useEffect(() => {
    const load = () => import('../Chatbot').then((m) => setChatbot(() => m.default));
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(load, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(load, 2500);
    return () => clearTimeout(t);
  }, []);
  return Chatbot;
}

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  useRouteEffects();
  useReveal(pathname);
  const Chatbot = useDeferredChatbot();

  return (
    <>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <CommandPalette />
      {Chatbot && <Chatbot />}
    </>
  );
};

export default Layout;
