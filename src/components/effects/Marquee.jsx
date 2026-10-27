// Endless horizontal ticker. The list is rendered twice so the loop is seamless.
export default function Marquee({ items }) {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((s, i) => <span key={i}>{s}<i>✦</i></span>)}
      </div>
    </div>
  )
}
