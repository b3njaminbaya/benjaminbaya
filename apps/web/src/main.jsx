import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { inject } from '@vercel/analytics';
import './index.css';
import App from './App';

// Cookieless page-view analytics (Vercel Web Analytics); does nothing in local development
inject();

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Prerendered routes ship real HTML → hydrate it. Client-only routes
// (e.g. /activity) ship an empty root → render from scratch.
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
