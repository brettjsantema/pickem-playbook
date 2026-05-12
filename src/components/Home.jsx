import { Link } from 'react-router-dom'
import dfsPlatforms from '../data/dfsPlatforms.js'
import sweepsPlatforms from '../data/sweepsPlatforms.js'
import useSEO from '../hooks/useSEO.js'
import './Home.css'

const guides = [
  {
    path: '/bonusguide',
    title: "Pick'em Bonus Guide",
    desc: "How to redeem welcome bonuses on pick'em apps like Underdog and PrizePicks by hedging bets.",
    sticker: '/images/stickers/sportsbooks.png',
    count: dfsPlatforms.length,
    countLabel: 'sportsbooks covered',
    tag: 'DFS / Pick\'em',
    rotate: '-1.2deg',
  },
  {
    path: '/sweeps',
    title: 'Sweeps Casinos Guide',
    desc: 'The best sweepstakes casinos with daily bonuses and welcome offers.',
    sticker: '/images/stickers/sweeps.png',
    count: sweepsPlatforms.length,
    countLabel: 'casinos listed',
    tag: 'Sweepstakes',
    rotate: '0.8deg',
  },
  {
    path: '/rips',
    title: 'Rips by Triumph',
    desc: 'Open Pokémon card packs on your phone. Refer friends and you both get a free pack.',
    sticker: '/images/stickers/rips.png',
    freeLabel: 'Free pack available!',
    tag: 'Trading Cards',
    rotate: '-0.5deg',
  },
]

export default function Home() {
  useSEO({
    title: "PickemPlaybook.com | Sportsbook & Casino Bonus Guides",
    description: "Guides for sportsbooks and casino bonuses.",
    url: '/',
  })
  return (
    <div className="home">
      <div className="container">

        <div className="home-hero">
<h1 className="home-hero-title">The Full List of Profitable Sportsbook & Casino Offers.</h1>
          <p className="home-hero-sub">
            Follow step-by-step guides to clear playthrough requirements with hedging and low-variance games.
          </p>
        </div>

        <div className="home-guide-grid">
          {guides.map(g => (
            <Link
              key={g.path}
              to={g.path}
              className="home-guide-card card"
              style={{ '--rotate': g.rotate }}
            >
              <div className="home-guide-card-body">
                <div className="home-guide-title-row">
                  <h2 className="home-guide-title">{g.title}</h2>
                  <img
                    src={g.sticker}
                    alt=""
                    className="home-guide-sticker sticker"
                    width={36}
                    height={36}
                  />
                </div>
                <p className="home-guide-desc">{g.desc}</p>
              </div>
              <div className="home-guide-footer">
                {g.freeLabel ? (
                  <span className="home-guide-badge home-guide-badge--orange">{g.freeLabel}</span>
                ) : g.count != null ? (
                  <span className="home-guide-badge">{g.count} {g.countLabel}</span>
                ) : null}
                <span className="home-guide-cta">Read the guide →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="home-about card">
          <h2 className="home-about-title">About this site</h2>
          <p>
            Sportsbooks and casinos are throwing loads of signup bonuses at new users right now. Most only require a 1x playthrough, and with a little strategy you can hedge your bets and play high-EV games to take the gambling out of it entirely. I've easily pulled in over $1,000 in just a few weeks from welcome offers.
          </p>
          <p>
            The catch is these deals are only available to new users, so there's only so many to claim. This site is a list of the best ones I've found, with step-by-step guides on how to redeem each offer.
          </p>
          <p>
            These deals exist because casinos have a high customer acquisition cost. They count on people getting hooked, but this site is about the opposite: claim the offer, get paid, and move on to the next one.
          </p>
          <p>
            The links here are referral links, which usually get you an extra bonus on top of the standard offer. It helps me out too, so it's a win-win.
          </p>
        </div>

      </div>
    </div>
  )
}
