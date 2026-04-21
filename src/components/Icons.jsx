// Option 1 — Dollar sign in a circle
export function CashStack({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v12M9 9.5a3 3 0 0 1 6 0c0 1.5-1 2.5-3 3s-3 1.5-3 3a3 3 0 0 0 6 0" />
    </svg>
  )
}

// Option 2 — Banknote / bill
export function CashOption2({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  )
}

// Option 3 — Coins stacked
export function CashOption3({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="9" cy="7" rx="7" ry="3" />
      <path d="M2 7v5c0 1.66 3.13 3 7 3s7-1.34 7-3V7" />
      <path d="M2 12v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" />
      <path d="M16 8.5c2.76.35 6 1.52 6 3.5v5c0 1.66-3.13 3-7 3" />
      <path d="M22 8.5V12" />
    </svg>
  )
}

// Option 4 — Wallet
export function CashOption4({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
      <path d="M16 3H8L4 7h16l-4-4Z" />
      <circle cx="17" cy="14" r="1.5" fill={color} stroke="none" />
    </svg>
  )
}

// Option 5 — Trophy / award
export function CashOption5({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 21h8M12 17v4" />
      <path d="M7 4H4v5a4 4 0 0 0 4 4M17 4h3v5a4 4 0 0 1-4 4" />
      <path d="M7 4h10v7a5 5 0 0 1-10 0V4Z" />
    </svg>
  )
}

export function Trophy({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H3V4h3M18 9h3V4h-3" />
      <path d="M6 4h12v7a6 6 0 0 1-12 0V4Z" />
      <path d="M12 17v4M8 21h8" />
    </svg>
  )
}

export function Dice({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <circle cx="8" cy="8" r="1.2" fill={color} stroke="none" />
      <circle cx="16" cy="8" r="1.2" fill={color} stroke="none" />
      <circle cx="8" cy="16" r="1.2" fill={color} stroke="none" />
      <circle cx="16" cy="16" r="1.2" fill={color} stroke="none" />
      <circle cx="12" cy="12" r="1.2" fill={color} stroke="none" />
    </svg>
  )
}

export function PackCard({ size = 20, color = 'currentColor' }) {
  // Card pack with zig-zag tear edge at the top
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      {/* Pack body */}
      <path d="M4 7h16v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" />
      {/* Zig-zag tear across the top */}
      <polyline points="4,7 6.5,4 9,7 11.5,4 14,7 16.5,4 20,7" />
      {/* Star/shine on pack face */}
      <path d="M12 11v4M10 13h4" strokeWidth="1.5" />
    </svg>
  )
}

export function TrendingUp({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}
