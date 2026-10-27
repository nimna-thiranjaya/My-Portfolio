import { useEffect, useState } from 'react'
import { profile } from '@/data'
import { WindowBar } from '@/components/ui'

const STEPS = [
  { label: `resolving ${profile.domain}`, ms: 12 },
  { label: 'loading modules: spring-boot, node, redis', ms: 48 },
  { label: 'connecting api-gateway :443', ms: 31 },
  { label: 'warming caches', ms: 9 },
  { label: 'rendering portfolio', ms: 64 },
]
const DURATION = 1600 // ms from 0% to 100%
const HOLD = 250 // ms to show 100% before lifting
const EXIT = 700 // ms, matches .boot transition in effects.css
const SPINNER = '⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'
const ease = k => (1 - Math.cos(Math.PI * k)) / 2 // ease-in-out, so steps tick at an even pace

// Terminal-style loader. Steps tick off as progress passes them; any key or click skips.
// onLeave: curtain starts lifting (page can animate in). onDone: fully gone, unmount.
export default function Boot({ onLeave, onDone }) {
  const [k, setK] = useState(0) // linear time progress 0..1
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    let raf, hold, left = false
    const start = performance.now()
    const leave = () => {
      if (left) return
      left = true
      setK(1)
      setLeaving(true)
      onLeave()
    }
    const tick = now => {
      const t = Math.min(1, (now - start) / DURATION)
      setK(t)
      if (t < 1) raf = requestAnimationFrame(tick)
      else hold = setTimeout(leave, HOLD)
    }
    const skip = () => { cancelAnimationFrame(raf); clearTimeout(hold); leave() }
    raf = requestAnimationFrame(tick)
    // Safety net: if animation frames are paused (background tab, busy device), leave anyway.
    const fallback = setTimeout(skip, DURATION + HOLD + 500)
    addEventListener('keydown', skip)
    addEventListener('pointerdown', skip)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(hold)
      clearTimeout(fallback)
      removeEventListener('keydown', skip)
      removeEventListener('pointerdown', skip)
    }
  }, [onLeave])

  useEffect(() => {
    if (!leaving) return
    const t = setTimeout(onDone, EXIT)
    return () => clearTimeout(t)
  }, [leaving, onDone])

  const p = ease(k)
  const pct = Math.round(p * 100)
  const current = Math.min(STEPS.length - 1, Math.floor(p * STEPS.length))
  const complete = p >= 1
  const spin = SPINNER[Math.floor((k * DURATION) / 80) % SPINNER.length]

  return (
    <div className={`boot ${leaving ? 'leaving' : ''}`}
      role="progressbar" aria-label="Loading portfolio" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
      <div className="boot-glow" aria-hidden="true" />
      <div className="boot-window" aria-hidden="true">
        <WindowBar title={<span className="muted">~/boot.sh</span>}>
          <span className="boot-pct mono">{String(pct).padStart(3, ' ')}%</span>
        </WindowBar>
        <div className="boot-logo mono">
          <span className="dot pulse" />{profile.name.toLowerCase()}<span className="muted">.dev</span>
        </div>
        <ul className="boot-steps mono">
          {STEPS.slice(0, current + 1).map((s, i) => {
            const ok = i < current || complete
            return (
              <li key={s.label}>
                <span className={`st ${ok ? 'accent' : 'muted'}`}>[{ok ? ' ok ' : ` ${spin}  `}]</span>
                <span className={ok ? '' : 'muted'}>{s.label}</span>
                <span className="ms muted">{ok ? `${s.ms}ms` : '…'}</span>
              </li>
            )
          })}
        </ul>
        <div className="boot-bar"><i style={{ transform: `scaleX(${p})` }} /></div>
        <div className="boot-foot mono small muted">
          <span>{complete ? <span className="accent">✓ all systems operational</span> : 'initializing…'}</span>
          <span className="skip"><kbd>any key</kbd> to skip</span>
        </div>
      </div>
    </div>
  )
}
