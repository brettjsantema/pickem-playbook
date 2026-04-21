import useSEO from '../hooks/useSEO.js'
import './Section.css'
import './RipsSection.css'

const REFERRAL = 'https://rips.onelink.me/Wj0m/e5vx6k8s'

export default function RipsSection() {
  useSEO({
    title: 'Rips by Triumph Referral & Guide | PickemPlaybook.com',
    description: 'Open Pokemon card packs on your phone with Rips by Triumph. Use our referral link and you both get a free mystery card — cash out winnings to PayPal, Venmo, or bank.',
    url: '/rips',
  })

  return (
    <section className="section rips-section">
      <div className="container">

        <div className="section-header">
          <div className="rips-logo-wrap">
            <img src="/images/logos/ripsbytriumph.webp" alt="Rips by Triumph" className="rips-logo" />
          </div>
          <h2 className="section-title rips-title">Rips by Triumph</h2>
          <p className="section-subtitle">Open Pokemon card packs on your phone — sell your pulls instantly or have them shipped to you.</p>
        </div>

        {/* Referral promo */}
        <div className="rips-promo">
          <div className="rips-promo-img-wrap">
            <img src="/images/triumph_freepack.webp" alt="Free pack referral promo" className="rips-promo-img" />
          </div>
          <div className="rips-promo-body">
            <span className="rips-pill">Free Mystery Card</span>
            <h3 className="rips-promo-heading">Use our referral link — you both get a free mystery card</h3>
            <p className="rips-promo-desc">Sign up through our link and Rips drops a free mystery card in both of our accounts. Cards are revealed in the app, and once revealed you can either cash out immediately or have them shipped to you.</p>
            <a href={REFERRAL} className="rips-cta-btn" target="_blank" rel="noopener noreferrer">
              Get Free Card → rips.onelink.me
            </a>
          </div>
        </div>

        {/* How it works */}
        <div className="rips-how">
          <h3 className="rips-section-heading">How It Works</h3>
          <div className="rips-steps">
            <div className="rips-step">
              <span className="rips-step-num">1</span>
              <div>
                <strong>Download the app</strong>
                <p>Rips by Triumph is available on iOS. Sign up using our referral link and a free mystery card lands in your account.</p>
              </div>
            </div>
            <div className="rips-step">
              <span className="rips-step-num">2</span>
              <div>
                <strong>Open card packs</strong>
                <p>Buy and open Pokemon card packs live in the app. Each pack rip is shown in real time — you see exactly what you pull.</p>
              </div>
            </div>
            <div className="rips-step">
              <span className="rips-step-num">3</span>
              <div>
                <strong>Cash out or ship</strong>
                <p>Sell your cards instantly back to Rips at market rate, or have the physical cards shipped to your door. Earnings withdraw to PayPal, Venmo, or your bank account.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rips-bottom-cta">
          <a href={REFERRAL} className="rips-cta-btn rips-cta-btn--large" target="_blank" rel="noopener noreferrer">
            Download Rips &amp; Claim Free Card →
          </a>
          <p className="rips-cta-note">iOS only · No purchase required to claim referral card</p>
        </div>

      </div>
    </section>
  )
}
