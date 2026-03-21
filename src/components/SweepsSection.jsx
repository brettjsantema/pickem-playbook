import './Section.css'

const platforms = [
  { name: 'Stake.us', badge: 'Top Pick', badgeClass: 'badge-accent', tagline: 'Daily free coins, huge game library', description: 'Coming soon — full bonus guide and referral link.', link: '#', cta: 'Play Stake.us' },
  { name: 'McLuck', badge: 'Best Daily Bonuses', badgeClass: 'badge-green', tagline: 'Generous daily login bonuses', description: 'Coming soon — full bonus guide and referral link.', link: '#', cta: 'Play McLuck' },
  { name: 'Pulsz', badge: 'Best Library', badgeClass: 'badge-purple', tagline: 'Massive slot selection', description: 'Coming soon — full bonus guide and referral link.', link: '#', cta: 'Play Pulsz' },
  { name: 'High 5 Casino', badge: 'Exclusive Titles', badgeClass: 'badge-accent', tagline: 'Games you won\'t find anywhere else', description: 'Coming soon — full bonus guide and referral link.', link: '#', cta: 'Play High 5' },
  { name: 'WOW Vegas', badge: 'Most Reliable', badgeClass: 'badge-green', tagline: 'Simple, clean, and consistent', description: 'Coming soon — full bonus guide and referral link.', link: '#', cta: 'Play WOW Vegas' },
  { name: 'Chumba Casino', badge: 'Most Trusted', badgeClass: 'badge-purple', tagline: 'The original sweepstakes casino', description: 'Coming soon — full bonus guide and referral link.', link: '#', cta: 'Play Chumba' },
]

export default function SweepsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sweepstakes Casinos</h2>
          <p className="section-subtitle">Play casino-style games legally in the US and redeem winnings for real cash.</p>
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
