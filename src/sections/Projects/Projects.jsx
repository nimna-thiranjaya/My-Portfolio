import { useState } from 'react'
import { projects, categories, featuredCount } from '@/data'
import { Button, Section } from '@/components/ui'
import ProjectFilters from './ProjectFilters'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

const COUNTS = Object.fromEntries(categories.map(c => [c, c === 'all' ? projects.length : projects.filter(p => p.category === c).length]))

export default function Projects() {
  const [cat, setCat] = useState('all')
  const [all, setAll] = useState(false)
  const [open, setOpen] = useState(null)
  const list = projects.filter(p => cat === 'all' || p.category === cat)
  const shown = all ? list : list.slice(0, featuredCount)

  return (
    <Section id="projects" n={3} cmd="ls projects/" title="projects">
      <ProjectFilters categories={categories} counts={COUNTS} value={cat} onChange={c => { setCat(c); setAll(false) }} />
      <div className="projects">
        {/* key includes the filter so cards re-animate when it changes */}
        {shown.map((p, i) => <ProjectCard key={`${cat}-${p.name}`} project={p} delay={(i % featuredCount) * 70} onOpen={() => setOpen(p)} />)}
      </div>
      {list.length > featuredCount && (
        <div className="more">
          <Button magnetic onClick={() => setAll(a => !a)}>
            <span className="muted">$</span> {all ? 'show less' : `show all ${list.length} ${cat === 'all' ? '' : cat} projects`}
          </Button>
        </div>
      )}
      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </Section>
  )
}
