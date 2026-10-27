import { useCallback, useEffect, useState } from 'react'
import { prefersReducedMotion } from '@/lib/dom'

// Boot screen lifecycle: 'boot' → 'leaving' (curtain lifting) → 'done' (unmounted).
// Shows once per browser session and never with reduced motion.
// `ready` flips at 'leaving' so the page animates in while the curtain lifts;
// until then <html data-booting> holds reveal animations.
export function useBoot() {
  const [phase, setPhase] = useState(() => {
    try { return !sessionStorage.getItem('booted') && !prefersReducedMotion() ? 'boot' : 'done' } catch { return 'done' }
  })
  const ready = phase !== 'boot'
  useEffect(() => { document.documentElement.toggleAttribute('data-booting', !ready) }, [ready])

  const leave = useCallback(() => {
    try { sessionStorage.setItem('booted', '1') } catch { /* storage blocked */ }
    setPhase(p => (p === 'boot' ? 'leaving' : p))
  }, [])
  const done = useCallback(() => setPhase('done'), [])

  return { show: phase !== 'done', ready, leave, done }
}
