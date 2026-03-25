import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import DFSSection from './components/DFSSection.jsx'
import SweepsSection from './components/SweepsSection.jsx'
import CryptoSection from './components/CryptoSection.jsx'
import FAQSection from './components/FAQSection.jsx'
import Footer from './components/Footer.jsx'

const sectionMap = {
  sportsbooks: DFSSection,
  sweeps: SweepsSection,
  crypto: CryptoSection,
  faq: FAQSection,
}

export default function App() {
  const [active, setActive] = useState(null)

  const SectionComponent = sectionMap[active] || null

  return (
    <>
      <Nav active={active} setActive={setActive} />
      <main>
        {SectionComponent
          ? <SectionComponent />
          : <Home setActive={setActive} />
        }
      </main>
      <Footer />
      <Analytics />
    </>
  )
}
