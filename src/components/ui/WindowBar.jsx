// macOS-style title bar: traffic lights, a title, and anything passed as children on the right.
export default function WindowBar({ title, className = '', children }) {
  return (
    <div className={`window-bar ${className}`.trim()}>
      <span className="lights" aria-hidden="true"><i /><i /><i /></span>
      {title}
      {children}
    </div>
  )
}
