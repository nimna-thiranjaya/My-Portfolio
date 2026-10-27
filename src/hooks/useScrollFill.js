import { useEffect } from 'react'

// Sets --fill (0..1) on `ref` for how far a line at 60% of the viewport has passed through it,
// and toggles .lit on direct <li> children that line has passed.
export function useScrollFill(ref) {
  useEffect(() => {
    const on = () => {
      const el = ref.current, r = el.getBoundingClientRect(), line = innerHeight * 0.6
      el.style.setProperty('--fill', Math.min(1, Math.max(0, (line - r.top) / r.height)).toFixed(3))
      el.querySelectorAll(':scope > li').forEach(li => li.classList.toggle('lit', li.getBoundingClientRect().top < line))
    }
    on()
    addEventListener('scroll', on, { passive: true })
    return () => removeEventListener('scroll', on)
  }, [ref])
}
