import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';

const NotFound = () => (
  <Container className="flex min-h-[80vh] flex-col items-start justify-center pb-20 pt-32">
    <p className="eyebrow">Error 404</p>
    <h1 className="mt-4 text-4xl font-bold tracking-tightest sm:text-6xl">This page doesn’t exist.</h1>
    <p className="mt-5 max-w-prose text-lg text-muted">
      It may have moved, or the link may be out of date. These are good places to continue:
    </p>
    <div className="mt-9 flex flex-wrap gap-3">
      <Link to="/" className="btn-primary">Go to the homepage</Link>
      <Link to={{ pathname: '/', hash: '#work' }} className="btn-secondary">See my work</Link>
      <Link to={{ pathname: '/', hash: '#contact' }} className="btn-secondary">Get in touch</Link>
    </div>
  </Container>
);

export default NotFound;
