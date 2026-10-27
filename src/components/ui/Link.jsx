import { linkProps } from '@/lib/dom'

// <a> that opens off-site URLs in a new tab. Every link in the app goes through this.
export default function Link({ href, children, ...rest }) {
  return <a {...linkProps(href)} {...rest}>{children}</a>
}
