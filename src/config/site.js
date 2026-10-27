// Section ids, in page order. Drives the header nav, footer links, scroll spy and command palette.
export const NAV = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact']

export const IS_MAC = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)
export const SHORTCUT = `${IS_MAC ? '⌘' : 'Ctrl'} K`

// Keys come from .env.local (see .env.example). The EmailJS template should use {{name}}, {{email}} and {{message}}.
export const EMAILJS = {
  service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}
