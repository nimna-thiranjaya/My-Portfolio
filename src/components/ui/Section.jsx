import SectionTitle from './SectionTitle'

// Page section with an anchor id, numbered terminal-style heading and container width.
export default function Section({ id, n, cmd, title, className = '', children }) {
  return (
    <section id={id} className={`section container ${className}`.trim()}>
      <SectionTitle n={n} cmd={cmd} title={title} />
      {children}
    </section>
  )
}
