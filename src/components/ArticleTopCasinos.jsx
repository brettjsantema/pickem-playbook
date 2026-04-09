import { Link } from 'react-router-dom'
import { CashStack } from 'react-bootstrap-icons'
import { track } from '@vercel/analytics'
import './ArticleTopCasinos.css'

function getUpdatedText() {
  const now = new Date()
  now.setDate(now.getDate() - 1)
  const day = now.getDate()
  const month = now.getMonth()
  const year = now.getFullYear()
  const seed = day * 31 + month * 373 + year
  const minutes = seed % 241 // 0-240 min span = 7:00am to 11:00am
  const totalMin = 7 * 60 + minutes
  const hour = Math.floor(totalMin / 60)
  const min = (totalMin % 60).toString().padStart(2, '0')
  const hour12 = hour > 12 ? hour - 12 : hour
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  return `Updated ${months[month]} ${day}, ${year} at ${hour12}:${min} ${ampm} CST`
}

const tiers = [
  {
    tier: 'S',
    label: 'Best Overall',
    entries: [
      {
        name: 'Crown Coins',
        logo: '/images/logos/crowncoins.png',
        summary: 'Best all-around sweepstakes casino. Consistent daily bonuses, strong welcome offers, a real VIP program, and low 1x playthrough requirements. Easy to cash out.',
        link: 'https://crowncoinscasino.com/?utm_campaign=9067a285-018f-4af3-a128-df01d53d1767&utm_source=friends',
      },
      {
        name: 'Stake.us',
        logo: '/images/logos/stake.jpg',
        summary: 'Top signup bonus -- 25 SC free with no purchase required. Backed by one of the biggest crypto gambling brands in the world. Huge game library and reliable payouts.',
        link: 'https://stake.us/?c=BbCSxQls',
      },
      {
        name: 'Modo',
        logo: '/images/logos/modo.png',
        summary: 'Best ongoing promotions of any sweeps casino. Frequent limited-time offers and reload bonuses keep the SC flowing well after signup.',
        link: 'https://modo.us?referralCode=T5WNX6',
      },
    ],
  },
  {
    tier: 'A',
    label: 'Highly Recommended',
    entries: [
      {
        name: 'LuckyHands',
        logo: '/images/logos/luckyhands.jpg',
        summary: '1x playthrough, fast 1-day redemptions, and a minimum redeem of just 50 SC. One of the easiest sites to actually cash out on.',
        link: 'https://luckyhands.com/sign-up?code=e3a41524-0a48-4d3b-b2bd-29c477dc7cc1',
      },
      {
        name: 'McLuck',
        logo: '/images/logos/mcluck.png',
        summary: 'Solid welcome package and a clean interface. Reliable daily SC bonuses and a good game selection for grinding playthrough.',
        link: 'https://www.mcluck.com/lp/raf?r=81a258e5%2F2541552073',
      },
      {
        name: 'Pulsz',
        logo: '/images/logos/pulsz.png',
        summary: 'One of the more established names in sweepstakes. Generous welcome offer and a wide variety of slots and table games.',
        link: 'https://www.pulsz.com/?invited_by=1auegr',
      },
      {
        name: 'WOW Vegas',
        logo: '/images/logos/wowvegas.svg',
        summary: 'Strong welcome bonus and a large game library. Daily login bonuses are consistent and the site is straightforward to navigate.',
        link: 'https://www.wowvegas.com/?raf=11961191',
      },
    ],
  },
  {
    tier: 'B',
    label: 'Worth Signing Up',
    entries: [
      {
        name: 'Spree',
        logo: '/images/logos/spree.jpg',
        summary: 'Clean and modern interface with daily free SC. Good for beginners. Straightforward playthrough and redemption process.',
        link: 'https://spree.com/?r=2084566',
      },
      {
        name: 'PlayFame',
        logo: '/images/logos/playfame.png',
        summary: 'Newer site with competitive welcome offers. Growing game library and a simple layout. Worth grabbing the signup bonus.',
        link: 'https://www.playfame.com/lp/raf?r=51c24eac%2F2547101221',
      },
      {
        name: 'HelloMillions',
        logo: '/images/logos/hellomillions.webp',
        summary: 'Decent daily bonus and welcome offer. Not the flashiest site, but reliable for stacking SC from a free daily claim.',
        link: 'https://www.hellomillions.com/lp/raf?r=5459cd73%2F2553383889',
      },
      {
        name: 'Fortune Coins',
        logo: '/images/logos/fortunecoins.png',
        summary: 'Focused on slots with a good free coin offering on signup. Consistent daily bonuses and a clean redemption process.',
        link: 'https://www.fortunecoins.com/signup/da50747e-94a0-4981-8bee-0964a8b3dd0b',
      },
      {
        name: 'Sweep Jungle',
        logo: '/images/logos/sweepjungle.webp',
        summary: 'Worth signing up for the welcome offer. Daily SC available. Game selection is decent for standard playthrough grinding.',
        link: 'https://sweepjungle.com/?ref=7B5943DFF86DFC46&modal=register',
      },
    ],
  },
  {
    tier: 'C',
    label: 'Sign Up, Grab the Bonus',
    entries: [
      {
        name: 'Jackpota',
        logo: '/images/logos/jackpota.svg',
        summary: 'Good welcome offer but limited game selection makes playthrough a grind. Worth the signup bonus, just be patient.',
        link: 'https://www.jackpota.com/?r=424322914',
      },
      {
        name: 'SpinQuest',
        logo: '/images/logos/spinquest.svg',
        summary: '5x playthrough requirement is higher than most. Claim the welcome bonus but manage expectations on how quickly you can redeem.',
        link: 'https://spinquest.com/?u=DNSH33S',
      },
      {
        name: 'Sweet Sweeps',
        logo: '/images/logos/sweetsweeps.webp',
        summary: '2x playthrough and fees on purchases and redemptions. Still profitable on the free bonuses alone -- just avoid buying coins here.',
        link: 'https://sweetsweeps.com?referralCode=REFMTk1MjEy',
      },
      {
        name: 'Zula',
        logo: '/images/logos/zula.png',
        summary: 'Modest daily bonus and a standard welcome offer. Nothing exceptional, but signing up costs nothing and adds another daily SC source.',
        link: 'https://www.zulacasino.com/signup/fb2cbdba-e274-4a9e-ade6-591c231c556a',
      },
      {
        name: 'Sportzino',
        logo: '/images/logos/sportzino.png',
        summary: 'Sports-themed sweepstakes with a decent signup offer. Good if you want variety. Daily bonuses are on the smaller side.',
        link: 'https://sportzino.com/signup/bc5795c2-7eff-4cb1-9243-13dec997e95a',
      },
      {
        name: 'Lonestar',
        logo: '/images/logos/lonestar.png',
        summary: 'Regional sweepstakes with a simple layout. Free daily SC and a basic welcome offer. Worth grabbing as part of a full signup sweep.',
        link: 'https://lonestarcasino.com/refer/2452423',
      },
    ],
  },
]

const tierColors = {
  S: '#ffd700',
  A: '#00ff88',
  B: '#60a5fa',
  C: '#a0a0b0',
}

export default function ArticleTopCasinos() {
  return (
    <div className="article-wrap container">
      <div className="article-meta">
        <span className="article-date">{getUpdatedText()}</span>
      </div>

      <h1 className="article-title">Best Online Casinos April 2026</h1>

      <p className="article-lead">
        Sweepstakes casinos let you play real casino games and win real cash prizes without spending a dime. Every site on this list gives you free Sweep Coins just for signing up, with more available through daily login bonuses. There is no gambling required -- you can play entirely on free coins, meet the playthrough requirement, and redeem for real money.
      </p>
      <p className="article-lead">
        The tier rankings below are based on how easy each site is to actually profit from: welcome offer value, daily bonus consistency, playthrough requirements, redemption speed, and any fees. S-tier sites are the ones worth prioritizing. C-tier sites still pay out -- they just have more friction. Sign up for all of them and farm the daily bonuses across the board.
      </p>
      <p className="article-lead">
        <Link to="/sweeps" className="article-inline-link">Check out our full guide on sweeps casinos →</Link>
      </p>

      <div className="article-table-wrap">
        {tiers.map(group => (
          <div key={group.tier} className="article-tier-group">
            <div className="article-tier-label" style={{ '--tier-color': tierColors[group.tier] }}>
              <span className="article-tier-badge">{group.tier}-tier</span>
            </div>
            {group.entries.map(e => (
              <div key={e.name} className="article-row">
                <div className="article-row-logo-wrap">
                  <img src={e.logo} alt={e.name} className="article-row-logo" />
                </div>
                <div className="article-row-name">{e.name}</div>
                <div className="article-row-summary">{e.summary}</div>
                <a
                  href={e.link}
                  className="btn btn-primary article-row-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('signup_click', { site: e.name, section: 'article-top-casinos' })}
                >
                  <CashStack size={13} /> Sign Up
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
