import Reveal from './Reveal'
import { tiltProps } from '@/lib/interactions'

// Bordered surface. `tilt` adds the 3D tilt + spotlight, `beam` the rotating border light.
export default function Card({ as = 'div', tilt = false, beam = false, reveal = true, className = '', ...rest }) {
  const cls = ['card', tilt && 'tilt', beam && 'beam', className].filter(Boolean).join(' ')
  return <Reveal as={as} off={!reveal} className={cls} {...(tilt ? tiltProps : {})} {...rest} />
}
