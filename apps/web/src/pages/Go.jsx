import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { OUTBOUND } from '../data/site';
import Container from '../components/ui/Container';
import NotFound from './NotFound';

// Outbound redirect pages (/go/consultation, /go/whatsapp). Routing the main
// calls to action through a page on this site means each click is counted as
// a page view by Vercel Web Analytics — no cookies or custom events needed.
const Go = () => {
  const { target } = useParams();
  const dest = OUTBOUND[target];

  useEffect(() => {
    if (!dest) return undefined;
    // Short pause so the page view is recorded before leaving
    const t = setTimeout(() => window.location.replace(dest.url), 600);
    return () => clearTimeout(t);
  }, [dest]);

  if (!dest) return <NotFound />;

  return (
    <Container className="flex min-h-[70vh] flex-col items-start justify-center pb-20 pt-32">
      <p className="eyebrow">One moment</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{dest.title}</h1>
      <p className="mt-4 text-lg text-muted">
        If nothing happens,{' '}
        <a href={dest.url} className="link-underline font-semibold text-ink">
          continue here
        </a>
        .
      </p>
    </Container>
  );
};

export default Go;
