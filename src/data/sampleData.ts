// ============================================================================
// Sample demo data — powers the interactive dashboard, live ticker, and stats.
// NOTE: These are illustrative sample values for a prototype-stage product,
// not readings from a live game. Every widget that uses them is labeled as such.
// ============================================================================

export type ShotDot = { x: number; y: number; made: boolean }
export type TrendPoint = { x: number; y: number; pct: string }

export type PlayerSample = {
  id: string
  jersey: string
  role: string
  stats: {
    minutes: string
    fg: number // field-goal %, animated
    distance: number // km, animated (1 decimal)
    topSpeed: number // m/s, animated (1 decimal)
  }
  trend: TrendPoint[]
  trendBadge: string
  shots: ShotDot[]
  insight: string
}

export const players: PlayerSample[] = [
  {
    id: 'p12',
    jersey: '12',
    role: 'Guard',
    stats: { minutes: '28:00', fg: 51, distance: 4.8, topSpeed: 5.2 },
    trend: [
      { x: 20, y: 58, pct: '62%' },
      { x: 113, y: 68, pct: '58%' },
      { x: 207, y: 75, pct: '55%' },
      { x: 300, y: 118, pct: '31%' },
    ],
    trendBadge: '-31 pts Q4',
    shots: [
      { x: 60, y: 55, made: true },
      { x: 130, y: 40, made: true },
      { x: 95, y: 130, made: true },
      { x: 210, y: 120, made: false },
      { x: 245, y: 65, made: true },
      { x: 180, y: 30, made: false },
    ],
    insight:
      'Shooting efficiency drops 31 points in the 4th quarter, correlating with 7+ minutes of continuous floor time. Recommend a substitution window at the 7-minute mark to protect shot quality late in games.',
  },
  {
    id: 'p23',
    jersey: '23',
    role: 'Forward',
    stats: { minutes: '31:00', fg: 58, distance: 5.6, topSpeed: 6.1 },
    trend: [
      { x: 20, y: 72, pct: '54%' },
      { x: 113, y: 60, pct: '60%' },
      { x: 207, y: 52, pct: '63%' },
      { x: 300, y: 44, pct: '67%' },
    ],
    trendBadge: '+13 pts Q4',
    shots: [
      { x: 45, y: 70, made: true },
      { x: 70, y: 95, made: true },
      { x: 110, y: 60, made: false },
      { x: 60, y: 120, made: true },
      { x: 150, y: 110, made: true },
      { x: 95, y: 45, made: true },
    ],
    insight:
      'Finishing strong into the 4th quarter — efficiency climbs 13 points late. Most makes cluster inside the paint; a designed catch-and-finish set in crunch time plays directly to this strength.',
  },
  {
    id: 'p7',
    jersey: '7',
    role: 'Center',
    stats: { minutes: '24:00', fg: 64, distance: 3.9, topSpeed: 4.4 },
    trend: [
      { x: 20, y: 48, pct: '66%' },
      { x: 113, y: 52, pct: '64%' },
      { x: 207, y: 50, pct: '65%' },
      { x: 300, y: 55, pct: '62%' },
    ],
    trendBadge: 'Steady',
    shots: [
      { x: 30, y: 85, made: true },
      { x: 50, y: 65, made: true },
      { x: 45, y: 105, made: true },
      { x: 90, y: 80, made: false },
      { x: 25, y: 70, made: true },
      { x: 70, y: 110, made: true },
    ],
    insight:
      'High-efficiency finisher operating almost entirely at the rim (64% FG). Shot chart shows no attempts beyond the paint — a reliable roll-and-finish anchor for pick-and-roll actions.',
  },
]

// Scripted "live analysis" events for the simulated feed on the home + platform pages.
export const feedEvents: { label: string; kind: 'make' | 'event' | 'alert' }[] = [
  { label: 'Shot detected — corner 3  ✓ made', kind: 'make' },
  { label: 'Possession tracked — 14.2s', kind: 'event' },
  { label: 'Fast-break opportunity flagged', kind: 'alert' },
  { label: 'Pass completed — assist logged', kind: 'event' },
  { label: 'Shot detected — mid-range  ✗ miss', kind: 'event' },
  { label: 'Spacing alert — weak-side corner open', kind: 'alert' },
  { label: 'Rebound secured — defensive', kind: 'event' },
  { label: 'Shot detected — layup  ✓ made', kind: 'make' },
  { label: 'Screen set — switch forced', kind: 'event' },
  { label: 'Fatigue flag — #12 continuous 7:00', kind: 'alert' },
]
