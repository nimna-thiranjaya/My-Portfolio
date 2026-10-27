import { profile } from '@/data'
import { Card, Reveal, Section } from '@/components/ui'
import CountUp from '@/components/effects/CountUp'

export default function About() {
  return (
    <Section id="about" n={1} cmd="cat about.md" title="about me">
      <div className="about-grid">
        <div>
          {profile.about.map((p, i) => <Reveal as="p" key={i} delay={i * 100} className="lead">{p}</Reveal>)}
          <Card className="whoami" delay={200}>
            <div className="muted mono small"><span className="accent">$</span> whoami --verbose</div>
            <dl>
              {profile.facts.map(([k, v]) => <div key={k}><dt className="mono">{k}</dt><dd>{v}</dd></div>)}
            </dl>
          </Card>
        </div>
        <div className="stats">
          {profile.stats.map((s, i) => (
            <Card key={s.label} tilt className="stat" delay={i * 100}>
              <div className="stat-value accent"><CountUp value={s.value} /></div>
              <div className="muted">{s.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
