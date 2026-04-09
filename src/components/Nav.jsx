import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CashStack } from 'react-bootstrap-icons'
import { Trophy, Dice } from './Icons.jsx'
import './Nav.css'

const guides = [
  { path: '/bonusguide', label: "Pick'em Bonus Guide", Icon: Trophy },
  { path: '/sweeps',     label: 'Sweeps Casinos Guide', Icon: Dice },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [guidesOpen, setGuidesOpen] = useState(false)
  const [articlesOpen, setArticlesOpen] = useState(false)
  const { pathname } = useLocation()

  function closeAll() {
    setMenuOpen(false)
    setGuidesOpen(false)
    setArticlesOpen(false)
  }

  const guideActive = guides.some(g => pathname.startsWith(g.path))

  return (
    <nav className="nav">
      <div className="container nav-inner">

        <Link to="/" className="nav-logo" onClick={closeAll}>
          <CashStack size={18} color="#22c55e" />
          2026 Pick&apos;em Playbook
        </Link>

        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link
              to="/"
              className={`nav-link ${pathname === '/' ? 'nav-link--active' : ''}`}
              onClick={closeAll}
            >
              About
            </Link>
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
                  <li key={g.path}>
                    <Link
                      to={g.path}
                      className={`nav-dropdown-item ${pathname === g.path ? 'nav-dropdown-item--active' : ''}`}
                      onClick={closeAll}
                    >
                      <g.Icon size={15} color="currentColor" />
                      {g.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="nav-dropdown-wrap">
            <button
              className={`nav-link nav-link--dropdown ${pathname.startsWith('/articles') ? 'nav-link--active' : ''}`}
              onClick={() => setArticlesOpen(!articlesOpen)}
            >
              Articles <span className={`nav-chevron ${articlesOpen ? 'open' : ''}`}>▾</span>
            </button>
            {articlesOpen && (
              <ul className="nav-dropdown">
                <li>
                  <Link
                    to="/articles/top-online-casinos-2026"
                    className={`nav-dropdown-item ${pathname === '/articles/top-online-casinos-2026' ? 'nav-dropdown-item--active' : ''}`}
                    onClick={closeAll}
                  >
                    Best Online Casinos April 2026
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/faq"
              className={`nav-link ${pathname === '/faq' ? 'nav-link--active' : ''}`}
              onClick={closeAll}
            >
              FAQ
            </Link>
          </li>
          <li>
            <a
              href="https://www.reddit.com/r/PickemPlaybook/"
              className="nav-reddit-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reddit community"
            >
              <img src="/images/reddit.png" alt="Reddit" width={34} height={34} />
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/pgt4a3hH2"
              className="nav-discord-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord community"
            >
              <img src="/images/discord.png" alt="Discord" width={33} height={33} />
            </a>
          </li>
        </ul>

      </div>
    </nav>
  )
}
