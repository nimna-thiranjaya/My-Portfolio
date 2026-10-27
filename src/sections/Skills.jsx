import { skills } from '@/data'
import { Card, Section, WindowBar } from '@/components/ui'

const ENTRIES = Object.entries(skills)
const TOTAL = ENTRIES.reduce((n, [, v]) => n + v.length, 0)

// skills rendered as a stack.json file in an editor, one line per category.
export default function Skills() {
  return (
    <Section id="skills" n={4} cmd="cat stack.json" title="skills">
      <Card beam className="skills">
        <WindowBar className="editor-bar mono small" title={<span className="tab">stack.json</span>}>
          <span className="muted">{TOTAL} entries</span>
        </WindowBar>
        <pre className="mono code">
          <span className="ln"><span className="muted">{'{'}</span></span>
          {ENTRIES.map(([k, v], i) => (
            <span key={k} className="ln skill-line" style={{ '--d': `${i * 110}ms` }}>
              {'  '}<span className="key">"{k}"</span>: [{v.map((s, j) => <span key={s}><span className="str">"{s}"</span>{j < v.length - 1 && ', '}</span>)}]{i < ENTRIES.length - 1 && ','}
            </span>
          ))}
          <span className="ln"><span className="muted">{'}'}</span><span className="caret" /></span>
        </pre>
      </Card>
    </Section>
  )
}
