import { education, publications } from '@/data'
import { Card, Reveal, Section, Tags } from '@/components/ui'
import { linkProps } from '@/lib/dom'

export default function Education() {
  return (
    <Section id="education" n={5} cmd="cat education.log" title="education">
      <div className="edu">
        {education.map((e, i) => (
          <Card key={e.school} tilt className="edu-card" delay={i * 90}>
            <span className="muted mono small">{e.period}</span>
            <h3>{e.school}</h3>
            <p className="accent">{e.degree}</p>
            <p className="muted">{e.notes}</p>
            {e.award && <div className="award small"><span className="mono">★ award</span> {e.award}</div>}
            {e.cert && <a className="accent mono small" {...linkProps(e.cert)}>view certificate ↗</a>}
          </Card>
        ))}
      </div>
      <Reveal className="section-title sub">
        <span className="muted">$ cat publications.bib</span>
        <h3>publications</h3>
      </Reveal>
      {publications.map(p => (
        <Card key={p.title} as="a" tilt className="pub" {...linkProps(p.link)}>
          <span className="muted mono small">{p.venue} · {p.date}</span>
          <h3>{p.title} <span className="accent arrow">↗</span></h3>
          <p className="muted">{p.desc}</p>
          <Tags list={p.tags} />
        </Card>
      ))}
    </Section>
  )
}
