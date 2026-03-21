import './Section.css'

const platforms = [
  {
    name: 'Underdog Fantasy',
    badge: 'Featured',
    badgeClass: 'badge-accent',
    tagline: 'Best pick\'em deposit bonus available',
    description: 'Coming soon — full bonus guide and referral link.',
    link: '#',
    cta: 'Claim Bonus',
  },
  {
    name: 'Novig',
    badge: 'Commission-Free',
    badgeClass: 'badge-green',
    tagline: 'Peer-to-peer sports betting exchange',
    description: 'Coming soon — full bonus guide and referral link.',
    link: '#',
    cta: 'Join Novig',
  },
  {
    name: 'PrizePicks',
    badge: 'Beginner Friendly',
    badgeClass: 'badge-purple',
    tagline: 'Simple over/under pick\'em contests',
    description: 'Coming soon — full bonus guide and referral link.',
    link: '#',
    cta: 'Join PrizePicks',
  },
]

export default function DFSSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sportsbooks</h2>
          <p className="section-subtitle">Claim your welcome bonus on the top DFS and pick'em platforms.</p>
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
