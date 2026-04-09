import { ExclamationTriangleFill, CheckCircleFill } from 'react-bootstrap-icons'
import { track } from '@vercel/analytics'
import platforms from '../data/dfsPlatforms.js'
import useSEO from '../hooks/useSEO.js'
import './Section.css'
import './DFSSection.css'

export default function DFSSection() {
  useSEO({
    title: "Pick'em Bonus Guide 2026 | PickemPlaybook.com",
    description: "How to claim and hedge DFS pick'em signup bonuses on Underdog, PrizePicks, Sleeper, and more. Step-by-step strategies to lock in guaranteed profit.",
    url: '/bonusguide',
  })
  return (
    <section className="section">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">Pick'em Bonus Guide</h2>
          <p className="section-subtitle">How to claim deposit bonuses on pick'em apps without actually gambling.</p>
        </div>

        <div className="dfs-guide">
          <div className="dfs-guide-text">
            <h3 className="dfs-guide-heading">The 4-way hedge strategy</h3>
            <p>
              Pick'em apps let you build parlays on player props. Most welcome bonuses only require a 1x playthrough, which makes them very easy to exploit with the right approach.
            </p>
            <p>
              The core idea is to bet all 4 outcomes of a 2-leg parlay on the same player and stat. For any given player and stat line, your 4 bets look like this:
            </p>
            <ul className="dfs-bet-list">
              <li><span className="dfs-bet-combo">Higher / Higher</span></li>
              <li><span className="dfs-bet-combo">Higher / Lower</span></li>
              <li><span className="dfs-bet-combo">Lower / Higher</span></li>
              <li><span className="dfs-bet-combo">Lower / Lower</span></li>
            </ul>
            <p>
              No matter what happens, exactly one of those bets wins. Bet the same amount on all four. Before placing them, click through each combination and check the multiplier. On Underdog, the max for a 2-leg is 3.5x. The closer all four multipliers are to 3.5x, the better the deal. Avoid lines where one combo pays noticeably less.
            </p>
            <div className="dfs-callout">
              <div className="dfs-callout-item">
                <CheckCircleFill size={13} className="dfs-callout-icon" />
                <span><strong>My Underdog result:</strong> I deposited $800, got a $400 bonus (50% match), and walked away with $980. The screenshot shows me betting $175 across all 4 combos and only winning $607.25, which looks like a loss, but isn't. Because of the 50% deposit match, I'm still coming out ahead. The theoretical max off an $800 deposit was around $1,050. I fell short because I didn't always get full 3.5x multipliers and I gambled a bit early on.</span>
              </div>
            </div>
            <div className="dfs-warning">
              <div className="dfs-warning-item">
                <ExclamationTriangleFill size={13} className="dfs-warning-icon" />
                <span><strong>Watch your bonus cash balance.</strong> If you have $50 in funds but $40 of it is bonus cash, placing four $12.50 bets may trigger an "out of funds" error mid-way through. Bonus cash and real cash are tracked separately. Check the breakdown before you start placing bets.</span>
              </div>
              <div className="dfs-warning-item">
                <ExclamationTriangleFill size={13} className="dfs-warning-icon" />
                <span><strong>Made a mistake mid-bet?</strong> You can cancel a placed bet by going to <em>Live &gt; Picks</em> and hitting the cancel button. You have to do it very quickly after placing the bet.</span>
              </div>
              <div className="dfs-warning-item">
                <ExclamationTriangleFill size={13} className="dfs-warning-icon" />
                <span><strong>Don't chase ongoing promos.</strong> Sites run promotions constantly, but most aren't worth it compared to the welcome offer. Do the math before putting more money in, and don't let them rope you into a bad deal.</span>
              </div>
            </div>
            <p className="dfs-tip">
              If you're new to pick'em apps, place a couple of small bets first to get a feel for the interface before going in on the full hedge.
            </p>

            <h3 className="dfs-guide-heading" style={{marginTop: '28px'}}>The 5-way hedge strategy</h3>
            <p>
              If an app like Chalkboard prevents you from placing the 4th lineup, split that bet into two 3-leg parlays. Instead of placing <span className="dfs-bet-combo">Less / Less</span> as a 2-leg, add a third player to cover both of its outcomes:
            </p>
            <ul className="dfs-bet-list">
              <li><span className="dfs-bet-combo">More / More</span></li>
              <li><span className="dfs-bet-combo">More / Less</span></li>
              <li><span className="dfs-bet-combo">Less / More</span></li>
              <li><span className="dfs-bet-combo">Less / Less / More</span> <span className="dfs-bet-note">(reduced wager)</span></li>
              <li><span className="dfs-bet-combo">Less / Less / Less</span> <span className="dfs-bet-note">(reduced wager)</span></li>
            </ul>
            <p>
              The 3-leg bets should have a reduced wager so the potential payout stays roughly equal across all five outcomes.
            </p>

            <h3 className="dfs-guide-heading" style={{marginTop: '28px'}}>PrizePicks bonus strategy</h3>
            <p>
              PrizePicks multipliers are slightly worse than Underdog, but they hand out a lot of payout boosts and free lineups through their missions system that more than make up for it. Before running the 4-way hedge, spend some time completing missions first.
            </p>
            <div className="dfs-pp-symbols">
              <div className="dfs-pp-symbol">
                <img src="/images/prizepicks/goblin.png" alt="Goblin" className="dfs-pp-symbol-img" />
                <div>
                  <strong>Goblin</strong>
                  <p>A prop that is easier than usual to hit, but pays a lower multiplier. Good for completing missions cheaply.</p>
                </div>
              </div>
              <div className="dfs-pp-symbol">
                <img src="/images/prizepicks/demon.png" alt="Demon" className="dfs-pp-symbol-img" />
                <div>
                  <strong>Demon</strong>
                  <p>A prop that is harder to hit but pays a larger multiplier. Avoid these when hedging.</p>
                </div>
              </div>
            </div>
            <p>
              Missions include things like placing a lineup for a certain sport, or placing a lineup containing a goblin or demon. Most of the introductory missions are easy and can be completed with very small bets, like a $1 2-leg parlay. They reward you with payout boosts and bonus lineups. These bonuses usually have a timer, so keep an eye on expiration dates and don't let them sit unused.
            </p>
            <p>
              Once you've run through the easy missions and stacked up plenty of boosts, apply the 4-way hedge strategy. Try to save your profit boosts for your biggest hedge. If you're using $5 or $10 bonus lineups, check the potential payout and compare it against your other bets before locking in, since bonus lineup payouts are calculated slightly differently. It'll be difficult to keep all payouts perfectly equal as you layer on the bonuses, but you'll come out ahead even if things end up a bit lopsided.
            </p>
          </div>

          <div className="dfs-guide-image">
            <img src="/images/underdogslip.png" alt="Underdog Fantasy bet slip" className="dfs-slip-img" />
          </div>
        </div>

        <h3 className="dfs-platforms-heading">Platforms</h3>
        <div className="platform-grid">
          {platforms.map(p => (
            <div key={p.name} className="card platform-card">
              <div className="platform-header">
                <img src={p.logo} alt={p.name} className="platform-logo" />
                <h3 className="platform-name">{p.name}</h3>
              </div>
              <p className="platform-tagline">{p.tagline}</p>
              <p className="platform-desc">{p.review}</p>
              <p className="platform-desc">{p.bonus}</p>
              <a href={p.link} className="btn btn-primary platform-cta" target="_blank" rel="noopener noreferrer" onClick={() => track('signup_click', { site: p.name, section: 'dfs' })}>
                {p.cta} →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
