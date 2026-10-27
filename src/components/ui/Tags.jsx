// Pill list of technologies. `max` collapses the rest into a "+n" pill.
export default function Tags({ list, max = Infinity }) {
  return (
    <div className="tags">
      {list.slice(0, max).map(t => <span key={t}>{t}</span>)}
      {list.length > max && <span className="more-tag">+{list.length - max}</span>}
    </div>
  )
}
