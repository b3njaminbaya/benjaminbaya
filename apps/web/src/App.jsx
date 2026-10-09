import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import NotFound from './pages/NotFound';
import Go from './pages/Go';
import Resume from './pages/Resume';

// Charts (recharts) only load if someone visits /activity
const Activity = lazy(() => import('./pages/Activity'));

export const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work/:slug" element={<CaseStudy />} />
      <Route path="/go/:target" element={<Go />} />
      <Route path="/resume" element={<Resume />} />
      <Route
        path="/activity"
        element={
          <Suspense fallback={<div className="min-h-screen" />}>
            <Activity />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
);

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
