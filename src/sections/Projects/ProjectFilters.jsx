import { Reveal } from '@/components/ui'

export default function ProjectFilters({ categories, counts, value, onChange }) {
  return (
    <Reveal className="filters" role="tablist" aria-label="Filter projects">
      {categories.map(c => (
        <button key={c} role="tab" aria-selected={value === c} className={value === c ? 'on' : ''} onClick={() => onChange(c)}>
          {c} <span className="muted">{counts[c]}</span>
        </button>
      ))}
    </Reveal>
  )
}
