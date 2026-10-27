import Icon from './Icon'
import Link from './Link'

// Square icon-only button or link. `label` is required for screen readers.
export default function IconButton({ icon, label, href, size, className = '', children, ...rest }) {
  const props = { className: `icon-btn ${className}`.trim(), 'aria-label': label, title: label, ...rest }
  const content = children ?? <Icon name={icon} size={size} />
  return href
    ? <Link href={href} {...props}>{content}</Link>
    : <button type="button" {...props}>{content}</button>
}
