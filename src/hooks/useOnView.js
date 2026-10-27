import { useEffect } from 'react'
import { useLatest } from './useLatest'

// Runs `fn` once, the first time `ref` is at least 40% visible.
export function useOnView(ref, fn) {
  const cb = useLatest(fn)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { io.disconnect(); cb.current() } }, { threshold: 0.4 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [ref, cb])
}
