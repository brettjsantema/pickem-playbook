import { useState } from 'react'
import { ExclamationTriangleFill, CheckCircleFill, XCircleFill, CashStack, LockFill, UnlockFill, ArrowRight } from 'react-bootstrap-icons'
import './Section.css'
import './SweepsSection.css'

const platforms = [
  { name: 'Stake.us',      logo: '/images/logos/stake.jpg',        welcomeText: '25 SC Free on Signup', link: 'https://stake.us/?c=BbCSxQls' },
  { name: 'Crown Coins',   logo: '/images/logos/crowncoins.png',   welcomeText: 'Welcome Offers',       link: 'https://crowncoinscasino.com/?utm_campaign=9067a285-018f-4af3-a128-df01d53d1767&utm_source=friends' },
  { name: 'Modo',          logo: '/images/logos/modo.png',         welcomeText: 'Welcome Offers',       link: 'https://modo.us?referralCode=T5WNX6' },
  { name: 'LuckyHands',    logo: '/images/logos/luckyhands.jpg',   welcomeText: 'Welcome Offers',       link: 'https://luckyhands.com/sign-up?code=e3a41524-0a48-4d3b-b2bd-29c477dc7cc1' },
  { name: 'McLuck',        logo: '/images/logos/mcluck.png',       welcomeText: 'Welcome Offers',       link: 'https://www.mcluck.com/lp/raf?r=81a258e5%2F2541552073' },
  { name: 'Spree',         logo: '/images/logos/spree.jpg',        welcomeText: 'Welcome Offers',       link: 'https://spree.com/?r=2084566' },
  { name: 'Pulsz',         logo: '/images/logos/pulsz.png',        welcomeText: 'Welcome Offers',       link: 'https://www.pulsz.com/?invited_by=1auegr' },
  { name: 'Pulsz Bingo',   logo: '/images/logos/pulszbingo.png',   welcomeText: 'Welcome Offers',       link: 'https://www.pulszbingo.com/?invited_by=grhbze' },
  { name: 'PlayFame',      logo: '/images/logos/playfame.png',     welcomeText: 'Welcome Offers',       link: 'https://www.playfame.com/lp/raf?r=51c24eac%2F2547101221' },
  { name: 'Jackpota',      logo: '/images/logos/jackpota.svg',     welcomeText: 'Welcome Offers',       link: 'https://www.jackpota.com/?r=424322914' },
  { name: 'MegaBonanza',   logo: '/images/logos/megabonanza.webp', welcomeText: 'Welcome Offers',       link: 'https://www.megabonanza.com/?r=415866674' },
  { name: 'HelloMillions', logo: '/images/logos/hellomillions.webp',welcomeText: 'Welcome Offers',      link: 'https://www.hellomillions.com/lp/raf?r=5459cd73%2F2553383889' },
  { name: 'WOW Vegas',     logo: '/images/logos/wowvegas.svg',     welcomeText: 'Welcome Offers',       link: 'https://www.wowvegas.com/' },
  { name: 'SpinQuest',     logo: '/images/logos/spinquest.svg',    welcomeText: 'Welcome Offers',       link: 'https://spinquest.com/?u=DNSH33S' },
  { name: 'Lonestar',      logo: '/images/logos/lonestar.png',     welcomeText: 'Welcome Offers',       link: 'https://lonestarcasino.com/refer/2452423' },
  { name: 'Realprize',     logo: '/images/logos/realprize.jpg',    welcomeText: 'Welcome Offers',       link: 'https://realprize.com/refer/2185107' },
  { name: 'MyPrize',       logo: '/images/logos/myprize.png',      welcomeText: 'Welcome Offers',       link: 'https://myprize.us/invite/player4983577036037' },
  { name: 'Shuffle',       logo: '/images/logos/shuffle.png',      welcomeText: 'Welcome Offers',       link: 'https://shuffle.us?r=gZV4mOD7z9' },
  { name: 'SpinBlitz',     logo: '/images/logos/spinblitz.png',    welcomeText: 'Welcome Offers',       link: 'https://www.spinblitz.com/lp/raf?r=3d210d80%2F2565575372' },
  { name: 'Rebet',         logo: '/images/logos/rebet.png',        welcomeText: 'Welcome Offers',       link: 'https://prod.d1z93dthu4z3m6.amplifyapp.com?code=U-BRE-SAN-6V&type=refferal_code' },
]

export default function SweepsSection() {
  const [unlocked, setUnlocked] = useState(false)

  function openAllTabs() {
    if (!unlocked) return
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

        <div className="sweeps-guide">

          {/* Core Concept */}
          <div className="sweeps-block">
            <h3 className="sweeps-heading">Core Concept</h3>
            <p>Sweepstakes casinos operate throughout most of the US under a legal loophole: they give out two currencies. <strong>Gold Coins (GC)</strong> are play-money with no redeemable value. <strong>Sweeps Coins (SC)</strong> can be redeemed for real cash, typically at a 1 SC = $1 rate. When you "deposit" money, you are actually buying GC, and the SC is given as an extra "bonus".</p>
            <p>There are dozens of these sites, and most hand out free SC daily just for logging in. The amount each day is small, but it only takes a couple of seconds per site to log in and claim the bonus, so the amount really adds up. On top of that, most sites have very generous welcome offers, and by choosing the right games you can make some serious cash off of them. </p>
          </div>

          {/* Daily Farming */}
          <div className="sweeps-block">
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
          <div className="sweeps-block">
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
          <div className="sweeps-block">
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
        <div className="sweeps-platforms-divider">
          <h3 className="sweeps-platforms-heading">Recommended Sites</h3>
          <div className="sweeps-platforms-subline" />
        </div>
        <div className="platform-grid platform-grid--4col">
          {platforms.map(p => (
            <div key={p.name} className="card platform-card sweeps-card">
              <div className="platform-header">
                {p.logo && <img src={p.logo} alt={p.name} className={`platform-logo${p.name === 'Jackpota' ? ' platform-logo--contain' : ''}`} />}
                <h3 className="platform-name">{p.name}</h3>
              </div>
              <div className="sweeps-card-features">
                <div className="sweeps-card-feature">
                  <CheckCircleFill size={12} className="sweeps-feature-icon" />
                  <span>Daily Bonus</span>
                </div>
                <div className="sweeps-card-feature">
                  <CheckCircleFill size={12} className="sweeps-feature-icon" />
                  <span>{p.welcomeText}</span>
                </div>
              </div>
              <a href={p.link} className="btn btn-primary platform-cta sweeps-card-btn" target="_blank" rel="noopener noreferrer">
                <CashStack size={14} /> Sign Up
              </a>
            </div>
          ))}
        </div>

        {/* Tab Launcher */}
        <div className="sweeps-launcher-divider" />
        <div className="sweeps-launcher">
          <p className="sweeps-launcher-label">Farming daily bonuses? Open all the sites in 1 click.</p>
          <p className="sweeps-launcher-hint">Your browser will block the tabs on first use — just hit <strong>Allow popups from this page</strong> when prompted.</p>
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
