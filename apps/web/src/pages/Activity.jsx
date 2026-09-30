import { GitHubCalendar } from 'react-github-calendar';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useGitHubStats } from '../hooks/useGitHubStats';
import { useWakaTimeStats } from '../hooks/useWakaTimeStats';
import Container from '../components/ui/Container';

// Live engineering activity (WakaTime + GitHub). Lazy-loaded route, kept off
// the homepage so recharts never ships to first-time visitors.

const COLORS = ['#2447d6', '#5b7cf0', '#8ea4f5', '#0e1116', '#9ca3af'];
const axis = { stroke: '#9ca3af', fontSize: 12 };

const Card = ({ title, children, className = '' }) => (
  <div className={`card p-6 ${className}`}>
    <h2 className="eyebrow mb-4">{title}</h2>
    {children}
  </div>
);

const Skeleton = ({ h = 'h-[260px]' }) => <div className={`${h} animate-pulse rounded-xl bg-sunken`} />;

const Stat = ({ title, value, loading }) => (
  <div className="card p-5">
    <p className="eyebrow mb-2">{title}</p>
    {loading ? <div className="h-8 w-20 animate-pulse rounded bg-sunken" /> : <p className="text-3xl font-bold tracking-tight">{value ?? '—'}</p>}
  </div>
);

const Activity = () => {
  const { stats: gh, loading: ghLoading, error: ghError } = useGitHubStats();
  const { stats: waka, loading: wakaLoading, error: wakaError } = useWakaTimeStats();

  const weekly = waka.daily.map((d) => ({
    date: new Date(d.date).toLocaleDateString('en-US', { weekday: 'short' }),
    hours: d.hours,
  }));
  const today = weekly.length ? weekly[weekly.length - 1].hours : null;
  const avg = weekly.length ? (weekly.reduce((s, d) => s + d.hours, 0) / weekly.length).toFixed(1) : null;

  return (
    <Container className="pb-20 pt-28 sm:pt-32">
      <p className="eyebrow">Engineering activity</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tightest sm:text-5xl">What I’ve been building this week.</h1>
      <p className="mt-4 max-w-prose text-lg text-muted">Live data from WakaTime and GitHub. Private client work doesn’t always show up here.</p>

      {(ghError || wakaError) && (
        <p className="mt-6 text-sm text-muted" role="status">
          {[ghError, wakaError].filter(Boolean).join(' · ')} — the stats server may be waking up; refresh in a moment.
        </p>
      )}

      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
        <Stat title="Code time today" value={today !== null ? `${today.toFixed(1)} h` : null} loading={wakaLoading} />
        <Stat title="Daily average" value={avg !== null ? `${avg} h` : null} loading={wakaLoading} />
        <Stat title="Top language" value={waka.languages[0]?.name} loading={wakaLoading} />
        <Stat title="Commits today" value={gh.commitsToday} loading={ghLoading} />
        <Stat title="Public repos" value={gh.repos} loading={ghLoading} />
        <Stat title="Languages used" value={waka.languages.length || null} loading={wakaLoading} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card title="Most used languages">
          {wakaLoading ? (
            <Skeleton />
          ) : waka.languages.length ? (
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={waka.languages.slice(0, 5)} dataKey="percent" nameKey="name" outerRadius={90} label>
                  {waka.languages.slice(0, 5).map((l, i) => (
                    <Cell key={l.name} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-sm text-muted">No language data available.</p>
          )}
        </Card>

        <Card title="Contributions this week">
          {ghLoading ? (
            <Skeleton />
          ) : (
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={gh.weeklyCommits}>
                <XAxis dataKey="day" {...axis} />
                <YAxis allowDecimals={false} {...axis} />
                <Tooltip />
                <Line type="monotone" dataKey="commits" stroke="#2447d6" strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </Card>

        <Card title="Daily code time (hours)" className="lg:col-span-2">
          {wakaLoading ? (
            <Skeleton />
          ) : weekly.length ? (
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={weekly}>
                <XAxis dataKey="date" {...axis} />
                <YAxis {...axis} />
                <Tooltip />
                <Line type="monotone" dataKey="hours" stroke="#2447d6" strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-sm text-muted">No WakaTime data available.</p>
          )}
        </Card>

        <Card title="GitHub contributions" className="overflow-x-auto lg:col-span-2">
          <GitHubCalendar username="b3njaminbaya" blockSize={12} blockMargin={4} fontSize={12} />
        </Card>
      </div>
    </Container>
  );
};

export default Activity;
