import { useEffect, useState } from 'react'
import { profile } from '@/data'

const LINES = [
  `booting ${profile.domain} v2.0`,
  'loading modules: spring-boot, node, redis, keycloak',
  'starting api-gateway on :443',
  'health check: all services up',
  'ready.',
]

// Short boot log over the page. Any click or key skips it. See useBoot for when it shows.
export default function Boot({ onDone }) {
  const [leaving, setLeaving] = useState(false)
  useEffect(() => {
    const finish = () => { setLeaving(true); setTimeout(onDone, 450) }
    const t = setTimeout(finish, 1500)
    addEventListener('keydown', finish, { once: true })
    addEventListener('pointerdown', finish, { once: true })
    return () => { clearTimeout(t); removeEventListener('keydown', finish); removeEventListener('pointerdown', finish) }
  }, [onDone])
  return (
    <div className={`boot ${leaving ? 'leaving' : ''}`} aria-hidden="true">
      <pre className="mono">
        {LINES.map((l, i) => (
          <span key={l} style={{ '--d': `${i * 220}ms` }}><span className="accent">[ ok ]</span> {l}{'\n'}</span>
        ))}
      </pre>
      <div className="boot-bar"><i /></div>
    </div>
  )
}
