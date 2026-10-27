import Reveal from './Reveal'
import Scramble from '@/components/effects/Scramble'

export default function SectionTitle({ n, cmd, title }) {
  return (
    <Reveal className="section-title">
      <span className="muted">{n != null && <><span className="accent">{String(n).padStart(2, '0')}</span> // </>}$ {cmd}</span>
      <h2><Scramble text={title} /></h2>
    </Reveal>
  )
}
