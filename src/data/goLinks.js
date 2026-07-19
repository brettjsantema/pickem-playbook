import sweeps, { toSlug } from './sweepsPlatforms.js'
import dfs from './dfsPlatforms.js'

// referral links that live outside the two platform data files
const EXTRA = {
  'rips-by-triumph': 'https://rips.onelink.me/Wj0m/e5vx6k8s',
}

const links = { ...EXTRA }
for (const p of [...sweeps, ...dfs]) {
  links[toSlug(p.name)] = p.link
}

/* Internal /go/ path for a known operator; falls back to the direct
   link when the name isn't in the map so a CTA never dead-ends. */
export function goHref(name, fallback) {
  const slug = toSlug(name)
  return links[slug] ? `/go/${slug}` : fallback
}

export default links
