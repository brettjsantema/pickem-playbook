export function toSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

const platforms = [
  { name: 'Stake.us',      logo: '/images/logos/stake.jpg',         welcomeText: '25 SC Free on Signup', link: 'https://stake.us/?c=BbCSxQls' },
  { name: 'Crown Coins',   logo: '/images/logos/crowncoins.png',    welcomeText: 'Welcome Offers',       link: 'https://crowncoinscasino.com/?utm_campaign=9067a285-018f-4af3-a128-df01d53d1767&utm_source=friends', hasGuide: true },
  { name: 'Modo',          logo: '/images/logos/modo.png',          welcomeText: 'Welcome Offers',       link: 'https://modo.us?referralCode=T5WNX6' },
  { name: 'LuckyHands',    logo: '/images/logos/luckyhands.jpg',    welcomeText: 'Welcome Offers',       link: 'https://luckyhands.com/sign-up?code=e3a41524-0a48-4d3b-b2bd-29c477dc7cc1', hasGuide: true },
  { name: 'McLuck',        logo: '/images/logos/mcluck.png',        welcomeText: 'Welcome Offers',       link: 'https://www.mcluck.com/lp/raf?r=81a258e5%2F2541552073', b2Guide: true, isNew: true },
  { name: 'Spree',         logo: '/images/logos/spree.jpg',         welcomeText: 'Welcome Offers',       link: 'https://spree.com/?r=2084566' },
  { name: 'Pulsz',         logo: '/images/logos/pulsz.png',         welcomeText: 'Welcome Offers',       link: 'https://www.pulsz.com/?invited_by=1auegr' },
  { name: 'Pulsz Bingo',   logo: '/images/logos/pulszbingo.png',    welcomeText: 'Welcome Offers',       link: 'https://www.pulszbingo.com/?invited_by=grhbze' },
  { name: 'PlayFame',      logo: '/images/logos/playfame.png',      welcomeText: 'Welcome Offers',       link: 'https://www.playfame.com/lp/raf?r=51c24eac%2F2547101221', b2Guide: true },
  { name: 'Jackpota',      logo: '/images/logos/jackpota.svg',      welcomeText: 'Welcome Offers',       link: 'https://www.jackpota.com/?r=424322914',   warnings: ['Lacks easy games'] },
  { name: 'MegaBonanza',   logo: '/images/logos/megabonanza.webp',  welcomeText: 'Welcome Offers',       link: 'https://www.megabonanza.com/?r=415866674' },
  { name: 'HelloMillions', logo: '/images/logos/hellomillions.webp',welcomeText: 'Welcome Offers',       link: 'https://www.hellomillions.com/lp/raf?r=5459cd73%2F2553383889', b2Guide: true },
  { name: 'WOW Vegas',     logo: '/images/logos/wowvegas.svg',      welcomeText: 'Welcome Offers',       link: 'https://www.wowvegas.com/?raf=11961191' },
  { name: 'SpinQuest',     logo: '/images/logos/spinquest.svg',     welcomeText: 'Welcome Offers',       link: 'https://spinquest.com/?u=DNSH33S',        warnings: ['5x playthrough'] },
  { name: 'Lonestar',      logo: '/images/logos/lonestar.png',      welcomeText: 'Welcome Offers',       link: 'https://lonestarcasino.com/refer/2452423' },
  { name: 'Realprize',     logo: '/images/logos/realprize.jpg',     welcomeText: 'Welcome Offers',       link: 'https://realprize.com/refer/2185107' },
  { name: 'MyPrize',       logo: '/images/logos/myprize.png',       welcomeText: 'Welcome Offers',       link: 'https://myprize.us/invite/player4983577036037' },
  { name: 'Shuffle',       logo: '/images/logos/shuffle.png',       welcomeText: 'Welcome Offers',       link: 'https://shuffle.us?r=gZV4mOD7z9' },
  { name: 'SpinBlitz',     logo: '/images/logos/spinblitz.png',     welcomeText: 'Welcome Offers',       link: 'https://www.spinblitz.com/lp/raf?r=3d210d80%2F2565575372', b2Guide: true },
  { name: 'Sweet Sweeps',  logo: '/images/logos/sweetsweeps.webp', welcomeText: 'Welcome Offers',       link: 'https://sweetsweeps.com?referralCode=REFMTk1MjEy', warnings: ['2x playthrough', '4-8% fee on purchases', '1.5% fee on redemptions'] },
  { name: 'Sweep Jungle',  logo: '/images/logos/sweepjungle.webp', welcomeText: 'Welcome Offers',       link: 'https://sweepjungle.com/?ref=7B5943DFF86DFC46&modal=register' },
  { name: 'Fortune Coins', logo: '/images/logos/fortunecoins.png', welcomeText: 'Welcome Offers',       link: 'https://www.fortunecoins.com/signup/da50747e-94a0-4981-8bee-0964a8b3dd0b' },
  { name: 'Sportzino',     logo: '/images/logos/sportzino.png',    welcomeText: 'Welcome Offers',       link: 'https://sportzino.com/signup/bc5795c2-7eff-4cb1-9243-13dec997e95a' },
  { name: 'Zula',          logo: '/images/logos/zula.png',         welcomeText: 'Welcome Offers',       link: 'https://www.zulacasino.com/signup/fb2cbdba-e274-4a9e-ade6-591c231c556a' },
  { name: 'Ace',           logo: '/images/logos/ace.webp',          welcomeText: 'Welcome Offers',       link: 'https://www.ace.com/?r=dbbfef82%2F88428884' },
  { name: 'Spindoo',       logo: '/images/logos/spindoo.png',      welcomeText: 'Welcome Offers',       link: 'https://www.spindoo.us/?r=33601398' },
  { name: 'Dara',          logo: '/images/logos/dara.jpg',         welcomeText: 'Welcome Offers',       link: 'https://daracasino.com/signup?refferalCode=j4Es0nKdgj' },
  { name: 'Rolla',         logo: '/images/logos/rolla.png',        welcomeText: 'Welcome Offers',       link: 'https://www.rolla.com/?raf=1401515' },
]

export default platforms
