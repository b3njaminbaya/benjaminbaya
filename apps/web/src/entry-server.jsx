// Build-time renderer used by scripts/prerender.mjs — never shipped to the browser.
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes } from './App';

export { getRouteMeta, renderHeadTags, PRERENDER_ROUTES, SITE_URL } from './seo';

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );
}
