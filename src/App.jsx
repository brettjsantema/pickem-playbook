import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import DFSSection from './components/DFSSection.jsx'
import SweepsSection from './components/SweepsSection.jsx'
import CryptoSection from './components/CryptoSection.jsx'
import Footer from './components/Footer.jsx'

const sections = {
  sportsbooks: DFSSection,
  sweeps: SweepsSection,
  crypto: CryptoSection,
}

export default function App() {
  const [active, setActive] = useState(null)

  const SectionComponent = active ? sections[active] : null

  return (
    <>
      <Nav active={active} setActive={setActive} />
      <main>
        <Home active={active} setActive={setActive} />
        {SectionComponent && <SectionComponent />}
      </main>
      <Footer />
    </>
  )
}
