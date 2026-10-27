import { useRef, useState } from 'react'
import { useOnView } from '@/hooks/useOnView'
import { prefersReducedMotion } from '@/lib/dom'

const GLYPHS = '!<>-_\\/[]{}=+*^?#01'

// Text decodes from random glyphs, left to right, when it scrolls into view.
export default function Scramble({ text }) {
  const ref = useRef(null)
  const [out, setOut] = useState(text)
  useOnView(ref, () => {
    if (prefersReducedMotion()) return
    const start = performance.now(), dur = 650
    const tick = now => {
      const p = Math.min(1, (now - start) / dur), n = Math.floor(p * text.length)
      setOut(text.slice(0, n) + text.slice(n).replace(/\S/g, () => GLYPHS[(Math.random() * GLYPHS.length) | 0]))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })
  return <span ref={ref} aria-label={text}><span aria-hidden="true">{out}</span></span>
}
