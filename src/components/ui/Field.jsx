import { useId, useState } from 'react'

// Input or textarea with a floating label. `max` on a textarea adds a live character counter.
export default function Field({ label, multiline = false, max, onChange, ...rest }) {
  const id = useId()
  const [len, setLen] = useState(0)
  const Tag = multiline ? 'textarea' : 'input'
  const change = e => { setLen(e.target.value.length); onChange?.(e) }
  return (
    <div className="field">
      <Tag id={id} placeholder=" " maxLength={max} onChange={change} {...rest} />
      <label htmlFor={id} className="mono">{label}</label>
      {multiline && max && <span className={`counter mono small ${len > max * 0.9 ? 'warn' : ''}`}>{len}/{max}</span>}
    </div>
  )
}
