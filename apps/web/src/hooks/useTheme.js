// The initial theme is applied by an inline script in index.html before first
// paint, so this hook only flips the class — no React state, no hydration mismatch.
export function useTheme() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const next = !root.classList.contains('dark');
    root.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // storage unavailable — theme still applies for this visit
    }
  };

  return { toggleTheme };
}
