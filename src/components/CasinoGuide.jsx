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

const guideComponents = {
  'luckyhands': LuckyHandsGuide,
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
