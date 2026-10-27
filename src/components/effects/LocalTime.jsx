import { useEffect, useState } from 'react'

const format = timeZone => new Intl.DateTimeFormat('en-GB', { timeZone, hour: '2-digit', minute: '2-digit' }).format(new Date())

// Live clock in a given time zone.
export default function LocalTime({ timeZone = 'Asia/Colombo', label = 'Colombo (UTC+5:30)' }) {
  const [now, setNow] = useState(() => format(timeZone))
  useEffect(() => {
    const id = setInterval(() => setNow(format(timeZone)), 10000)
    return () => clearInterval(id)
  }, [timeZone])
  return <span>{now} · {label}</span>
}
