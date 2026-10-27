import { useRef, useState } from 'react'
import { useOnView } from '@/hooks/useOnView'
import { prefersReducedMotion } from '@/lib/dom'

// Counts the leading number of `value` ("10M+", "16") up from 0 when in view.
export default function CountUp({ value }) {
  const ref = useRef(null)
  const [, num = '', rest = value] = value.match(/^(\d+)(.*)$/) || []
  const [n, setN] = useState(num ? 0 : null)
  useOnView(ref, () => {
    if (!num) return
    if (prefersReducedMotion()) return setN(+num)
    const start = performance.now(), dur = 1400
    const tick = now => {
      const p = Math.min(1, (now - start) / dur)
      setN(Math.round(+num * (1 - Math.pow(1 - p, 3))))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })
  return <span ref={ref}>{n ?? ''}{rest}</span>
}
