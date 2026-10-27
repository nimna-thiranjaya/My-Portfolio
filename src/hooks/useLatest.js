import { useLayoutEffect, useRef } from 'react'

// Ref that always holds the latest `value`, so long-lived listeners can call fresh callbacks.
export function useLatest(value) {
  const ref = useRef(value)
  useLayoutEffect(() => { ref.current = value })
  return ref
}
