import { useState } from 'react'
import './Nav.css'

const links = [
  { key: 'sportsbooks', label: 'Sportsbooks' },
  { key: 'sweeps', label: 'Sweepstakes' },
  { key: 'crypto', label: 'Prediction Markets' },
]

export default function Nav({ active, setActive }) {
  const [open, setOpen] = useState(false)

  function handleClick(key) {
    setActive(active === key ? null : key)
    setOpen(false)
  }

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <button className="nav-logo" onClick={() => { setActive(null); setOpen(false) }}>
          2026 Pick&apos;em Playbook
        </button>

        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.key}>
              <button
                className={`nav-link ${active === l.key ? 'nav-link--active' : ''}`}
                onClick={() => handleClick(l.key)}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
