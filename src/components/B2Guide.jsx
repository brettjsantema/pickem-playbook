import { Link } from 'react-router-dom'
import { CashStack, ArrowLeft, CheckCircleFill, ExclamationTriangleFill } from 'react-bootstrap-icons'
import { track } from '@vercel/analytics'
import './CasinoGuide.css'
import './B2Guide.css'

const b2Sites = [
  { name: 'McLuck',        logo: '/images/logos/mcluck.png',       link: 'https://www.mcluck.com/lp/raf?r=81a258e5%2F2541552073',       minRedeem: 75 },
  { name: 'PlayFame',      logo: '/images/logos/playfame.png',      link: 'https://www.playfame.com/lp/raf?r=51c24eac%2F2547101221',      minRedeem: 75 },
  { name: 'HelloMillions', logo: '/images/logos/hellomillions.webp',link: 'https://www.hellomillions.com/lp/raf?r=5459cd73%2F2553383889', minRedeem: 75 },
  { name: 'SpinBlitz',     logo: '/images/logos/spinblitz.png',     link: 'https://www.spinblitz.com/lp/raf?r=3d210d80%2F2565575372',     minRedeem: 50 },
]

export default function B2Guide() {
  return (
    <section className="section">
      <div className="container">
        <Link to="/sweeps#sweeps-sites" className="casino-guide-back">
          <ArrowLeft size={14} /> Back to Sweeps Guide
        </Link>

        <div className="casino-guide-header">
          <h2 className="section-title">B2 Casinos Guide</h2>
          <p className="b2-guide-subtitle">McLuck, PlayFame, HelloMillions, SpinBlitz</p>
        </div>

        <div className="b2-site-logos">
          {b2Sites.map(s => (
            <div key={s.name} className="b2-site-logo-wrap">
              <img src={s.logo} alt={s.name} className="b2-site-logo" />
              <span className="b2-site-logo-name">{s.name}</span>
            </div>
          ))}
        </div>

        <p>
          McLuck, PlayFame, HelloMillions, and SpinBlitz are all owned and operated by the same company, B2Services. They all run on the same platform, offer the same game library, and most importantly, they all have big welcome deals that are fast and easy to play through. If you know how to work one of them, you know how to work all of them.
        </p>

        <h3 className="casino-guide-section-heading">Quick Stats</h3>

        <div className="b2-stats-grid">
          {b2Sites.map(s => (
            <div key={s.name} className="b2-stat-card">
              <img src={s.logo} alt={s.name} className="b2-stat-logo" />
              <div className="b2-stat-name">{s.name}</div>
              <div className="casino-guide-details" style={{marginTop: '8px'}}>
                <div className="casino-guide-detail-row">
                  <span className="casino-guide-detail-label">Min. redemption</span>
                  <span className="casino-guide-detail-val">{s.minRedeem} SC</span>
                </div>
                <div className="casino-guide-detail-row">
                  <span className="casino-guide-detail-label">Playthrough</span>
                  <span className="casino-guide-detail-val">1x</span>
                </div>
                <div className="casino-guide-detail-row">
                  <span className="casino-guide-detail-label">Best game</span>
                  <span className="casino-guide-detail-val">Gravity Plinko</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="casino-guide-section-heading">Welcome Deals</h3>

        <p>
          When you first sign up, each site will show you a series of welcome deals. These are your main money-makers. Buy the ones that give you a large amount of bonus SC relative to the purchase price. They come in cascading waves -- completing one deal unlocks the next. Budget somewhere around $200-500 total across the welcome deals on a single site, as they keep showing you new offers after each purchase.
        </p>

        <h3 className="casino-guide-section-heading">How to Play Through Your Balance</h3>

        <div className="casino-guide-two-col">
          <div className="casino-guide-text-col">
            <p>
              The best game for grinding through a large SC balance is <strong>Gravity Plinko</strong>. It has around a 95% return rate, low variance, and is easy to set on autopilot.
            </p>
            <p>Here are the exact settings to use:</p>
            <ul className="b2-settings-list">
              <li>Risk level: <strong>Low or Medium</strong></li>
              <li>Bet size: <strong>as small as possible</strong></li>
              <li>Balls per drop: <strong>50</strong></li>
              <li>Enable <strong>autoplay</strong></li>
            </ul>
            <p>
              With the minimum bet size, each set of 50 balls costs 10 SC. So if you have a large unplayed balance, you can set the number of autoplays to match and walk away.
            </p>
          </div>
          <div className="casino-guide-img-col">
            <img src="/images/guide/b2/gravityplinko.webp" alt="Gravity Plinko" className="casino-guide-screenshot" />
            <p className="casino-guide-img-caption">Gravity Plinko -- the best playthrough game on B2 sites</p>
          </div>
        </div>

        <h3 className="casino-guide-section-heading">Example: Playing Through a 400 SC Balance</h3>

        <div className="casino-guide-two-col">
          <div className="casino-guide-text-col">
            <p>
              This is an example of how to set up Gravity Plinko to grind through a 400 SC unplayed balance.
            </p>
            <p>
              With minimum bet size, each set of 50 balls costs 10 SC. To cover a 400 SC balance, set autoplay to 40 rounds. Hit start and let it run. At 95% return, you can expect to end with around 380 SC -- giving you a clear path to redeem once the playthrough is complete.
            </p>
            <div className="casino-guide-callout">
              <CheckCircleFill size={13} className="casino-guide-callout-icon" />
              <span>This is just an example. Adjust the number of autoplays to match whatever your unplayed balance is, using the same 10 SC per 50-ball set as your guide.</span>
            </div>
          </div>
          <div className="casino-guide-img-col">
            <img src="/images/guide/b2/gravityplinkosettings.png" alt="Gravity Plinko settings example" className="casino-guide-screenshot" />
            <p className="casino-guide-img-caption">Example settings for a 400 SC balance</p>
          </div>
        </div>

        <h3 className="casino-guide-section-heading">My Result</h3>

        <div className="casino-guide-callout">
          <CheckCircleFill size={13} className="casino-guide-callout-icon" />
          <span>I made a little over $100 profit from each B2 site. Four sites means four payouts.</span>
        </div>

        <h3 className="casino-guide-section-heading">The Promo Ban</h3>

        <div className="casino-guide-two-col">
          <div className="casino-guide-text-col">
            <p>
              One thing to be aware of with B2 sites is the "Promo Ban." If you see a message like the screenshot when you open the store, it means the site has flagged your account and will no longer show you exclusive welcome or reload deals -- only the standard flat packs.
            </p>
            <p>
              Being promo-banned does not stop you from playing or redeeming. You can still withdraw your balance normally. It just means the site will not be as profitable going forward, and you are effectively reduced to collecting your daily bonus.
            </p>
            <div className="casino-guide-callout">
              <CheckCircleFill size={13} className="casino-guide-callout-icon" />
              <span>On McLuck, HelloMillions, and PlayFame, I was promo-banned on the first day. If it happens to you, it means you made too much money. Wear it as a badge of honor.</span>
            </div>
          </div>
          <div className="casino-guide-img-col">
            <img src="/images/guide/b2/promoban.png" alt="Promo ban message" className="casino-guide-screenshot" />
            <p className="casino-guide-img-caption">What a promo ban message looks like in the store</p>
          </div>
        </div>

        <h3 className="casino-guide-section-heading">How to Avoid the Promo Ban</h3>

        <p>
          There may be some merit to pacing yourself. Instead of immediately buying all the welcome offers and grinding through your balance in one session, try mixing in other games and working through your balance more slowly. Redeeming in smaller amounts may also help fly under the radar. If you can delay the promo ban even by a few days, you may unlock additional deal waves which means more profit overall. It is not guaranteed, but worth considering if you want to maximize the return from each site.
        </p>

        <h3 className="casino-guide-section-heading">Sign Up for All 4</h3>

        <div className="b2-cta-grid">
          {b2Sites.map(s => (
            <a
              key={s.name}
              href={s.link}
              className="btn btn-primary b2-cta-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('signup_click', { site: s.name, section: 'b2-guide' })}
            >
              <CashStack size={14} /> Sign Up for {s.name}
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
