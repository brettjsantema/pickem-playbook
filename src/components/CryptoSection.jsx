import './CryptoSection.css'

const KALSHI_LINK = '#'
const POLYMARKET_LINK = '#'

const platforms = [
  {
    name: 'Kalshi',
    tagline: 'CFTC-regulated prediction market',
    badge: 'US Regulated',
    badgeType: 'badge-green',
    description:
      'Kalshi is the only CFTC-regulated prediction market in the US, meaning it operates with full legal standing. Trade on real-world events — Fed interest rate decisions, election outcomes, economic indicators, and more. Profits are paid in USD, not crypto.',
    highlights: [
      'Legal in all 50 US states',
      'Real USD deposits and withdrawals',
      'CFTC-regulated — highest legal protection',
      'Events: elections, econ data, weather, sports',
    ],
    link: KALSHI_LINK,
    cta: 'Open Kalshi Account',
    btnClass: 'btn-primary',
  },
  {
    name: 'Polymarket',
    tagline: 'World\'s largest crypto prediction market',
    badge: 'Global Volume Leader',
    badgeType: 'badge-accent',
    description:
      "Polymarket runs on crypto (USDC on Polygon) and dominates global prediction market volume. Not available for US users directly, but it's where the sharpest money in the world prices political and macro events. The liquidity and accuracy here is unmatched.",
    highlights: [
      'Massive liquidity — tightest spreads anywhere',
      'USDC-settled on Polygon (low fees)',
      'Politics, crypto, sports, world events',
      'Non-custodial — you control your funds',
    ],
    link: POLYMARKET_LINK,
    cta: 'Explore Polymarket',
    btnClass: 'btn-secondary',
  },
]

export default function CryptoSection() {
  return (
    <section id="crypto">
      <div className="container">
        <p className="section-label">Group 3 — Prediction Markets</p>
        <h2 className="section-title">Crypto Prediction Markets</h2>
        <p className="section-subtitle">
          Bet on real-world outcomes — elections, economics, sports — with better odds than traditional books and no house edge.
        </p>

        <div className="crypto-intro card">
          <p>
            Prediction markets let you trade on the probability of real events. Unlike sportsbooks, prices are set by other traders — not a house setting lines. This means sharp bettors who do their research can find genuine edge. Markets on Kalshi and Polymarket routinely outperform traditional polls and forecasters on major political and economic outcomes.
          </p>
        </div>

        <div className="crypto-grid">
          {platforms.map(p => (
            <div key={p.name} className="card crypto-card">
              <div className="crypto-card-top">
                <span className={`badge ${p.badgeType}`}>{p.badge}</span>
              </div>
              <h3 className="crypto-name">{p.name}</h3>
              <p className="crypto-tagline">{p.tagline}</p>
              <p className="crypto-desc">{p.description}</p>

              <ul className="crypto-highlights">
                {p.highlights.map(h => (
                  <li key={h}>
                    <span className="crypto-check">✓</span>
                    {h}
                  </li>
                ))}
              </ul>

              <a href={p.link} className={`btn ${p.btnClass} crypto-cta`} target="_blank" rel="noopener noreferrer">
                {p.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
