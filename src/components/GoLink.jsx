import { Link } from 'react-router-dom'
import { goHref } from '../data/goLinks.js'

/* Referral CTA. Known operators navigate same-tab through /go/<slug> so the
   click logs as a pageview before an instant redirect; unknown operators fall
   back to a plain external link. */
export default function GoLink({ name, fallback, children, ...rest }) {
  const href = goHref(name, fallback)
  if (href.startsWith('/go/')) {
    return <Link to={href} rel="nofollow sponsored" {...rest}>{children}</Link>
  }
  return <a href={href} target="_blank" rel="nofollow sponsored noopener noreferrer" {...rest}>{children}</a>
}
