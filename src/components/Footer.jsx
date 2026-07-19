import { BUILD_DATE } from '../data/routeMeta.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-brand">2026 Pick&apos;em Playbook</p>
        <p className="footer-disclaimer" suppressHydrationWarning>
          Updated {BUILD_DATE}.
        </p>
      </div>
    </footer>
  )
}
