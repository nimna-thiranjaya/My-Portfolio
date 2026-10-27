import { profile } from '@/data'

export default function Logo({ pulse = false }) {
  return (
    <a href="#home" className="logo">
      <span className={`dot ${pulse ? 'pulse' : ''}`} />{profile.name.toLowerCase()}<span className="muted">.dev</span>
    </a>
  )
}
