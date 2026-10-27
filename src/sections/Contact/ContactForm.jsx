import { useState } from 'react'
import { profile } from '@/data'
import { sendMessage } from '@/lib/email'
import { toast } from '@/lib/toast'
import { Button, Card, Field } from '@/components/ui'

const MAX_MSG = 2000

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [sent, setSent] = useState(0) // bumping this remounts the fields, clearing them

  const submit = async e => {
    e.preventDefault()
    const { name, email, message, website } = Object.fromEntries(new FormData(e.currentTarget))
    if (website) return // honeypot field, only bots fill it
    setStatus('sending')
    try {
      await sendMessage({ name: name.trim(), email: email.trim(), message: message.trim() })
      setSent(n => n + 1)
      setStatus('sent')
      toast('✓ message sent — talk soon!')
    } catch (err) {
      console.error('EmailJS failed', err)
      setStatus('error')
      toast('✕ message failed — try email instead')
    }
  }

  return (
    <Card as="form" beam className="contact-form" delay={120} onSubmit={submit}>
      <div className="form-head mono"><span className="muted">$</span> send-message <span className="muted">--to</span> {profile.name.toLowerCase()}</div>
      <div key={sent} className="fields">
        <Field label="name" name="name" required minLength={2} max={80} autoComplete="name" />
        <Field label="email" name="email" type="email" required max={120} autoComplete="email" />
        <Field label="message" name="message" multiline required minLength={10} max={MAX_MSG} rows={5} />
      </div>
      <input name="website" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <Button type="submit" variant="primary" className={`send ${status}`} disabled={status === 'sending'}>
        {status === 'sending' ? <><span className="spinner" /> sending…</> : status === 'sent' ? '✓ sent — send another' : '→ send message'}
      </Button>
      <p className={`form-status mono small ${status}`} role="status">
        {status === 'sent' && 'message delivered. I\'ll get back to you soon.'}
        {status === 'error' && <>couldn't send right now. Email me at <a href={`mailto:${profile.email}`}>{profile.email}</a></>}
      </p>
    </Card>
  )
}
