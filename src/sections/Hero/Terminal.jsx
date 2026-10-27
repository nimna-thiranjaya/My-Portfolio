import { useEffect, useRef, useState } from 'react'
import { profile, answers, suggestions } from '@/data'
import { Card, WindowBar } from '@/components/ui'
import { linkify } from '@/lib/linkify'

const fallback = () => `not sure about that one. try: ${suggestions[0]}\nor email ${profile.email}`

// "~/ask-me.sh": canned answers from data/terminal.js, typed out character by character.
export default function Terminal() {
  const [log, setLog] = useState([{ who: 'system', text: `connected to ${profile.domain} — ask anything.` }])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const body = useRef(null)

  useEffect(() => { body.current?.scrollTo({ top: body.current.scrollHeight, behavior: 'smooth' }) }, [log])

  const ask = q => {
    q = q.trim()
    if (!q || typing) return
    const lower = q.toLowerCase()
    const reply = answers.find(a => a.keys.some(k => lower.includes(k)))?.text() ?? fallback()
    setInput('')
    setTyping(true)
    setLog(l => [...l, { who: 'you', text: q }, { who: profile.name.toLowerCase(), text: '' }])
    let i = 0
    const id = setInterval(() => {
      i += 2
      setLog(l => [...l.slice(0, -1), { ...l.at(-1), text: reply.slice(0, i) }])
      if (i >= reply.length) { clearInterval(id); setTyping(false) }
    }, 18)
  }

  return (
    <Card beam className="term" delay={300}>
      <span className="corner tl" /><span className="corner tr" /><span className="corner bl" /><span className="corner br" />
      <WindowBar title={<span className="muted">~/ask-me.sh</span>}>
        <span className="status"><span className={`dot ${typing ? 'blink' : ''}`} />{typing ? 'typing' : 'ready'}</span>
      </WindowBar>
      <div className="term-body" ref={body}>
        {log.map((m, i) => (
          <div key={i} className={`msg ${m.who === 'you' ? 'you' : ''}`}>
            <div className="who">// {m.who}</div>
            <pre>{linkify(m.text)}{typing && i === log.length - 1 && <span className="caret" />}</pre>
          </div>
        ))}
      </div>
      <div className="chips">
        {suggestions.map(s => <button key={s} onClick={() => ask(s)} disabled={typing}>{s}</button>)}
      </div>
      <form className="term-input" onSubmit={e => { e.preventDefault(); ask(input) }}>
        <span className="accent">›</span>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder={`ask anything about ${profile.name.toLowerCase()}…`} aria-label="Ask a question" />
        <button type="submit" disabled={!input.trim() || typing}>send ↵</button>
      </form>
    </Card>
  )
}
