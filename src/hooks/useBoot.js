import { useCallback, useEffect, useState } from 'react'
import { prefersReducedMotion } from '@/lib/dom'

// Boot screen shows once per browser session and never with reduced motion.
// Sets <html data-booting> while it runs so reveal animations wait for it.
export function useBoot() {
  const [booting, setBooting] = useState(() => {
    try { return !sessionStorage.getItem('booted') && !prefersReducedMotion() } catch { return false }
  })
  useEffect(() => { document.documentElement.toggleAttribute('data-booting', booting) }, [booting])
  const done = useCallback(() => {
    try { sessionStorage.setItem('booted', '1') } catch { /* storage blocked */ }
    setBooting(false)
  }, [])
  return [booting, done]
}
