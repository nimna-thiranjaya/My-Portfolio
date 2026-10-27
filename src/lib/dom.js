export const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches

export const scrollToSection = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export const isExternal = href => /^https?:\/\//.test(href ?? '')

// Props that make a link open in a new tab when it points off-site.
export const linkProps = href => (isExternal(href) ? { href, target: '_blank', rel: 'noopener noreferrer' } : { href })
