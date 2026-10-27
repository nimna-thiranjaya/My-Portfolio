import Link from '@/components/ui/Link'

// Turns http(s) URLs in plain text into links that open in a new tab.
export const linkify = text => text.split(/(https?:\/\/\S+)/).map((part, i) =>
  i % 2 ? <Link key={i} href={part} className="inline-link">{part}</Link> : part)
