import './Section.css'

const platforms = [
  {
    name: 'Kalshi',
    badge: 'US Regulated',
    badgeClass: 'badge-green',
    tagline: 'CFTC-regulated prediction market',
    description: 'Coming soon — full bonus guide and referral link.',
    link: '#',
    cta: 'Open Kalshi Account',
  },
  {
    name: 'Polymarket',
    badge: 'Global Volume Leader',
    badgeClass: 'badge-accent',
    tagline: 'World\'s largest crypto prediction market',
    description: 'Coming soon — full bonus guide and referral link.',
    link: '#',
    cta: 'Explore Polymarket',
  },
]

export default function CryptoSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Prediction Markets</h2>
          <p className="section-subtitle">Trade on real-world outcomes — elections, economics, sports — with no house edge.</p>
        </div>
        <div className="platform-grid">
          {platforms.map(p => (
            <div key={p.name} className="card platform-card">
              <span className={`badge ${p.badgeClass}`}>{p.badge}</span>
              <h3 className="platform-name">{p.name}</h3>
              <p className="platform-tagline">{p.tagline}</p>
              <p className="platform-desc">{p.description}</p>
              <a href={p.link} className="btn btn-primary platform-cta" target="_blank" rel="noopener noreferrer">
                {p.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
