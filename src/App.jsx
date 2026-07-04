import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import DFSSection from './components/DFSSection.jsx'
import SweepsSection from './components/SweepsSection.jsx'
import RipsSection from './components/RipsSection.jsx'
import CasinoGuide from './components/CasinoGuide.jsx'
import B2Guide from './components/B2Guide.jsx'
import FAQSection from './components/FAQSection.jsx'
import ArticleTopCasinos from './components/ArticleTopCasinos.jsx'
import Footer from './components/Footer.jsx'
import useSEO from './hooks/useSEO.js'
import { getRouteMeta } from './data/routeMeta.js'
import './components/Section.css'

function NotFound() {
  const { pathname } = useLocation()
  useSEO(getRouteMeta(pathname))
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Page not found</h1>
          <p className="section-subtitle">That page doesn't exist. <Link to="/">Head back home</Link>.</p>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bonusguide" element={<DFSSection />} />
          <Route path="/sweeps" element={<SweepsSection />} />
          <Route path="/rips" element={<RipsSection />} />
          <Route path="/sweeps/b2-casinos" element={<B2Guide />} />
          <Route path="/sweeps/:casino" element={<CasinoGuide />} />
          <Route path="/faq" element={<FAQSection />} />
          <Route path="/articles/best-online-casinos-2026" element={<ArticleTopCasinos />} />
          <Route path="/articles/top-online-casinos-2026" element={<ArticleTopCasinos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </>
  )
}
