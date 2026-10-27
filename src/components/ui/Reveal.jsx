// Fades/rises in when scrolled into view (see useReveal). `delay` staggers siblings.
export default function Reveal({ as: Tag = 'div', delay, className = '', style, off = false, ...rest }) {
  return (
    <Tag
      className={`${off ? '' : 'reveal '}${className}`.trim()}
      style={delay != null ? { '--d': `${delay}ms`, ...style } : style}
      {...rest}
    />
  )
}
