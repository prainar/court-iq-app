import { useState } from 'react'
import useInView from '../hooks/useInView'
import useCountUp from '../hooks/useCountUp'
import { players } from '../data/sampleData'

export default function InteractiveDashboard() {
  const [activeId, setActiveId] = useState(players[0].id)
  const [containerRef, inView] = useInView(0.2)
  const player = players.find((p) => p.id === activeId) ?? players[0]

  // Count-ups re-run when the player (and therefore the target) changes.
  const fg = useCountUp(player.stats.fg, inView, { duration: 900 })
  const distance = useCountUp(player.stats.distance, inView, { duration: 900, decimals: 1 })
  const topSpeed = useCountUp(player.stats.topSpeed, inView, { duration: 900, decimals: 1 })

  const trendPoints = player.trend.map((p) => `${p.x},${p.y}`).join(' ')

  return (
    <div className="dash" ref={containerRef}>
      <div className="dash-bar">
        <div className="dash-bar-left">
          <span className="dash-live">
            <span className="dash-live-dot"></span>LIVE
          </span>
          <span className="dash-title">
            Player #{player.jersey} · {player.role} · Session Summary
          </span>
        </div>
        <span className="dash-demo-tag">Sample data · Demo</span>
      </div>

      {/* Player selector — switching re-animates every panel below */}
      <div className="dash-tabs" role="tablist" aria-label="Select sample player">
        {players.map((p) => (
          <button
            key={p.id}
            role="tab"
            aria-selected={p.id === activeId}
            className={`dash-tab ${p.id === activeId ? 'active' : ''}`}
            onClick={() => setActiveId(p.id)}
          >
            #{p.jersey} {p.role}
          </button>
        ))}
      </div>

      <div className="dash-stats">
        <div className="dash-stat">
          <span className="dash-stat-num">{player.stats.minutes}</span>
          <span className="dash-stat-label">Minutes Played</span>
        </div>
        <div className="dash-stat">
          <span className="dash-stat-num">{Math.round(fg)}%</span>
          <span className="dash-stat-label">Field Goal</span>
        </div>
        <div className="dash-stat">
          <span className="dash-stat-num">{distance.toFixed(1)}km</span>
          <span className="dash-stat-label">Distance</span>
        </div>
        <div className="dash-stat">
          <span className="dash-stat-num">{topSpeed.toFixed(1)} m/s</span>
          <span className="dash-stat-label">Top Speed</span>
        </div>
      </div>

      <div className="dash-body">
        <div className="dash-panel">
          <div className="dash-panel-head">
            <span className="dash-panel-title">Shooting Trend by Quarter</span>
            <span className={`dash-panel-badge ${player.trendBadge.startsWith('-') ? 'down' : 'up'}`}>
              {player.trendBadge}
            </span>
          </div>
          <svg viewBox="0 0 320 140" className="trend-svg" preserveAspectRatio="none">
            <line x1="0" y1="35" x2="320" y2="35" className="trend-grid" />
            <line x1="0" y1="70" x2="320" y2="70" className="trend-grid" />
            <line x1="0" y1="105" x2="320" y2="105" className="trend-grid" />
            {/* key forces a remount so the draw animation replays on player switch */}
            <polyline key={player.id} points={trendPoints} className="trend-line draw" />
            {player.trend.map((p) => (
              <g key={`${player.id}-${p.x}`}>
                <circle cx={p.x} cy={p.y} r="4.5" className="trend-dot" />
                <text x={p.x} y={p.y - 12} className="trend-label" textAnchor="middle">
                  {p.pct}
                </text>
              </g>
            ))}
          </svg>
          <div className="trend-axis">
            <span>Q1</span>
            <span>Q2</span>
            <span>Q3</span>
            <span>Q4</span>
          </div>
        </div>

        <div className="dash-panel">
          <div className="dash-panel-head">
            <span className="dash-panel-title">Shot Chart</span>
            <div className="shot-chart-key">
              <span>
                <i className="dot made"></i>Make
              </span>
              <span>
                <i className="dot miss"></i>Miss
              </span>
            </div>
          </div>
          <svg viewBox="0 0 300 170" className="court-svg">
            <rect x="1" y="1" width="298" height="168" rx="6" className="court-floor" />
            <rect x="1" y="45" width="76" height="80" className="court-line-el" />
            <path d="M 77 45 A 90 90 0 0 1 77 125" className="court-line-el" />
            <path d="M 1 15 A 130 130 0 0 1 1 155" className="court-line-el" />
            <circle cx="10" cy="85" r="2.5" className="hoop" />
            {player.shots.map((s, i) => (
              <circle
                key={`${player.id}-${i}`}
                cx={s.x}
                cy={s.y}
                r="6"
                className={`shot-dot pop ${s.made ? 'made' : 'miss'}`}
                style={{ animationDelay: `${i * 90}ms` }}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="dash-insight">
        <span className="dash-insight-tag">AI Insight</span>
        <p key={player.id}>{player.insight}</p>
      </div>
    </div>
  )
}
