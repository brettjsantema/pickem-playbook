import './Home.css'

const buttons = [
  { key: 'sportsbooks', label: 'Sportsbooks', icon: '🏈' },
  { key: 'sweeps', label: 'Sweepstakes Casinos', icon: '🎰' },
  { key: 'crypto', label: 'Prediction Markets', icon: '📊' },
]

export default function Home({ active, setActive }) {
  return (
    <section className="home">
      <div className="container home-inner">
        <h1 className="home-title">2026 Pick&apos;em Bonus Guide</h1>
        <p className="home-desc">
          The fastest way to claim your welcome bonuses. Pick a category below to see the top platforms, what they offer, and exactly how to redeem it.
        </p>
        <div className="home-buttons">
          {buttons.map(b => (
            <button
              key={b.key}
              className={`home-btn ${active === b.key ? 'home-btn--active' : ''}`}
              onClick={() => setActive(active === b.key ? null : b.key)}
            >
              <span className="home-btn-icon">{b.icon}</span>
              {b.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
