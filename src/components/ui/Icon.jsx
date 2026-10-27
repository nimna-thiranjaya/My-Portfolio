// Inline SVG icons. Add a path here and use <Icon name="..." /> anywhere.
const PATHS = {
  github: <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" fill="currentColor" />,
  linkedin: <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.95 1.32-1.95 2.69V21h-4V9.5Z" fill="currentColor" />,
  medium: <path d="M13.5 12a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Zm7.4 0c0 3.54-1.51 6.42-3.38 6.42S14.15 15.54 14.15 12s1.51-6.42 3.37-6.42 3.38 2.88 3.38 6.42ZM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12Z" fill="currentColor" />,
  twitter: <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.17h1.7L7.4 4.73H5.58l11.09 14.44Z" fill="currentColor" />,
  facebook: <path d="M14 8V6.5c0-.83.67-1.5 1.5-1.5H17V2h-2.5A4.5 4.5 0 0 0 10 6.5V8H7v3h3v11h4V11h3l1-3h-4Z" fill="currentColor" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" /></>,
  whatsapp: <><path d="M3.5 20.5 4.8 16A8.5 8.5 0 1 1 8 19.2l-4.5 1.3Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 1a4.5 4.5 0 0 1-2.5-2.5l1-1-1-2L9 8.5Z" fill="currentColor" /></>,
  phone: <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />,
  pin: <><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" /><path d="m3 7 9 6 9-6" fill="none" stroke="currentColor" strokeWidth="2" /></>,
  copy: <><rect x="8" y="8" width="13" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" fill="none" stroke="currentColor" strokeWidth="2" /></>,
  search: <><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" /><path d="m20 20-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>,
  up: <path d="M12 19V5m-6 6 6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  close: <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
  sun: <><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" strokeWidth="2" /></>,
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" fill="none" stroke="currentColor" strokeWidth="2" />,
}

export default function Icon({ name, size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">{PATHS[name]}</svg>
}
