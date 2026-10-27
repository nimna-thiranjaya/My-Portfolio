// Who you are: hero, about, contact details and social links.

export const profile = {
  name: 'Nimna',
  fullName: 'Nimna Thiranjaya',
  domain: 'nimna.dev',
  title: 'Backend Software Engineer | Full-Stack Developer | Colombo, Sri Lanka ↔ Remote',
  available: 'AVAILABLE · open to roles & freelance',
  intro: [
    'I design and ship ',
    { hl: 'high-throughput backend systems' },
    ': Java & Spring Boot microservices, API gateways and REST APIs for telecom platforms serving ',
    { hl: '10M+ customers' },
    '. With ',
    { hl: '5+ years' },
    ' across the stack, from national government platforms to freelance ERPs, I take a feature from architecture to deployment.',
  ],
  email: 'nimnathiranjaya523@gmail.com',
  phone: '+94703002768',
  // Google Drive share link to the CV PDF (Share → Anyone with the link → Viewer).
  cv: 'https://drive.google.com/file/d/1n6MzoUbB7fbfE6xWNFrfPsJALkD2jibe/view?usp=sharing',
  address: '312/1, Kandaliyaddapaluwa, Ganemulla',
  about: [
    'I\'m a Software Engineer at Arimac in Colombo, building backend platforms for telecom operators across Bahrain, Algeria and French Polynesia. My day-to-day is API design, microservices on Spring Boot and Spring Cloud, caching, resilience patterns and performance tuning.',
    'Since 2021 I\'ve also freelanced as a full-stack developer, owning products end to end: system design, Node.js / .NET backends, Angular and React frontends, Docker, NGINX, CI/CD and monitoring with Grafana.',
  ],
  // Cycled in the hero, one after another.
  roles: ['backend engineer', 'microservices architect', 'API designer', 'full-stack developer'],
  now: 'building ORA telco self-care @ Arimac',
  // Shown as `whoami` output in the about section.
  facts: [
    ['location', 'Colombo, Sri Lanka'],
    ['current', 'Software Engineer @Arimac'],
    ['focus', 'Java · Spring Boot · Microservices'],
    ['education', "BSc (Hons) IT Specializing in Software Engineering, SLIIT"],
    ['open to', 'backend / full-stack roles, freelance'],
  ],
  stats: [
    { value: '5+', label: 'years building software' },
    { value: '20+', label: 'projects delivered' },
    { value: '10M+', label: 'telecom customers served' },
  ],
}

// `icon` must match a key in components/ui/Icon.jsx. `hero: true` also shows it in the top section.
export const socials = [
  { icon: 'github', label: 'GitHub', url: 'https://github.com/nimna-thiranjaya', hero: true },
  { icon: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/nimna-thiranjaya/', hero: true },
  { icon: 'medium', label: 'Medium', url: 'https://medium.com/@nimnathiranjaya523', hero: true },
  { icon: 'twitter', label: 'X / Twitter', url: 'https://twitter.com/thiranjayaw' },
  { icon: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/Nimna.Thiranjaya/' },
  { icon: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/nimna_thiranjaya_/' },
  { icon: 'whatsapp', label: 'WhatsApp', url: 'https://wa.me/94703002768' },
]
