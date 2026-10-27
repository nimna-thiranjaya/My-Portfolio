import { useEffect, useState } from 'react'

// Types `text` once, after `enabled` turns true.
export function useTypewriter(text, enabled = true, speed = 90) {
  const [out, setOut] = useState('')
  useEffect(() => {
    if (!enabled) return
    let i = 0, t
    const tick = () => { setOut(text.slice(0, ++i)); if (i < text.length) t = setTimeout(tick, speed) }
    t = setTimeout(tick, 250)
    return () => clearTimeout(t)
  }, [text, enabled, speed])
  return out
}

// Types each word, pauses, deletes it, moves to the next. Loops forever.
export function useRotator(words, enabled = true) {
  const [out, setOut] = useState('')
  useEffect(() => {
    if (!enabled) return
    let w = 0, i = 0, del = false, t
    const tick = () => {
      i += del ? -1 : 1
      setOut(words[w].slice(0, i))
      let wait = del ? 35 : 75
      if (!del && i === words[w].length) { del = true; wait = 1800 }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; wait = 350 }
      t = setTimeout(tick, wait)
    }
    t = setTimeout(tick, 900)
    return () => clearTimeout(t)
  }, [words, enabled])
  return out
}
