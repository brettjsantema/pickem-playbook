import { useState } from 'react'
import './Nav.css'

const links = [
  { label: 'DFS Picks', href: '#dfs' },
  { label: 'Sweepstakes', href: '#sweeps' },
  { label: 'Crypto Markets', href: '#crypto' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#" className="nav-logo">
          <span className="nav-logo-icon">🏆</span>
          <span>2026 Pick&apos;em Playbook</span>
        </a>

        <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#" className="btn btn-primary nav-cta">Get Started</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
