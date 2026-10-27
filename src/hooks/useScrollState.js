import { useEffect, useState } from 'react'

// One scroll listener for the page chrome. Returns the active section id and sets on <html>:
// --progress (0..1), data-scrolled (past 20px) and data-deep (past one screen).
export function useScrollState(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const root = document.documentElement
    const on = () => {
      const max = root.scrollHeight - innerHeight
      root.style.setProperty('--progress', max > 0 ? (scrollY / max).toFixed(4) : 0)
      root.toggleAttribute('data-scrolled', scrollY > 20)
      root.toggleAttribute('data-deep', scrollY > innerHeight)
      // Active section = last one whose top has passed 40% of the viewport.
      setActive(ids.findLast(id => document.getElementById(id)?.getBoundingClientRect().top <= innerHeight * 0.4) || ids[0])
    }
    on()
    addEventListener('scroll', on, { passive: true })
    addEventListener('resize', on)
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on) }
  }, [ids])
  return active
}
