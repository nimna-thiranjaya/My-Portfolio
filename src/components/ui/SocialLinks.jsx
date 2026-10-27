import IconButton from './IconButton'

export default function SocialLinks({ list, className = '', children }) {
  return (
    <div className={`socials ${className}`.trim()}>
      {list.map(s => <IconButton key={s.icon} icon={s.icon} label={s.label} href={s.url} />)}
      {children}
    </div>
  )
}
