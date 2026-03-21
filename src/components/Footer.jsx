import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">🏆 2026 Pick&apos;em Playbook</span>
          <p>Real guides for DFS, sweepstakes casinos, and crypto prediction markets.</p>
        </div>

        <nav className="footer-links">
          <a href="#dfs">DFS Picks</a>
          <a href="#sweeps">Sweepstakes</a>
          <a href="#crypto">Crypto Markets</a>
        </nav>

        <p className="footer-disclaimer">
          This site contains referral links. We may earn a commission when you sign up through our links, at no extra cost to you. Sweepstakes casinos and prediction markets may not be available in all jurisdictions. Always play responsibly.
        </p>
      </div>
    </footer>
  )
}
