import { useEffect, useRef } from 'react'

// Native modal <dialog>: focus trap and Esc for free. Mount it to open, unmount (via onClose) to close.
export default function Dialog({ onClose, className = '', children, ...rest }) {
  const ref = useRef(null)
  useEffect(() => { ref.current.showModal() }, [])
  return (
    <dialog ref={ref} className={className} onClose={onClose} onClick={e => e.target === ref.current && onClose()} {...rest}>
      {children}
    </dialog>
  )
}
