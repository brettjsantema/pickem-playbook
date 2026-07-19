import { useState, useEffect, useRef } from 'react'
import { MONTH_YEAR } from '../data/routeMeta.js'
import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

const guides = [
  { path: '/bonusguide', label: "Pick'em Bonus Guide", sticker: '/images/stickers/sportsbooks.png' },
  { path: '/sweeps',     label: 'Sweeps Casinos Guide', sticker: '/images/stickers/sweeps.png' },
  { path: '/rips',       label: 'Rips by Triumph',      sticker: '/images/stickers/rips.png' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [guidesOpen, setGuidesOpen] = useState(false)
  const [articlesOpen, setArticlesOpen] = useState(false)
  const { pathname } = useLocation()
  const isRips = pathname === '/rips'
  const navRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setGuidesOpen(false)
        setArticlesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function closeAll() {
    setMenuOpen(false)
    setGuidesOpen(false)
    setArticlesOpen(false)
  }

  const guideActive = guides.some(g => pathname.startsWith(g.path))

  return (
    <nav className={`nav${isRips ? ' nav--orange' : ''}`} ref={navRef}>
      <div className="container nav-inner">

        <Link to="/" className="nav-logo" onClick={closeAll}>
          <img src="/images/stickers/cash.png" alt="" width={28} height={28} />
          Pick&apos;em Playbook
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
              onClick={() => { setGuidesOpen(o => !o); setArticlesOpen(false) }}
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
                      <img src={g.sticker} alt="" className="nav-dropdown-sticker" width={18} height={18} />
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
              onClick={() => { setArticlesOpen(o => !o); setGuidesOpen(false) }}
            >
              Articles <span className={`nav-chevron ${articlesOpen ? 'open' : ''}`}>▾</span>
            </button>
            {articlesOpen && (
              <ul className="nav-dropdown">
                <li>
                  <Link
                    to="/articles/best-online-casinos-2026"
                    className={`nav-dropdown-item ${pathname === '/articles/best-online-casinos-2026' ? 'nav-dropdown-item--active' : ''}`}
                    onClick={closeAll}
                  >
                    {`Best Online Casinos ${MONTH_YEAR}`}
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
              <img src="/images/stickers/reddit.png" alt="Reddit" width={34} height={34} />
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
              <img src="/images/stickers/discord.png" alt="Discord" width={33} height={33} />
            </a>
          </li>
        </ul>

      </div>
    </nav>
  )
}
