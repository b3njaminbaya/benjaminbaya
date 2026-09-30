# Benjamin Baya — Portfolio

Personal professional site and API backend, built as an npm workspaces monorepo.

**Live:** [benjamin-baya.vercel.app](https://benjamin-baya.vercel.app)

---

## Project Structure

```
Portfolio/
├── apps/
│   ├── web/          # React 19 + Vite frontend (deployed to Vercel)
│   └── api/          # Express.js backend — chatbot & stats proxy (deployed to Render)
├── package.json      # Workspace root
└── README.md
```

---

## Positioning

Personal professional site for Benjamin Baya: **"I help businesses build, automate and grow with technology."**
Client journey: **Consult → Build → Automate → Grow**. Teevexa Ltd is presented as the delivery company behind larger projects.

## Tech Stack

### Frontend (`apps/web`)
- **React 19 + Vite**, **Tailwind CSS** (design tokens in `src/index.css`, light/dark)
- **React Router 7** with **static prerendering** (`scripts/prerender.mjs`) — every indexable route ships real HTML
- Self-hosted **Manrope** variable font (Latin subsets, preloaded)
- **Recharts / react-github-calendar** only on the lazy `/activity` route

### Backend (`apps/api`)
- **Express.js** — chatbot (Groq, Llama 3.1, deterministic fallback), GitHub & WakaTime stats proxy

## Content

All copy lives in data files — edit these, not components:

| File | Contents |
|---|---|
| `src/data/site.js` | Identity, contact, booking URL, socials, `SITE_URL` |
| `src/data/services.js` | Four pillars, client problems, process, consulting & growth areas |
| `src/data/caseStudies.js` | Case studies (Problem / Solution / Role / Technology / Outcome) |
| `src/data/profile.js` | Timeline, tech stack, education, certifications |
| `src/seo.js` | Per-route titles, descriptions, canonical, OG/Twitter, JSON-LD |
| `apps/api/knowledgeBase.js` | Chatbot knowledge base |

## Routes

`/` · `/work/:slug` (case studies) · `/activity` (noindex) · `404.html`

Build output also includes `sitemap.xml` and `robots.txt` (generated from `SITE_URL`; override with `VITE_SITE_URL`).

---

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
# Clone
git clone https://github.com/b3njaminbaya/Benjamin-Baya.git
cd Benjamin-Baya

# Install all workspace dependencies
npm install

# Copy and fill environment files
cp apps/api/.env.example apps/api/.env
# Add your GROQ_API_KEY, WAKATIME_API_KEY, GITHUB_TOKEN to apps/api/.env
```

### Run

```bash
# Frontend only
npm run dev --workspace=apps/web

# Backend only
npm run dev --workspace=apps/api

# Both concurrently (from root, if concurrently is configured)
npm run dev
```

Frontend runs on `http://localhost:5173`, backend on `http://localhost:5000`.

---

## Environment Variables

### `apps/api/.env`

| Variable | Description |
|---|---|
| `GROQ_API_KEY` | Groq API key — get one free at [console.groq.com](https://console.groq.com) |
| `WAKATIME_API_KEY` | WakaTime API key from your account settings |
| `GITHUB_TOKEN` | GitHub personal access token (read-only) |
| `PORT` | Server port (default: 5000) |

The chatbot degrades gracefully to deterministic responses if `GROQ_API_KEY` is missing.

---

## Deployment

| App | Platform | Notes |
|---|---|---|
| `apps/web` | Vercel | Auto-deploys from `main` |
| `apps/api` | Render | Web service; add env vars in dashboard |

---

## Contact

- **Email:** [b3njaminbaya@gmail.com](mailto:b3njaminbaya@gmail.com)
- **LinkedIn:** [linkedin.com/in/b3njaminbaya](https://linkedin.com/in/b3njaminbaya)
- **GitHub:** [github.com/b3njaminbaya](https://github.com/b3njaminbaya)
- **Teevexa:** [teevexa.com](https://www.teevexa.com)

---

## License

[MIT](./LICENSE)
