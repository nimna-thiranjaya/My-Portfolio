import { NAV } from '@/config/site'
import { profile, socials, publications } from '@/data'
import { scrollToSection } from '@/lib/dom'
import { copyText } from '@/lib/toast'

const openTab = url => window.open(url, '_blank', 'noopener')

// Everything the command palette can do.
export function paletteActions({ theme, onToggleTheme }) {
  return [
    ...NAV.map(id => ({ group: 'go to', label: id, hint: `~/${id}`, run: () => scrollToSection(id) })),
    { group: 'action', label: 'send me a message', run: () => { scrollToSection('contact'); document.querySelector('#contact input')?.focus({ preventScroll: true }) } },
    { group: 'action', label: 'copy email address', hint: profile.email, run: () => copyText(profile.email, 'email') },
    { group: 'action', label: `switch to ${theme === 'dark' ? 'light' : 'dark'} theme`, run: onToggleTheme },
    ...socials.map(s => ({ group: 'open', label: s.label, hint: '↗', run: () => openTab(s.url) })),
    ...publications.map(p => ({ group: 'open', label: `publication: ${p.title}`, hint: '↗', run: () => openTab(p.link) })),
  ]
}
