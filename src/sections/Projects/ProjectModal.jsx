import { Button, CategoryBadge, Dialog, Icon, IconButton, Tags, WindowBar } from '@/components/ui'

export default function ProjectModal({ project: p, onClose }) {
  return (
    <Dialog className="modal" onClose={onClose} aria-labelledby="modal-title">
      <div className="modal-inner">
        <WindowBar className="modal-bar" title={<span className="muted mono small">~/projects/{p.category}/</span>}>
          <IconButton icon="close" label="Close" onClick={onClose} autoFocus />
        </WindowBar>
        <CategoryBadge category={p.category} />
        <h3 id="modal-title" className="mono">{p.name}</h3>
        <div className="muted mono small">{p.org} · {p.period}</div>
        <div className="mono small"><span className="accent">role:</span> {p.role}</div>
        <p>{p.desc}</p>
        <div className="users small"><span className="accent mono">users →</span> {p.users}</div>
        <h4 className="mono small muted">// what I did</h4>
        <ul className="points">{p.points.map(t => <li key={t}>{t}</li>)}</ul>
        <h4 className="mono small muted">// stack</h4>
        <Tags list={p.tags} />
        {(p.repo || p.link) && (
          <div className="modal-links">
            {p.repo && <Button href={p.repo}><Icon name="github" /> source</Button>}
            {p.link && <Button href={p.link} variant="primary">↗ live</Button>}
          </div>
        )}
      </div>
    </Dialog>
  )
}
