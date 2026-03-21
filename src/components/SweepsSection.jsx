import './SweepsSection.css'

const casinos = [
  {
    name: 'Stake.us',
    tagline: 'Crypto-style sweeps with a huge game library',
    description: 'Daily free coins, instant redemptions, and one of the widest game selections in sweeps. Great for slots and live dealer games.',
    badge: 'Top Pick',
    link: '#',
    cta: 'Play Stake.us',
  },
  {
    name: 'McLuck',
    tagline: 'Generous daily bonuses and fast payouts',
    description: 'McLuck dishes out free Sweeps Coins every day just for logging in. Easy verification and some of the fastest SC-to-cash redemptions around.',
    badge: 'Best Daily Bonuses',
    link: '#',
    cta: 'Play McLuck',
  },
  {
    name: 'Pulsz',
    tagline: 'Big library, real cash prizes',
    description: 'Pulsz offers a massive slot library and consistent promotions. Their first-purchase bonus is one of the better coin package deals available.',
    badge: 'Best Library',
    link: '#',
    cta: 'Play Pulsz',
  },
  {
    name: 'High 5 Casino',
    tagline: 'Exclusive games you won\'t find elsewhere',
    description: 'High 5 develops many of its own titles, so you get games unavailable on any other platform. Great for players who want something fresh.',
    badge: 'Exclusive Titles',
    link: '#',
    cta: 'Play High 5',
  },
  {
    name: 'WOW Vegas',
    tagline: 'Simple, clean, and reliable',
    description: 'WOW Vegas is easy to navigate and reliable for payouts. Good for players who want a no-nonsense sweeps experience without heavy upselling.',
    badge: 'Most Reliable',
    link: '#',
    cta: 'Play WOW Vegas',
  },
  {
    name: 'Chumba Casino',
    tagline: 'The OG sweepstakes casino',
    description: 'Chumba is one of the originals and still going strong. Trusted, stable, and known for smooth redemptions. A safe default pick for beginners.',
    badge: 'Most Trusted',
    link: '#',
    cta: 'Play Chumba',
  },
]

export default function SweepsSection() {
  return (
    <section id="sweeps">
      <div className="container">
        <p className="section-label">Group 2 — Sweepstakes Casinos</p>
        <h2 className="section-title">Sweepstakes Casinos Explained</h2>
        <p className="section-subtitle">
          Play casino-style games legally in the US — no real money wagering required.
        </p>

        <div className="sweeps-explainer card">
          <h3 className="sweeps-explainer-title">What Are Sweepstakes Casinos?</h3>
          <div className="sweeps-explainer-body">
            <p>
              Sweepstakes casinos are legal alternatives to online gambling that operate under promotional sweepstakes law. Instead of betting real money directly, you play with two virtual currencies: <strong>Gold Coins (GC)</strong> for fun, and <strong>Sweeps Coins (SC)</strong> that can be redeemed for real cash prizes.
            </p>
            <p>
              You can get Sweeps Coins for free — through daily login bonuses, mail-in requests, or purchasing Gold Coin packages (which come bundled with free SC). You never have to buy anything. This legal structure makes them available in most US states.
            </p>
          </div>

          <div className="sweeps-how-grid">
            <div className="sweeps-how-item">
              <span className="sweeps-how-icon">🪙</span>
              <strong>Gold Coins</strong>
              <p>For fun only — play games, practice strategies, no cash value.</p>
            </div>
            <div className="sweeps-how-item">
              <span className="sweeps-how-icon">💎</span>
              <strong>Sweeps Coins</strong>
              <p>Play for prizes — redeem winnings for real cash or gift cards.</p>
            </div>
            <div className="sweeps-how-item">
              <span className="sweeps-how-icon">✅</span>
              <strong>Legal Nationwide</strong>
              <p>Available in most US states. No real-money wagering required.</p>
            </div>
            <div className="sweeps-how-item">
              <span className="sweeps-how-icon">📬</span>
              <strong>Free to Play</strong>
              <p>Request free SC by mail — no purchase ever required to win.</p>
            </div>
          </div>
        </div>

        <h3 className="sweeps-grid-title">Best Sweepstakes Casinos Right Now</h3>
        <div className="sweeps-grid">
          {casinos.map(casino => (
            <div key={casino.name} className="card sweeps-card">
              <div className="sweeps-card-badge">
                <span className="badge badge-accent">{casino.badge}</span>
              </div>
              <h4 className="sweeps-card-name">{casino.name}</h4>
              <p className="sweeps-card-tagline">{casino.tagline}</p>
              <p className="sweeps-card-desc">{casino.description}</p>
              <a href={casino.link} className="btn btn-primary sweeps-card-cta" target="_blank" rel="noopener noreferrer">
                {casino.cta} →
              </a>
            </div>
          ))}
        </div>

        <div className="sweeps-tips card">
          <h3 className="sweeps-tips-title">Strategy & Navigation Tips</h3>
          <div className="sweeps-tips-body">
            <p>
              The best approach with sweeps casinos is to spread across 2–3 platforms and collect daily bonuses on each. Logging in every day on McLuck, Stake.us, and Pulsz stacks up thousands of free Gold Coins per week, plus free SC that can convert to real cash.
            </p>
            <p>
              When evaluating a platform, look at the Sweeps Coin redemption rate (how many SC = $1), the minimum redemption amount, and payout speed. Some platforms require identity verification before your first redemption — complete this early so there are no delays when you win.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
