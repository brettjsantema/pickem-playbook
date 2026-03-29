import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import DFSSection from './components/DFSSection.jsx'
import SweepsSection from './components/SweepsSection.jsx'
import CasinoGuide from './components/CasinoGuide.jsx'
import FAQSection from './components/FAQSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bonusguide" element={<DFSSection />} />
          <Route path="/sweeps" element={<SweepsSection />} />
          <Route path="/sweeps/:casino" element={<CasinoGuide />} />
          <Route path="/faq" element={<FAQSection />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </BrowserRouter>
  )
}
