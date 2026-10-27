import { useEffect, useRef, useState } from 'react'
import { Dialog } from '@/components/ui'

// Ctrl/⌘+K palette. Mounted only while open. `actions`: [{ group, label, hint?, run }].
export default function CommandPalette({ actions, onClose }) {
  const list = useRef(null)
  const [q, setQ] = useState('')
  const [sel, setSel] = useState(0)
  const hits = actions.filter(a => `${a.group} ${a.label}`.toLowerCase().includes(q.trim().toLowerCase()))

  useEffect(() => { list.current?.children[sel]?.scrollIntoView({ block: 'nearest' }) }, [sel])

  const run = a => { onClose(); setTimeout(a.run, 0) }
  const key = e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSel(i => Math.min(i + 1, hits.length - 1)) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setSel(i => Math.max(i - 1, 0)) }
    if (e.key === 'Enter' && hits[sel]) run(hits[sel])
  }

  return (
    <Dialog className="palette" onClose={onClose} aria-label="Command palette">
      <div className="palette-input">
        <span className="accent mono">›</span>
        <input autoFocus value={q} onChange={e => { setQ(e.target.value); setSel(0) }} onKeyDown={key}
          placeholder="jump to a section, copy email, open github…" aria-label="Search commands" />
        <kbd>esc</kbd>
      </div>
      <ul ref={list}>
        {hits.map((a, i) => (
          <li key={a.group + a.label}>
            <button className={i === sel ? 'sel' : ''} onMouseMove={() => setSel(i)} onClick={() => run(a)}>
              <span className="muted mono small">{a.group}</span>
              <span>{a.label}</span>
              {a.hint && <span className="muted mono small hint">{a.hint}</span>}
            </button>
          </li>
        ))}
        {!hits.length && <li className="empty muted mono small">no matches for "{q}"</li>}
      </ul>
      <div className="palette-foot muted mono small"><span>↑↓ navigate</span><span>↵ run</span><span>esc close</span></div>
    </Dialog>
  )
}
