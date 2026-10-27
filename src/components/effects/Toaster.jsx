import { useEffect, useState } from 'react'
import { TOAST_EVENT } from '@/lib/toast'

// Renders messages sent with toast() from lib/toast.
export default function Toaster() {
  const [list, setList] = useState([])
  useEffect(() => {
    const on = e => {
      const id = Math.random()
      setList(l => [...l, { id, msg: e.detail }])
      setTimeout(() => setList(l => l.filter(t => t.id !== id)), 2800)
    }
    addEventListener(TOAST_EVENT, on)
    return () => removeEventListener(TOAST_EVENT, on)
  }, [])
  return (
    <div className="toaster" role="status" aria-live="polite">
      {list.map(t => <div key={t.id} className="toast mono">{t.msg}</div>)}
    </div>
  )
}
