import { useParams, Link } from 'react-router-dom'
import { CashStack, ArrowLeft } from 'react-bootstrap-icons'
import { track } from '@vercel/analytics'
import platforms, { toSlug } from '../data/sweepsPlatforms.js'
import './CasinoGuide.css'

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

  return (
    <section className="section">
      <div className="container">
        <Link to="/sweeps#sweeps-sites" className="casino-guide-back">
          <ArrowLeft size={14} /> Back to Sweeps Guide
        </Link>

        <div className="casino-guide-header">
          {platform.logo && (
            <img
              src={platform.logo}
              alt={platform.name}
              className="casino-guide-logo"
            />
          )}
          <h2 className="section-title">{platform.name} Guide</h2>
        </div>

        <p className="casino-guide-coming-soon">Coming soon.</p>

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
