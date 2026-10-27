import Link from './Link'
import { magnetProps } from '@/lib/interactions'

// Mono pill button. Renders a link when `href` is set. `magnetic` makes it drift toward the cursor.
export default function Button({ href, variant, size, magnetic = false, className = '', children, ...rest }) {
  const cls = ['btn', variant, size, className].filter(Boolean).join(' ')
  const props = { className: cls, ...(magnetic ? magnetProps : {}), ...rest }
  return href
    ? <Link href={href} {...props}>{children}</Link>
    : <button type="button" {...props}>{children}</button>
}
