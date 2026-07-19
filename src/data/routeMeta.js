import platforms, { toSlug } from './sweepsPlatforms.js'

export const SITE = 'https://pickemplaybook.com'

export const MONTH_YEAR = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric', timeZone: 'America/Chicago' })
export const BUILD_DATE = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'America/Chicago' })

const guideSlugs = platforms.filter(p => p.hasGuide).map(p => toSlug(p.name))

export const PRERENDER_ROUTES = [
  '/',
  '/bonusguide',
  '/sweeps',
  '/rips',
  '/sweeps/b2-casinos',
  ...guideSlugs.map(s => `/sweeps/${s}`),
  '/faq',
  '/articles/best-online-casinos-2026',
  '/articles/top-online-casinos-2026',
]

const ARTICLE_META = {
  title: `Best Online Casinos ${MONTH_YEAR} — Sweeps Tier List | PickemPlaybook`,
  description: `Ranked tier list of the best sweepstakes casinos in ${MONTH_YEAR}. Sign up for free, collect daily bonuses, and redeem for real cash — no deposit required.`,
  url: '/articles/best-online-casinos-2026',
  type: 'article',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Best Online Casinos ${MONTH_YEAR}`,
    description: `Ranked tier list of the best sweepstakes casinos in ${MONTH_YEAR}.`,
    url: `${SITE}/articles/best-online-casinos-2026`,
    publisher: { '@type': 'Organization', name: 'PickemPlaybook.com', url: SITE },
    dateModified: new Date().toISOString().split('T')[0],
  },
}

const STATIC_META = {
  '/': {
    title: "Pick'em Playbook — Sweepstakes Casino & DFS Bonus Guides",
    description: 'Hands-on guides to profitable sweepstakes casino bonuses, DFS pick\'em signup offers, and daily free Sweeps Coins. Real strategies from real redemptions — US only, 18+.',
    url: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'PickemPlaybook.com',
      url: SITE,
    },
  },
  '/bonusguide': {
    title: "Pick'em Bonus Guide 2026 — Hedge Underdog & PrizePicks Offers | PickemPlaybook",
    description: "How to claim and hedge DFS pick'em signup bonuses on Underdog, PrizePicks, Sleeper, and more. Step-by-step strategies to lock in guaranteed profit.",
    url: '/bonusguide',
  },
  '/sweeps': {
    title: `${platforms.length} Best Sweepstakes Casinos (${MONTH_YEAR}) — Free SC & Welcome Bonuses`,
    description: `Every sweeps casino worth playing in ${MONTH_YEAR}: ${platforms.length} sites ranked with welcome offers, daily free Sweeps Coins, and cash-out details. Free to join.`,
    url: '/sweeps',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `Best Sweepstakes Casinos ${MONTH_YEAR}`,
      itemListElement: platforms.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.name })),
    },
  },
  '/rips': {
    title: `Rips by Triumph Review + Referral Code (Free Pack) — ${MONTH_YEAR}`,
    description: 'Rips by Triumph review: open Pokémon card packs on your phone, cash out real winnings to PayPal or Venmo. Use our referral link and we both get a free mystery card.',
    url: '/rips',
  },
  '/sweeps/b2-casinos': {
    title: 'McLuck, PlayFame, HelloMillions & SpinBlitz Guide — B2 Casino Bonuses',
    description: 'The four B2-network sweeps casinos compared: welcome offers, Gravity Plinko settings, quick redemptions, and the promo-ban trap to avoid. One guide covers all four.',
    url: '/sweeps/b2-casinos',
    jsonLd: breadcrumb('B2 Casinos Guide', '/sweeps/b2-casinos'),
  },
  '/faq': {
    title: 'FAQ | PickemPlaybook.com',
    description: 'Frequently asked questions about sweepstakes casinos and DFS pick\'em bonuses.',
    url: '/faq',
    noindex: true,
  },
  '/articles/best-online-casinos-2026': ARTICLE_META,
  '/articles/top-online-casinos-2026': ARTICLE_META,
}

function breadcrumb(name, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Sweeps Casinos', item: `${SITE}/sweeps` },
      { '@type': 'ListItem', position: 3, name, item: `${SITE}${path}` },
    ],
  }
}

export function getRouteMeta(pathname) {
  const path = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  if (STATIC_META[path]) return STATIC_META[path]

  const m = path.match(/^\/sweeps\/([a-z0-9-]+)$/)
  if (m) {
    const platform = platforms.find(p => toSlug(p.name) === m[1])
    if (platform) {
      return {
        title: `${platform.name} Review (${MONTH_YEAR}) — Bonuses, Games & Payouts | PickemPlaybook`,
        description: `Hands-on ${platform.name} guide: welcome offers, daily free Sweeps Coins, best games to clear playthrough, and how redemptions actually work. US only, 18+.`,
        url: path,
        jsonLd: breadcrumb(`${platform.name} Guide`, path),
      }
    }
  }

  // unknown route: keep it out of the index (mitigates soft-404s from the SPA rewrite)
  return {
    title: "2026 Pick'em Playbook",
    description: 'Guides for sweepstakes casinos and DFS pick\'em bonuses.',
    url: path,
    noindex: true,
  }
}
