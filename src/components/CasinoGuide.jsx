import { useParams, Link } from 'react-router-dom'
import { CashStack, ArrowLeft, CheckCircleFill } from 'react-bootstrap-icons'
import { track } from '@vercel/analytics'
import platforms, { toSlug } from '../data/sweepsPlatforms.js'
import './CasinoGuide.css'

function LuckyHandsGuide({ platform }) {
  return (
    <>
      <p>
        LuckyHands offers straightforward welcome offers and a daily login bonus. It is a good beginner site with redemptions that process much faster than most sweepstakes casinos.
      </p>

      <div className="casino-guide-two-col">
        <div className="casino-guide-text-col">
          <div className="casino-guide-details">
            <div className="casino-guide-detail-row">
              <span className="casino-guide-detail-label">Min. redemption</span>
              <span className="casino-guide-detail-val">50 SC</span>
            </div>
            <div className="casino-guide-detail-row">
              <span className="casino-guide-detail-label">Redemption speed</span>
              <span className="casino-guide-detail-val">Fast, much quicker than most sites</span>
            </div>
            <div className="casino-guide-detail-row">
              <span className="casino-guide-detail-label">Playthrough requirement</span>
              <span className="casino-guide-detail-val">1x</span>
            </div>
            <div className="casino-guide-detail-row">
              <span className="casino-guide-detail-label">Recommended games</span>
              <span className="casino-guide-detail-val">Plinko, Mines</span>
            </div>
          </div>

          <p>
            For the welcome offers, buy the ones that give you tons of bonus SC, like $10 for 20 SC or $20 for 30 SC. Complete the 1x playthrough by sticking to plinko or mines with small bet sizes. You should get through your playthrough very easily and redeem for a nice profit. If you are not quite at 50 SC yet, you can wait and collect daily bonuses, or just buy a small regular pack of SC in the shop if you are eager to redeem.
          </p>

          <div className="casino-guide-callout">
            <CheckCircleFill size={13} className="casino-guide-callout-icon" />
            <span><strong>My result:</strong> I deposited $10 and $20 across two welcome deals, fulfilled the playthrough on plinko and mines, and withdrew $52.</span>
          </div>
        </div>
        <div className="casino-guide-img-col">
          <img
            src="/images/guide/luckyhandsgames.png"
            alt="LuckyHands recommended games"
            className="casino-guide-screenshot"
          />
          <p className="casino-guide-img-caption">My 3 recommended games on LuckyHands</p>
        </div>
      </div>
    </>
  )
}

function CrownCoinsGuide() {
  return (
    <>
      <p>
        Crown Coins is my pick for best overall sweepstakes casino. They put a lot of effort into constant deals and promos, the welcome offers are fantastic, daily bonuses and missions are solid, and the VIP program adds even more on top. The interface also feels more polished than most other sites.
      </p>

      <div className="casino-guide-details">
        <div className="casino-guide-detail-row">
          <span className="casino-guide-detail-label">Playthrough requirement</span>
          <span className="casino-guide-detail-val">1x</span>
        </div>
        <div className="casino-guide-detail-row">
          <span className="casino-guide-detail-label">Top games</span>
          <span className="casino-guide-detail-val">Turbo Mines, Magic Dice, Fruity Girl</span>
        </div>
      </div>

      <h3 className="casino-guide-section-heading">Best Games</h3>

      <div className="casino-guide-two-col">
        <div className="casino-guide-text-col">
          <div className="casino-guide-game-entry">
            <span className="casino-guide-game-title">Turbo Mines</span>
            <span className="casino-guide-game-rtp">~92% RTP</span>
          </div>
          <p>Extremely low volatility. Set the bet size as small as possible and enable autoplay for 100 at a time. Select 2 mines and 1 box for a 1.01x multiplier. This is also the best game for grinding GC to level up your VIP status.</p>

          <div className="casino-guide-game-entry">
            <span className="casino-guide-game-title">Magic Dice</span>
            <span className="casino-guide-game-rtp">~94% RTP</span>
          </div>
          <p>My top pick overall. Slightly slower due to animations and no autoplay, but still fast enough. Always bet Over on 3. If you have more than 100 SC to play through, bet 2 SC at a time. Betting lower is always safer but takes longer.</p>

          <div className="casino-guide-game-entry">
            <span className="casino-guide-game-title">Fruity Girl</span>
            <span className="casino-guide-game-rtp">Slots (avoid for playthrough)</span>
          </div>
          <p>Slots are generally bad for playing through your balance, but Fruity Girl has slightly lower volatility than most. Its real value is speed: you can bet 0.01 SC per spin and run turbo autoplay. If you have a daily mission like "spin 200 times", switch to this game to knock it out fast without eating into your progress on the next mission.</p>
        </div>
        <div className="casino-guide-img-col">
          <img src="/images/guide/crown/games.png" alt="Crown Coins recommended games" className="casino-guide-screenshot" />
          <p className="casino-guide-img-caption">Turbo Mines, Magic Dice, and Fruity Girl</p>
        </div>
      </div>

      <h3 className="casino-guide-section-heading">Daily Missions</h3>

      <div className="casino-guide-two-col">
        <div className="casino-guide-text-col">
          <p>Crown Coins gives you a full track of daily missions for both GC and SC. The catch is that your next mission is hidden until you complete the current one, and there is a big reward at the end of the track.</p>
          <p>The SC track escalates fast. By mission 5 of 10, the requirement can be something like "Win a total of 3,000 SC." The SC rewards per mission also tend to be underwhelming, and the wheel rewards are unreliable. Even if the max prize on a wheel is 200 SC, the minimum could be 0.5 SC. Do not chase wheels.</p>
          <div className="casino-guide-callout">
            <CheckCircleFill size={13} className="casino-guide-callout-icon" />
            <span>Complete the GC mission track consistently. It is much more forgiving than the SC track and builds VIP points at the same time.</span>
          </div>
        </div>
        <div className="casino-guide-img-col">
          <img src="/images/guide/crown/missions.png" alt="Crown Coins daily missions" className="casino-guide-screenshot" />
          <p className="casino-guide-img-caption">The daily mission track</p>
        </div>
      </div>

      <h3 className="casino-guide-section-heading">VIP Program</h3>

      <div className="casino-guide-two-col">
        <div className="casino-guide-text-col">
          <p>The VIP program upgrades your daily bonus and gives you bonus cash each time you level up. You earn 1 VIP point per 100k GC spent or per 1 SC spent. You will earn points naturally from buying deals, but you can also grind GC through Turbo Mines to accelerate progress.</p>
          <p>The tiers scale at 10x increments, so reaching Emerald or Pearl would require spending millions of dollars worth of SC. Realistically, <strong>Silver and Gold are the tiers worth targeting.</strong> Once you have a feel for the point values, the upper tiers start to look pretty unreasonable.</p>
        </div>
        <div className="casino-guide-img-col">
          <img src="/images/guide/crown/vip.png" alt="Crown Coins VIP tiers" className="casino-guide-screenshot" />
          <p className="casino-guide-img-caption">VIP tier overview</p>
        </div>
      </div>
    </>
  )
}

const guideComponents = {
  'luckyhands': LuckyHandsGuide,
  'crown-coins': CrownCoinsGuide,
}

export default function CasinoGuide() {
  const { casino } = useParams()
  const platform = platforms.find(p => toSlug(p.name) === casino)

  if (!platform) {
    return (
      <div className="casino-guide-notfound">
        <p>Casino not found.</p>
        <Link to="/sweeps#sweeps-sites" className="casino-guide-back">← Back to Sweeps Guide</Link>
      </div>
    )
  }

  const GuideContent = guideComponents[casino]

  return (
    <section className="section">
      <div className="container">
        <Link to="/sweeps#sweeps-sites" className="casino-guide-back">
          <ArrowLeft size={14} /> Back to Sweeps Guide
        </Link>

        <div className="casino-guide-header">
          {platform.logo && (
            <img src={platform.logo} alt={platform.name} className="casino-guide-logo" />
          )}
          <h2 className="section-title">{platform.name} Guide</h2>
        </div>

        {GuideContent
          ? <GuideContent platform={platform} />
          : <p className="casino-guide-coming-soon">Coming soon.</p>
        }

        <a
          href={platform.link}
          className="btn btn-primary casino-guide-cta"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('signup_click', { site: platform.name, section: 'casino-guide' })}
        >
          <CashStack size={15} /> Sign Up for {platform.name}
        </a>
      </div>
    </section>
  )
}
