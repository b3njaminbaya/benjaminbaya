import { useState, useEffect } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || 'https://portfolio-server-kbti.onrender.com';

export function useWakaTimeStats() {
  const [stats, setStats] = useState({ totalSeconds: 0, languages: [], daily: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchStats = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/api/wakatime-stats`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const body = await res.json();
        if (!mounted) return;
        const data = body.data;
        if (!data || !data.languages) throw new Error('Invalid WakaTime response');

        setStats({
          totalSeconds: data.total_seconds,
          languages: data.languages.map(lang => ({
            name: lang.name,
            hours: +(lang.total_seconds / 3600).toFixed(1),
            percent: lang.percent,
          })),
          daily: data.daily || [],
        });
      } catch {
        if (!mounted) return;
        setError('Activity tracker unavailable');
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchStats();
    return () => { mounted = false; };
  }, []);

  return { stats, loading, error };
}
