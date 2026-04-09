import { Link } from 'react-router-dom'
import { Trophy, Dice } from './Icons.jsx'
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
  },
  {
    path: '/sweeps',
    title: 'Sweeps Casinos Guide',
    desc: 'The best sweepstakes casinos with daily bonuses and welcome offers.',
    Icon: Dice,
    count: sweepsPlatforms.length,
    countLabel: 'casinos',
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
          <h1 className="home-hero-title">Free money from gambling apps.</h1>
          <div className="home-hero-row">
            <img src="/images/cash1.png" alt="" className="hero-cash hero-cash--left" />
            <p className="home-hero-sub">
              Sportsbooks and casinos hand out large welcome bonuses to new users. With basic strategy, you can get the most out of them with little to no risk. Pick a guide to get started!
            </p>
            <img src="/images/cash3.png" alt="" className="hero-cash hero-cash--right" />
          </div>
        </div>

        <div className="home-guide-grid">
          {guides.map(g => (
            <Link key={g.path} to={g.path} className="home-guide-card">
              <div className="home-guide-card-heading">
                <g.Icon size={18} color="var(--accent)" />
                <h2 className="home-guide-title">{g.title}</h2>
              </div>
              <p className="home-guide-desc">{g.desc}</p>
              <div className="home-guide-live">
                <span className="home-guide-live-dot" />
                <span>{g.count} {g.countLabel}</span>
              </div>
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
