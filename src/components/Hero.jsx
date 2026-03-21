import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="badge badge-green">Free Guides + Referral Bonuses</span>
          <h1 className="hero-title">
            Win More.<br />
            <span className="hero-accent">Play Smarter.</span>
          </h1>
          <p className="hero-text">
            Real guides to DFS picks, sweepstakes casinos, and crypto prediction markets —
            with the best signup bonuses available. No filler, no fluff.
          </p>
          <div className="hero-ctas">
            <a href="#dfs" className="btn btn-primary">Start with DFS</a>
            <a href="#sweeps" className="btn btn-outline">Explore Sweeps</a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">3</span>
            <span className="hero-stat-label">Categories</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">10+</span>
            <span className="hero-stat-label">Platforms Covered</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">$$$</span>
            <span className="hero-stat-label">Signup Bonuses</span>
          </div>
        </div>
      </div>
    </section>
  )
}
