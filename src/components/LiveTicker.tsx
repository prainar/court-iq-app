import { useEffect, useRef, useState } from 'react'
import { feedEvents } from '../data/sampleData'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

type FeedRow = { id: number; label: string; kind: string }

/**
 * Simulated "live analysis" feed. Reveals scripted sample events on an interval,
 * newest on top, capped to `max` rows. Clearly labeled as sample data.
 * Under reduced-motion it renders a static, pre-filled list and never ticks.
 */
export default function LiveTicker({ max = 5 }: { max?: number }) {
  const reduced = prefersReducedMotion()
  const counter = useRef(0)

  const seed = (): FeedRow[] =>
    feedEvents.slice(0, max).map((e) => ({ id: counter.current++, ...e }))

  const [rows, setRows] = useState<FeedRow[]>(seed)

  useEffect(() => {
    if (reduced) return
    let index = 0
    const interval = setInterval(() => {
      index = (index + 1) % feedEvents.length
      const next = feedEvents[index]
      setRows((prev) => [{ id: counter.current++, ...next }, ...prev].slice(0, max))
    }, 2200)
    return () => clearInterval(interval)
  }, [reduced, max])

  return (
    <div className="ticker">
      <div className="ticker-head">
        <span className="dash-live">
          <span className="dash-live-dot"></span>
          {reduced ? 'FEED' : 'LIVE'}
        </span>
        <span className="ticker-title">Analysis feed</span>
        <span className="ticker-tag">Sample</span>
      </div>
      <ul className="ticker-list">
        {rows.map((row) => (
          <li key={row.id} className={`ticker-item kind-${row.kind}`}>
            <span className="ticker-bullet"></span>
            {row.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
