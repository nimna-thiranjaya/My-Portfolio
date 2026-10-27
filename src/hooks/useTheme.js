import { useEffect, useState } from 'react'

// 'dark' | 'light', remembered per browser. Applied as <html data-theme>.
export function useTheme() {
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('theme') || 'dark' } catch { return 'dark' } })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* storage blocked */ }
  }, [theme])
  return [theme, () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))]
}
