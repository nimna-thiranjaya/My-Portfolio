import { NAV, SHORTCUT } from '@/config/site'
import { profile, socials } from '@/data'
import { Button, Reveal, SocialLinks } from '@/components/ui'
import LocalTime from '@/components/effects/LocalTime'
import Logo from './Logo'

const YEAR = new Date().getFullYear()

export default function Footer({ onOpenPalette }) {
  return (
    <footer className="footer">
      <div className="container">
        <Reveal className="footer-cta">
          <h2 className="mono">let's build something <span className="accent">reliable</span>_</h2>
          <Button href="#contact" variant="primary" magnetic>→ start a conversation</Button>
        </Reveal>
        <div className="footer-grid">
          <div>
            <Logo />
            <p className="muted small">Backend engineer building high-throughput systems from Colombo, Sri Lanka.</p>
          </div>
          <nav className="footer-links mono small" aria-label="Footer">
            {NAV.slice(1).map(id => <a key={id} href={`#${id}`}><span className="tilde">~/</span>{id}</a>)}
          </nav>
          <SocialLinks list={socials} />
        </div>
        <div className="footer-bottom mono small muted">
          <span>© {YEAR} {profile.fullName}</span>
          <span><span className="accent">●</span> <LocalTime /></span>
          <button className="linkish" onClick={onOpenPalette}>press <kbd>{SHORTCUT}</kbd> to navigate</button>
        </div>
      </div>
    </footer>
  )
}
