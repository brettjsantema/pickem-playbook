import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ExclamationTriangleFill, CheckCircleFill, XCircleFill, CashStack, LockFill, UnlockFill, ArrowRight, ExclamationCircleFill, BoxArrowUpRight } from 'react-bootstrap-icons'
import { track } from '@vercel/analytics'
import platforms, { toSlug } from '../data/sweepsPlatforms.js'
import useSEO from '../hooks/useSEO.js'
import './Section.css'
import './SweepsSection.css'

export default function SweepsSection() {
  useSEO({
    title: 'Best Sweepstakes Casinos 2026 | PickemPlaybook.com',
    description: `Full guide to the best sweepstakes casinos in 2026. ${platforms.length} sites reviewed — sign up for free, collect daily bonuses, and cash out real money.`,
    url: '/sweeps',
  })
  const [unlocked, setUnlocked] = useState(false)
  const { hash } = useLocation()

  useEffect(() => {
    if (hash === '#sweeps-sites') {
      const el = document.getElementById('sweeps-sites')
      if (el) el.scrollIntoView({ behavior: 'instant' })
    }
  }, [hash])

  function openAllTabs() {
    if (!unlocked) return
    track('open_all_tabs', { count: platforms.length })
    platforms.forEach(p => window.open(p.link, '_blank', 'noopener,noreferrer'))
    setUnlocked(false)
  }

  return (
    <section className="section">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">Sweepstakes Casinos Guide</h2>
          <p className="section-subtitle">How to make passive income from daily freebies, and collect on big welcome bonuses.</p>
        </div>

        {/* Featured picks */}
        <div className="sweeps-featured">
          {[
            {
              tag: 'Weekend Deals', name: 'Sweet Sweeps', logo: '/images/logos/sweetsweeps.webp', logoZoom: true,
              link: 'https://sweetsweeps.com?referralCode=REFMTk1MjEy', domain: 'sweetsweeps.com',
              bullets: ['Weekend discount packs and streak builder with free spins', 'Easy 96% return with Gravity Plinko'],
              verified: 'Updated today, April 17th 2026',
            },
            {
              tag: 'Flash Deals', name: 'WOW Vegas', logo: '/images/logos/wowvegas.svg', logoZoom: true,
              link: 'https://www.wowvegas.com/?raf=11961191', domain: 'wowvegas.com',
              bullets: ['100% extra flash deal today', 'Classic site with daily free spins'],
              verified: 'Updated today, April 17th 2026',
            },
            {
              tag: 'My Favorite', name: 'Jackpot Go', logo: '/images/logos/jackpotgo.png',
              link: 'https://game.jackpotgo.com?invite_code=XC7DJZXM', domain: 'game.jackpotgo.com',
              bullets: ['Great Rewards Track', 'Weekly milestones with SC prizes'],
              verified: 'Updated today, April 17th 2026',
            },
          ].map(f => (
            <div key={f.name} className="sweeps-featured-card">
              {f.tag && <span className="sweeps-featured-tag">{f.tag}</span>}
              <img src={f.logo} alt={f.name} className={`sweeps-featured-logo${f.logoZoom ? ' sweeps-featured-logo--zoom' : ''}`} />
              <div className="sweeps-featured-info">
                <span className="sweeps-featured-name">{f.name}</span>
                {f.bullets && (
                  <ul className="sweeps-featured-bullets">
                    {f.bullets.map(b => <li key={b}>{b}</li>)}
                  </ul>
                )}
              </div>
              {f.verified && (
                <span className="sweeps-featured-verified">
                  <CheckCircleFill size={10} className="sweeps-featured-verified-icon" />
                  {f.verified}
                </span>
              )}
              <a href={f.link} className="btn btn-primary sweeps-featured-btn" target="_blank" rel="noopener noreferrer" onClick={() => track('signup_click', { site: f.name, section: 'sweeps-featured' })}>
                {f.domain} <BoxArrowUpRight size={11} />
              </a>
            </div>
          ))}
        </div>
        <a href="#sweeps-sites" className="sweeps-view-all">View all sites <span className="sweeps-view-all-arrow">↓</span></a>

        <nav className="sweeps-toc">
          <a href="#sweeps-core" className="sweeps-toc-link">Core Concept</a>
          <span className="sweeps-toc-sep">·</span>
          <a href="#sweeps-farming" className="sweeps-toc-link">Daily Farming</a>
          <span className="sweeps-toc-sep">·</span>
          <a href="#sweeps-offers" className="sweeps-toc-link">Welcome Offers</a>
          <span className="sweeps-toc-sep">·</span>
          <a href="#sweeps-games" className="sweeps-toc-link">Game Strategy</a>
          <span className="sweeps-toc-sep">·</span>
          <a href="#sweeps-sites" className="sweeps-toc-link">Site List</a>
        </nav>

        <div className="sweeps-guide">

          {/* Core Concept */}
          <div id="sweeps-core" className="sweeps-block">
            <h3 className="sweeps-heading">Core Concept</h3>
            <p>Sweepstakes casinos operate throughout most of the US under a legal loophole: they give out two currencies. <strong>Gold Coins (GC)</strong> are play-money with no redeemable value. <strong>Sweeps Coins (SC)</strong> can be redeemed for real cash, typically at a 1 SC = $1 rate. When you "deposit" money, you are actually buying GC, and the SC is given as an extra "bonus".</p>
            <p>There are dozens of these sites, and most hand out free SC daily just for logging in. The amount each day is small, but it only takes a couple of seconds per site to log in and claim the bonus, so the amount really adds up. On top of that, most sites have very generous welcome offers, and by choosing the right games you can make some serious cash off of them. </p>
            <a href="#sweeps-sites" className="sweeps-jump-link">Skip to Recommended Sites ↓</a>
          </div>

          {/* Daily Farming */}
          <div id="sweeps-farming" className="sweeps-block">
            <h3 className="sweeps-heading">Daily Farming Strategy</h3>
            <div className="sweeps-callout">
              <CheckCircleFill size={13} className="sweeps-callout-icon" />
              <span>Get passive income without ever making a purchase.</span>
            </div>
            <p>Most sweepstakes casinos offer free SC on a daily login. You'll also get other bonuses/free spins at random and through promo emails. Individually, each site pays a tiny amount per day - usually between $0.10 to $1.00 in SC. Across 20+ sites, that adds up fast.</p>

            <div className="sweeps-math-box">
              <div className="sweeps-math-row">
                <span>20 sites × $0.20 avg daily SC</span>
                <span className="sweeps-math-val">$4.00 / day</span>
              </div>
              <div className="sweeps-math-row">
                <span>30 days consistent</span>
                <span className="sweeps-math-val">~$120 / month</span>
              </div>
            </div>

            <p>That estimate is conservative and assumes no deposits, no bonuses - just free daily claims.</p>
            <p>If it doesn't sound easy enough, I also added a button on this site which opens all the ones I have listed in a new tab. Just claim the bonus and then close each tab. </p>
          </div>

          {/* Welcome Offers */}
          <div id="sweeps-offers" className="sweeps-block">
            <h3 className="sweeps-heading">Claiming Welcome Offers</h3>
            <p>On top of free dailies, most sweepstakes casinos have a welcome offer where you buy a GC package and receive a large SC bonus alongside it. The typical structure is something like: spend $20, get $40 in SC. You'll then be offered a second offer, third offer, etc. for greater amounts. These deals are extremely profitable without really gambling.</p>
            <p>The best games return around <strong>94%</strong> of what's wagered (RTP), give or take. Most welcome offers only require a 1x playthrough of the SC bonus before you can redeem it. You wager the SC once through, lose roughly 5%, and keep the rest. The bonus almost always covers that loss by a wide margin.</p>

            <div className="sweeps-math-box">
              <div className="sweeps-math-row">
                <span>Spend $20, receive $40 SC bonus (2x match)</span>
                <span className="sweeps-math-val">+$40 SC</span>
              </div>
              <div className="sweeps-math-row">
                <span>1x playthrough - wager $40 at ~5% loss</span>
                <span className="sweeps-math-val">−$2</span>
              </div>
              <div className="sweeps-math-row sweeps-math-row--total">
                <span>Net profit after redeeming SC</span>
                <span className="sweeps-math-val">~$18</span>
              </div>
            </div>
          </div>

          {/* Game Strategy */}
          <div id="sweeps-games" className="sweeps-block">
            <h3 className="sweeps-heading">Game Strategy</h3>
            <p>When you do need to wager your unplayed SC, game selection matters.</p>
            <ul className="sweeps-list">
              <li><strong>Avoid slots.</strong> They are designed for hunting jackpots rather than getting a consistent return.</li>
              <li><strong>Look for plinko.</strong> You can turn the difficulty to "low" and reduce your bet size to 0.1 or 0.2 per ball, then drop hundreds of balls. For Gravity Plinko, you can set this to auto to play through your balance faster. </li>
              <li><strong>Look for dice or mines.</strong> The goal is to pick the easiest outcome that gives you the smallest multiplier, and keep the bets as small as possible. For dice that means picking "Over" with the smallest possible number, and with mines you can pick the minimum number of mines and choose the minimum number of boxes.</li>
              <li><strong>When in doubt, roulette and blackjack are okay.</strong> You can bet a flat amount on every bet. You'll have to deal with variance, but you'll maintain a solid expected RTP in lieu of an easier game.</li>
            </ul>
          </div>

          {/* Risks */}
          <div className="sweeps-callout" style={{maxWidth: '760px'}}>
            <CheckCircleFill size={13} className="sweeps-callout-icon" />
            <span><strong>Beating variance is easy.</strong> Always ensure you have a good game ready to go before making a purchase. As long as you keep the bet amount small, play the easiest games, and don't actually gamble, it's virtually impossible not to come out on top after fulfilling the 1x playthrough requirement, at least for the welcome offers.</span>
          </div>
          <div className="sweeps-warning">
            <div className="sweeps-warning-item">
              <ExclamationTriangleFill size={13} className="sweeps-warning-icon" />
              <span><strong>Don't buy the welcome offers for all the sites at once.</strong> You have to complete a few verification steps before redeeming your money, and sometimes the withdrawals take several days to process. I recommend taking it slow at first. </span>
            </div>
            <div className="sweeps-warning-item">
              <ExclamationTriangleFill size={13} className="sweeps-warning-icon" />
              <span><strong>Be prepared to provide verification documents.</strong> When you go to redeem your SC, you'll be required to submit a scan of your ID and a selfie, through a third party app like Veriff. They may also ask for other forms of verification like proof of address, card verification, or a bank statement. </span>
            </div>
            <div className="sweeps-warning-item">
              <ExclamationTriangleFill size={13} className="sweeps-warning-icon" />
              <span><strong>Be aware of minimum redemption amounts.</strong> Each site requires a minimum SC balance to redeem. Usually it's 50, 75, or 100 SC. If you're under the minimum, resist the temptation to gamble to try and reach it.</span>
            </div>
          </div>

          <div className="sweeps-danger">
            <XCircleFill size={14} className="sweeps-danger-icon" />
            <span><strong>Never waste your redeemable SC balance.</strong> Gambling on these sites is not worth it, which is exactly why they offer such enticing deals. Collect the bonus, clear the playthrough, and redeem.</span>
          </div>

        </div>

        {/* Platform Cards */}
        <div id="sweeps-sites" className="sweeps-platforms-divider">
          <h3 className="sweeps-platforms-heading">Recommended Sites</h3>
          <div className="sweeps-platforms-subline" />
        </div>

        {/* Desktop: full cards */}
        <div className="sweeps-grid-desktop">
          <div className="platform-grid platform-grid--4col">
            {platforms.map(p => (
              <div key={p.name} className="card platform-card sweeps-card">
                <div className="platform-header">
                  {p.logo && <img src={p.logo} alt={p.name} className={`platform-logo${['Jackpota', 'Sweep Jungle', 'Ace', 'Spindoo'].includes(p.name) ? ' platform-logo--contain' : ''}`} />}
                  <h3 className="platform-name">{p.name}</h3>
                </div>
                <div className="sweeps-card-features">
                  <div className="sweeps-card-feature">
                    <CheckCircleFill size={12} className="sweeps-feature-icon" />
                    <span>Daily Bonus</span>
                  </div>
                  <div className="sweeps-card-feature">
                    <CheckCircleFill size={12} className="sweeps-feature-icon" />
                    <span className={p.name === 'Jackpot Go' ? 'sweeps-feature-highlight' : ''}>{p.welcomeText}</span>
                  </div>
                  {p.b2Features && (
                    <div className="sweeps-card-feature">
                      <CheckCircleFill size={12} className="sweeps-feature-icon" />
                      <span>Quick Redemptions</span>
                    </div>
                  )}
                </div>
                {p.warnings && (
                  <div className="sweeps-card-warnings">
                    {p.warnings.map(w => (
                      <div key={w} className="sweeps-card-warning">
                        <ExclamationCircleFill size={12} className="sweeps-card-warning-icon" />
                        <span>{w}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="sweeps-card-btns">
                  <a href={p.link} className="btn btn-primary platform-cta sweeps-card-btn" target="_blank" rel="noopener noreferrer" onClick={() => track('signup_click', { site: p.name, section: 'sweeps' })}>
                    <CashStack size={14} /> Sign Up
                  </a>
                  {p.hasGuide || p.b2Guide
                    ? <div className="sweeps-guide-btn-wrap">
                        {p.isNew && <span className="sweeps-guide-new-badge">NEW</span>}
                        <Link to={p.b2Guide ? '/sweeps/b2-casinos' : `/sweeps/${toSlug(p.name)}`} className="btn btn-secondary sweeps-card-btn">{p.b2Guide ? 'B2 Casinos Guide' : 'Guide'}</Link>
                      </div>
                    : <span className="btn btn-secondary sweeps-card-btn sweeps-card-btn--soon">Coming soon</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: compact 4-column mini cards */}
        <div className="sweeps-grid-mobile">
          <div className="platform-grid platform-grid--8col">
            {platforms.map(p => (
              <a
                key={p.name}
                href={p.link}
                className="sweeps-card-mini"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('signup_click', { site: p.name, section: 'sweeps' })}
              >
                {p.logo && <img src={p.logo} alt={p.name} className={`sweeps-card-mini-logo${['Jackpota', 'Sweep Jungle', 'Ace', 'Spindoo'].includes(p.name) ? ' platform-logo--contain' : ''}`} />}
                <span className="sweeps-card-mini-name">{p.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Tab Launcher */}
        <div className="sweeps-launcher-divider" />
        <div className="sweeps-launcher">
          <p className="sweeps-launcher-label">Farming daily bonuses? Open all the sites in 1 click.</p>
          <p className="sweeps-launcher-hint">Your browser may block the tabs on first use. Just hit <strong>Allow popups from this page</strong> if prompted.</p>
          <div className="sweeps-launcher-row">
            <button
              className={`sweeps-lock-btn ${unlocked ? 'sweeps-lock-btn--unlocked' : ''}`}
              onClick={() => setUnlocked(v => !v)}
              title={unlocked ? 'Lock' : 'Click to unlock'}
            >
              {unlocked ? <UnlockFill size={16} /> : <LockFill size={16} />}
            </button>
            <ArrowRight size={14} className="sweeps-launcher-arrow" />
            <button
              className={`sweeps-open-btn ${unlocked ? 'sweeps-open-btn--active' : ''}`}
              onClick={openAllTabs}
              disabled={!unlocked}
            >
              <CashStack size={15} /> Open {platforms.length} Tabs
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
