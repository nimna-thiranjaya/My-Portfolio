import { useState } from 'react'
import { NAV, SHORTCUT } from '@/config/site'
import { useEscape } from '@/hooks/useHotkeys'
import { Icon, IconButton } from '@/components/ui'
import Logo from './Logo'

export default function Header({ active, theme, onToggleTheme, onOpenPalette }) {
  const [open, setOpen] = useState(false)
  useEscape(open, () => setOpen(false))
  return (
    <header className="header">
      <div className="container header-inner">
        <Logo pulse />
        <nav className={open ? 'nav open' : 'nav'} aria-label="Sections">
          {NAV.map((id, i) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} style={{ '--i': i }}
              onClick={() => setOpen(false)} aria-current={active === id ? 'true' : undefined}>
              <span className="tilde">~/</span>{id}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="kbd-btn" onClick={onOpenPalette} aria-label="Open command palette">
            <Icon name="search" size={14} /><kbd>{SHORTCUT}</kbd>
          </button>
          <IconButton icon={theme === 'dark' ? 'sun' : 'moon'} label="Toggle theme" onClick={onToggleTheme} />
          <IconButton className="menu-btn" label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>
            <span className={`burger ${open ? 'x' : ''}`}><i /><i /><i /></span>
          </IconButton>
        </div>
      </div>
      <div className="progress" />
    </header>
  )
}
