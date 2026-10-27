import { useEffect } from 'react'

// Feeds the pointer position to the body::before glow as --mx/--my.
export function useCursorGlow() {
  useEffect(() => {
    const move = e => {
      document.body.style.setProperty('--mx', `${e.clientX}px`)
      document.body.style.setProperty('--my', `${e.clientY}px`)
    }
    addEventListener('pointermove', move, { passive: true })
    return () => removeEventListener('pointermove', move)
  }, [])
}
