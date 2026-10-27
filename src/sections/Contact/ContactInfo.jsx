import { profile, socials } from '@/data'
import { copyText } from '@/lib/toast'
import { Card, Icon, SocialLinks } from '@/components/ui'

function Row({ icon, href, value, copyLabel }) {
  return (
    <div className="info-row">
      <Icon name={icon} size={18} />
      {href ? <a href={href}>{value}</a> : <span>{value}</span>}
      {copyLabel && (
        <button className="copy" onClick={() => copyText(value, copyLabel)} aria-label={`Copy ${copyLabel}`} title="Copy">
          <Icon name="copy" size={14} />
        </button>
      )}
    </div>
  )
}

export default function ContactInfo() {
  return (
    <Card className="contact-info">
      <p className="lead">Have a role, a project or just want to talk backend? Send a message and I'll get back to you.</p>
      <Row icon="mail" href={`mailto:${profile.email}`} value={profile.email} copyLabel="email" />
      <Row icon="phone" href={`tel:${profile.phone}`} value={profile.phone} copyLabel="phone number" />
      <Row icon="pin" value={profile.address} />
      <SocialLinks list={socials} />
    </Card>
  )
}
