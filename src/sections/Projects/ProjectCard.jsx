import { Card, CategoryBadge, Tags } from '@/components/ui'

// Compact card; the whole card is clickable through the stretched .open-details button.
export default function ProjectCard({ project: p, delay, onOpen }) {
  return (
    <Card as="article" tilt className="project" delay={delay}>
      <div className="project-head">
        <CategoryBadge category={p.category} />
        <span className="muted mono small">{p.period}</span>
      </div>
      <h3 className="mono">{p.name}</h3>
      <div className="muted mono small">{p.org} · {p.role}</div>
      <p className="clamp">{p.desc}</p>
      <div className="users small"><span className="accent mono">users →</span> {p.users}</div>
      <Tags list={p.tags} max={5} />
      <button className="open-details mono small" onClick={onOpen} aria-label={`Open details for ${p.name}`}>
        $ cat details <span className="arrow">→</span>
      </button>
    </Card>
  )
}
