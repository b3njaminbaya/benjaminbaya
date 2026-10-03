// The site is light by default; the inline script in index.html applies a saved
// dark choice before first paint, so this hook only flips the class — no React state, no hydration mismatch.
export function useTheme() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const next = !root.classList.contains('dark');
    root.classList.toggle('dark', next);
    // Keep the mobile browser bar in step with the site theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next ? '#0b0d12' : '#f6f5f1');
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // storage unavailable — theme still applies for this visit
    }
  };

  return { toggleTheme };
}
