import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import DFSSection from './components/DFSSection.jsx'
import SweepsSection from './components/SweepsSection.jsx'
import CryptoSection from './components/CryptoSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <DFSSection />
        <SweepsSection />
        <CryptoSection />
      </main>
      <Footer />
    </>
  )
}
