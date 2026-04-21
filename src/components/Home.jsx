import { Link } from 'react-router-dom'
import { Trophy, Dice, PackCard } from './Icons.jsx'
import dfsPlatforms from '../data/dfsPlatforms.js'
import sweepsPlatforms from '../data/sweepsPlatforms.js'
import useSEO from '../hooks/useSEO.js'
import './Home.css'

const guides = [
  {
    path: '/bonusguide',
    title: "Pick'em Bonus Guide",
    desc: "How to redeem welcome bonuses on pick'em apps like Underdog and PrizePicks without actually gambling.",
    Icon: Trophy,
    count: dfsPlatforms.length,
    countLabel: 'sportsbooks',
    accent: '#60a5fa',
    glow: 'rgba(96, 165, 250, 0.18)',
  },
  {
    path: '/sweeps',
    title: 'Sweeps Casinos Guide',
    desc: 'The best sweepstakes casinos with daily bonuses and welcome offers.',
    Icon: Dice,
    count: sweepsPlatforms.length,
    countLabel: 'casinos',
    accent: '#00ff88',
    glow: 'rgba(0, 255, 136, 0.18)',
  },
  {
    path: '/rips',
    title: 'Rips by Triumph',
    desc: 'Open Pokemon card packs on your phone. Use our referral link and you both get a free mystery card.',
    Icon: PackCard,
    accent: '#f97316',
    glow: 'rgba(249, 115, 22, 0.18)',
    freeLabel: 'Get a free pack',
  },
]

export default function Home() {
  useSEO({
    title: "PickemPlaybook.com | Free Money from Gambling Apps",
    description: "Guides for DFS pick'em bonuses, sweepstakes casinos, and prediction markets. Real strategies, real referral bonuses — no deposit required to get started.",
    url: '/',
  })
  return (
    <div className="home">
      <div className="container">

        <div className="home-hero">
          <div className="hero-dollars" aria-hidden="true">
            {[
              { left: '5%',  delay: '0s',    dur: '7s',  size: 28, opacity: 0.18 },
              { left: '14%', delay: '1.2s',  dur: '9s',  size: 18, opacity: 0.12 },
              { left: '23%', delay: '3.5s',  dur: '8s',  size: 34, opacity: 0.20 },
              { left: '33%', delay: '0.7s',  dur: '11s', size: 16, opacity: 0.10 },
              { left: '42%', delay: '2.1s',  dur: '7.5s',size: 26, opacity: 0.15 },
              { left: '51%', delay: '4.8s',  dur: '10s', size: 22, opacity: 0.13 },
              { left: '60%', delay: '1.6s',  dur: '8.5s',size: 32, opacity: 0.19 },
              { left: '70%', delay: '0.3s',  dur: '9.5s',size: 20, opacity: 0.11 },
              { left: '80%', delay: '3.0s',  dur: '7s',  size: 28, opacity: 0.16 },
              { left: '90%', delay: '5.5s',  dur: '10s', size: 18, opacity: 0.12 },
              { left: '9%',  delay: '6.2s',  dur: '8s',  size: 24, opacity: 0.14 },
              { left: '47%', delay: '7.0s',  dur: '11s', size: 30, opacity: 0.17 },
              { left: '75%', delay: '2.8s',  dur: '9s',  size: 14, opacity: 0.09 },
            ].map((d, i) => (
              <span
                key={i}
                className="hero-dollar"
                style={{
                  left: d.left,
                  fontSize: d.size + 'px',
                  opacity: d.opacity,
                  animationDelay: d.delay,
                  animationDuration: d.dur,
                }}
              >$</span>
            ))}
          </div>
          <h1 className="home-hero-title">Turn sportsbook promos into easy profit.</h1>
          <p className="home-hero-sub">
            Sportsbooks and casinos hand out large welcome bonuses to new users. With basic strategy, you can get the most out of them with little to no risk. Pick a guide to get started!
          </p>
        </div>

        <div className="home-guide-grid">
          {guides.map(g => (
            <Link key={g.path} to={g.path} className="home-guide-card" style={{ '--card-accent': g.accent, '--card-glow': g.glow }}>
              <div className="home-guide-card-heading">
                <g.Icon size={18} color={g.accent} />
                <h2 className="home-guide-title">{g.title}</h2>
              </div>
              <p className="home-guide-desc">{g.desc}</p>
              {g.freeLabel ? (
                <div className="home-guide-live">
                  <span className="home-guide-live-dot" />
                  <span>{g.freeLabel}</span>
                </div>
              ) : g.count != null ? (
                <div className="home-guide-live">
                  <span className="home-guide-live-dot" />
                  <span>{g.count} {g.countLabel}</span>
                </div>
              ) : null}
              <span className="home-guide-cta">Read guide →</span>
            </Link>
          ))}
        </div>

        <div className="home-about">
          <h2 className="home-about-title">About</h2>
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
