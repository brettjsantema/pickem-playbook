import './DFSSection.css'

const UNDERDOG_LINK = '#'
const NOVIG_LINK = '#'
const PRIZEPICKS_LINK = '#'

const steps = [
  {
    num: '01',
    title: 'Sign Up via Referral Link',
    body: 'Click our link below and create your account. Using a referral link is the only way to unlock the deposit bonus — you cannot add it after signing up.',
  },
  {
    num: '02',
    title: 'Make Your First Deposit',
    body: 'Deposit any amount — even $10 gets you in. The bonus is typically a 100% match up to a set dollar amount. Larger deposits unlock more bonus funds.',
  },
  {
    num: '03',
    title: 'Claim the Deposit Bonus',
    body: 'The match bonus is credited to your account after your first deposit. Funds are released as you enter contests and play through the bonus amount.',
  },
  {
    num: '04',
    title: 'Watch for Ongoing Promos',
    body: 'Underdog runs weekly reload bonuses, referral rewards, and pick insurance offers. Check the Promos tab every week — these stack and add up fast.',
  },
]

const secondaryDFS = [
  {
    name: 'Novig',
    tagline: 'Commission-free sports betting exchange',
    description:
      'Novig operates as a peer-to-peer betting exchange, meaning you bet against other users instead of the house — no vig. Sharp bettors and value hunters will find better prices here than at traditional books.',
    badge: 'Exchange Model',
    link: NOVIG_LINK,
    cta: 'Join Novig',
  },
  {
    name: 'PrizePicks',
    tagline: 'The most popular DFS pick\'em app',
    description:
      'PrizePicks keeps it simple: pick 2–6 players to go over or under their stat projections. No lineup building, no opponent research. Great for beginners and casual players who want fast action.',
    badge: 'Beginner Friendly',
    link: PRIZEPICKS_LINK,
    cta: 'Join PrizePicks',
  },
]

export default function DFSSection() {
  return (
    <section id="dfs">
      <div className="container">
        <p className="section-label">Group 1 — Daily Fantasy</p>
        <h2 className="section-title">DFS Picks & Fantasy Sports</h2>
        <p className="section-subtitle">
          The best platforms for daily fantasy sports, pick'em contests, and sports betting — with real signup bonuses you can actually claim.
        </p>

        {/* Underdog Featured Card */}
        <div className="underdog-card card">
          <div className="underdog-header">
            <div>
              <div className="underdog-top">
                <span className="badge badge-accent">Featured</span>
                <span className="badge badge-green">Deposit Bonus Available</span>
              </div>
              <h3 className="underdog-name">Underdog Fantasy</h3>
              <p className="underdog-tagline">The best pick'em DFS app — plus the best deposit bonus in the game</p>
            </div>
            <a href={UNDERDOG_LINK} className="btn btn-primary underdog-cta-top" target="_blank" rel="noopener noreferrer">
              Claim Bonus →
            </a>
          </div>

          <div className="underdog-body">
            <div className="underdog-guide">
              <h4 className="guide-title">How to Claim the Deposit Bonus</h4>
              <div className="steps">
                {steps.map(s => (
                  <div key={s.num} className="step">
                    <div className="step-num">{s.num}</div>
                    <div className="step-content">
                      <strong>{s.title}</strong>
                      <p>{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bonus-tip">
                <span className="bonus-tip-icon">💡</span>
                <div>
                  <strong>Pro Tip:</strong> The deposit bonus is your highest-value offer. Make sure to use the referral link before depositing — the promo cannot be applied retroactively.
                </div>
              </div>
            </div>

            <div className="underdog-offers">
              <h4 className="guide-title">Ongoing Offers to Stack</h4>
              <ul className="offer-list">
                <li>
                  <span className="offer-icon">🔄</span>
                  <div>
                    <strong>Weekly Reload Bonus</strong>
                    <p>Underdog regularly runs reload deposit bonuses — typically 25–50% match on your next deposit. Check the app every Monday.</p>
                  </div>
                </li>
                <li>
                  <span className="offer-icon">🛡️</span>
                  <div>
                    <strong>Pick Insurance</strong>
                    <p>Selected contests offer pick insurance — if one of your picks loses, you get a refund. Keep an eye on "Boosted" entries in the lobby.</p>
                  </div>
                </li>
                <li>
                  <span className="offer-icon">👥</span>
                  <div>
                    <strong>Refer a Friend</strong>
                    <p>Once you're signed up, Underdog gives you your own referral link. Every friend you bring in earns you bonus credits.</p>
                  </div>
                </li>
                <li>
                  <span className="offer-icon">🎯</span>
                  <div>
                    <strong>Contest-Specific Promos</strong>
                    <p>NFL, NBA, and MLB seasons bring limited-time boosted entries, multiplier contests, and first-entry guarantees.</p>
                  </div>
                </li>
              </ul>

              <a href={UNDERDOG_LINK} className="btn btn-primary underdog-cta-bottom" target="_blank" rel="noopener noreferrer">
                Sign Up & Claim Your Bonus
              </a>
            </div>
          </div>
        </div>

        {/* Secondary DFS Cards */}
        <h3 className="also-try-title">Also Worth Signing Up For</h3>
        <div className="secondary-grid">
          {secondaryDFS.map(site => (
            <div key={site.name} className="card secondary-card">
              <div className="secondary-top">
                <span className="badge badge-accent">{site.badge}</span>
              </div>
              <h4 className="secondary-name">{site.name}</h4>
              <p className="secondary-tagline">{site.tagline}</p>
              <p className="secondary-desc">{site.description}</p>
              <a href={site.link} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                {site.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
