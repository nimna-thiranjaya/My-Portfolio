import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '@/lib/dom'

const GAP = 28 // px between dots
const RADIUS = 150 // px around the cursor that reacts

// Full-screen dot grid. Dots near the cursor light up and get pushed away; a slow wave runs across the rest.
// `theme` is only a dependency so colors are re-read when it changes.
export default function DotField({ theme }) {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, ctx = c.getContext('2d')
    const css = getComputedStyle(document.documentElement)
    const accent = css.getPropertyValue('--accent').trim(), base = css.getPropertyValue('--dot').trim()
    const still = prefersReducedMotion()
    let w, h, raf, mx = -1e4, my = -1e4

    const draw = t => {
      ctx.clearRect(0, 0, w, h)
      for (let y = GAP / 2; y < h; y += GAP) {
        for (let x = GAP / 2; x < w; x += GAP) {
          const dx = x - mx, dy = y - my, d2 = dx * dx + dy * dy
          if (d2 < RADIUS * RADIUS) {
            const d = Math.sqrt(d2) || 1, near = 1 - d / RADIUS, push = near * 12, s = 1.6 + near * 2.4
            ctx.globalAlpha = 0.25 + near * 0.75
            ctx.fillStyle = accent
            ctx.fillRect(x + (dx / d) * push - s / 2, y + (dy / d) * push - s / 2, s, s)
          } else {
            const wave = still ? 0.5 : (Math.sin(x * 0.011 + y * 0.007 - t * 0.0011) + 1) / 2
            ctx.globalAlpha = 0.28 + wave * 0.4
            ctx.fillStyle = base
            ctx.fillRect(x - 0.8, y - 0.8, 1.6, 1.6)
          }
        }
      }
      if (!still) raf = requestAnimationFrame(draw)
    }
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2)
      w = innerWidth; h = innerHeight
      c.width = w * dpr; c.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (still) draw(0)
    }
    const move = e => { mx = e.clientX; my = e.clientY }
    const leave = () => { mx = my = -1e4 }

    resize()
    if (!still) raf = requestAnimationFrame(draw)
    addEventListener('resize', resize)
    addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('resize', resize)
      removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
    }
  }, [theme])
  return <canvas ref={ref} className="dots" aria-hidden="true" />
}
