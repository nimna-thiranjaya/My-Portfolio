import { useRef } from 'react'
import { experience } from '@/data'
import { useScrollFill } from '@/hooks/useScrollFill'
import { Card, Reveal, Section, Tags } from '@/components/ui'

export default function Experience() {
  const list = useRef(null)
  useScrollFill(list) // timeline line fills and nodes light up as you scroll
  return (
    <Section id="experience" n={2} cmd="git log --career" title="experience">
      <ol className="timeline" ref={list}>
        {experience.map((e, i) => (
          <Reveal as="li" key={i} delay={i * 80}>
            <span className="node" />
            <Card tilt reveal={false}>
              <div className="tl-head">
                <h3>{e.role} <span className="accent">@ {e.company}</span></h3>
                <span className="period mono small">{e.period.includes('present') && <span className="dot pulse" />}{e.period}</span>
              </div>
              <div className="muted mono small">{e.place}</div>
              <ul>{e.points.map(p => <li key={p}>{p}</li>)}</ul>
              <Tags list={e.tags} />
            </Card>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
