import { Icon } from '@/components/ui'
import { scrollToSection } from '@/lib/dom'

// Appears after one screen of scrolling; the ring fills with page progress (--progress).
export default function ToTop() {
  return (
    <button className="to-top" onClick={() => scrollToSection('home')} aria-label="Back to top">
      <svg viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="20" /></svg>
      <Icon name="up" />
    </button>
  )
}
