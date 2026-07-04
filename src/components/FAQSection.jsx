import useSEO from '../hooks/useSEO.js'
import { getRouteMeta } from '../data/routeMeta.js'
import './Section.css'

export default function FAQSection() {
  useSEO(getRouteMeta('/faq'))
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">FAQ</h1>
          <p className="section-subtitle">Coming soon.</p>
        </div>
      </div>
    </section>
  )
}
