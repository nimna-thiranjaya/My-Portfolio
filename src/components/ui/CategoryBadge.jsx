// Colored label; colors come from --c-<category> in styles/tokens.css.
export default function CategoryBadge({ category }) {
  return <span className={`cat cat-${category}`}>{category}</span>
}
