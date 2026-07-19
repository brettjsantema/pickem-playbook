import { useEffect } from 'react'
import { Routes, Route, Link, useLocation, useParams } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import goLinks from './data/goLinks.js'
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

function GoRedirect() {
  const { slug } = useParams()
  const target = goLinks[slug]
  useSEO(getRouteMeta(`/go/${slug || ''}`))
  useEffect(() => {
    if (!target) return
    // brief delay so the analytics pageview beacon fires before the tab navigates away
    const t = setTimeout(() => window.location.replace(target), 400)
    return () => clearTimeout(t)
  }, [target])
  if (!target) return <NotFound />
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Sending you over…</h1>
          <p className="section-subtitle">If nothing happens, <a href={target} rel="nofollow sponsored noopener noreferrer">tap here</a>.</p>
        </div>
      </div>
    </section>
  )
}

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
          <Route path="/go/:slug" element={<GoRedirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </>
  )
}
