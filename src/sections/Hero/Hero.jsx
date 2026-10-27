import { profile, socials, skills } from '@/data'
import { useRotator, useTypewriter } from '@/hooks/useTyping'
import { copyText } from '@/lib/toast'
import { Button, IconButton, Reveal, SocialLinks } from '@/components/ui'
import Marquee from '@/components/effects/Marquee'
import Terminal from './Terminal'

const MARQUEE = [...new Set(Object.values(skills).flat())]

// `ready` is false while the boot screen is up, so the typing starts once it's visible.
export default function Hero({ ready }) {
  const name = useTypewriter(profile.name, ready)
  const role = useRotator(profile.roles, ready)
  return (
    <section id="home" className="hero-wrap">
      <div className="hero container">
        <div>
          <Reveal className="pill"><span className="dot pulse" />{profile.available}</Reveal>
          <Reveal as="h1" delay={80}>
            <span className="muted">$</span> hi, I'm<br />
            <span className="accent glitch" data-text={name}>{name}</span><span className="block-cursor" />
          </Reveal>
          <Reveal as="p" delay={160} className="role-line mono">
            <span className="muted">&gt;</span> {role}<span className="caret thin" />
          </Reveal>
          <Reveal as="p" delay={240} className="intro">
            {profile.intro.map((p, i) => typeof p === 'string' ? p : <mark key={i}>{p.hl}</mark>)}
          </Reveal>
          <Reveal delay={320} className="cta">
            <Button href="#contact" variant="primary" magnetic>→ get in touch</Button>
            <Button href="#projects" magnetic><span className="muted">$</span> ls projects/</Button>
            {profile.cv && <Button href={profile.cv} magnetic>↓ cv.pdf</Button>}
          </Reveal>
          <Reveal delay={400} className="hero-meta">
            <SocialLinks list={socials.filter(s => s.hero)}>
              <IconButton icon="mail" label="Copy email" onClick={() => copyText(profile.email, 'email')} />
            </SocialLinks>
            <span className="now mono small"><span className="dot pulse" />currently {profile.now}</span>
          </Reveal>
        </div>
        <Terminal />
      </div>
      <a href="#about" className="scroll-hint mono small" aria-label="Scroll to about"><span className="mouse"><i /></span>scroll</a>
      <Marquee items={MARQUEE} />
    </section>
  )
}
