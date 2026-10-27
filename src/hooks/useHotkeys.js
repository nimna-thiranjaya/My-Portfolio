import { useEffect } from 'react'
import { useLatest } from './useLatest'

// Ctrl/⌘+K toggles, "/" opens (unless typing in a field).
export function usePaletteHotkeys(toggle, open) {
  const fns = useLatest({ toggle, open })
  useEffect(() => {
    const key = e => {
      const typing = /INPUT|TEXTAREA/.test(document.activeElement?.tagName)
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); fns.current.toggle() }
      else if (e.key === '/' && !typing) { e.preventDefault(); fns.current.open() }
    }
    addEventListener('keydown', key)
    return () => removeEventListener('keydown', key)
  }, [fns])
}

// Calls `fn` on Escape while `active` is true.
export function useEscape(active, fn) {
  const cb = useLatest(fn)
  useEffect(() => {
    if (!active) return
    const esc = e => e.key === 'Escape' && cb.current()
    addEventListener('keydown', esc)
    return () => removeEventListener('keydown', esc)
  }, [active, cb])
}
