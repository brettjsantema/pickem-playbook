import { useState } from 'react'
import { CashStack } from 'react-bootstrap-icons'
import { Trophy, Dice, TrendingUp } from './Icons.jsx'
import './Nav.css'

const guides = [
  { key: 'sportsbooks', label: "Pick'em Bonus Guide", Icon: Trophy },
  { key: 'sweeps', label: 'Sweeps Casinos Guide', Icon: Dice },
  { key: 'crypto', label: 'Prediction Markets Overview', Icon: TrendingUp },
]

export default function Nav({ active, setActive }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [guidesOpen, setGuidesOpen] = useState(false)

  function nav(key) {
    setActive(key)
    setMenuOpen(false)
    setGuidesOpen(false)
  }

  const guideActive = guides.some(g => g.key === active)

  return (
    <nav className="nav">
      <div className="container nav-inner">

        <button className="nav-logo" onClick={() => nav(null)}>
          <CashStack size={18} color="#22c55e" />
          2026 Pick&apos;em Playbook
        </button>

        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <button
              className={`nav-link ${!active || active === 'about' ? 'nav-link--active' : ''}`}
              onClick={() => nav(null)}
            >
              About
            </button>
          </li>
          <li className="nav-dropdown-wrap">
            <button
              className={`nav-link nav-link--dropdown ${guideActive ? 'nav-link--active' : ''}`}
              onClick={() => setGuidesOpen(!guidesOpen)}
            >
              Guides <span className={`nav-chevron ${guidesOpen ? 'open' : ''}`}>▾</span>
            </button>
            {guidesOpen && (
              <ul className="nav-dropdown">
                {guides.map(g => (
                  <li key={g.key}>
                    <button
                      className={`nav-dropdown-item ${active === g.key ? 'nav-dropdown-item--active' : ''}`}
                      onClick={() => nav(g.key)}
                    >
                      <g.Icon size={15} color="currentColor" />
                      {g.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <button
              className={`nav-link ${active === 'faq' ? 'nav-link--active' : ''}`}
              onClick={() => nav('faq')}
            >
              FAQ
            </button>
          </li>
        </ul>

      </div>
    </nav>
  )
}
